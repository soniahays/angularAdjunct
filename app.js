var http = require('http'),
    https = require('https'),
    path = require('path'),
    fs = require('fs'),
    uuid = require('node-uuid'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    logger = require('morgan'),
    aws = require('aws-sdk'),
    passport = require('passport'),
    ensureLoggedIn = require('./server/ensureLoggedIn.js'),
    bcrypt = require('bcryptjs'),
    mongodb = require('mongodb'),
    url = require('url'),
    _ = require('underscore'),
    os = require('os'),
    connect = require('./server/dbConnect.js')(mongodb),
    elasticsearch = require('es')({
        server: {
            auth: '7jrpodo2:pg40ubsoo8ebvaqg',
            host: 'spruce-9191479.us-east-1.bonsai.io'
        }
    }),
    es = require('./server/elasticsearch.js')(elasticsearch),
    linkedinAuth = require('./server/linkedinAuth.js')(http, https),
    MobileDetect = require('mobile-detect');

var userDb, jobDb, institutionDb, pass, s3, ses;

aws.config.region = 'us-west-2';

s3 = new aws.S3({params: {Bucket: 'myBucket'}});

/**
 * Connect to MongoDb then start Express server
 */
connect(function (err, db) {
    console.log('Connected to mongodb.');
    userDb = require('./server/userDb.js')(mongodb, db, bcrypt),
        jobDb = require('./server/jobDb.js')(mongodb, db),
        institutionDb = require('./server/institutionDb.js')(mongodb, db),
        metadataDb = require('./server/metadataDb.js')(mongodb, db),
        utils = require('./server/utils.js')(uuid, fs, https, s3, path),
        pass = require('./server/passport.js')(userDb, passport, bcrypt, _, utils);

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('partials', path.join(app.get('views'), 'partials'));
app.set('publicPath', path.join(__dirname, 'public'));
app.set('uploadPath', path.join(app.get('publicPath'), 'uploads'));
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(app.get('publicPath')));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());


// Kill the cache because Internet Explorer doesn't do caching properly
app.use(function noCache(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});

/**
 * Routes
 */

app.get('/api/users', function (req, res) {
    userDb.getUsers(function (err, users) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!users) {
            return res.send('Not found');
        }
        return res.json(users);
    });
});

// elastic search indexing
app.post('/api/index-search', function (req, res) {
    userDb.getUsers(function (err, users) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!users) {
            return res.send('Not found');
        }
        return res.json(es.index(users));
    });
});

app.get('/api/get-adjuncts-profile/:id', function (req, res) {
    var _id = req.params.id;

    if (!_id)
        return res.send("ID required");

    var user = {'_id': _id};

    userDb.getUser(user, function (err, user) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!user) {
            return res.json({});
        }
        delete user.password;
        return res.json(user);
    });
});

app.get('/api/get-job-profile/:id', function (req, res) {
    var _id = req.params.id;

    if (!_id)
        return res.send("ID required");

    var job = {'_id': _id};

    jobDb.getJob(job, function (err, job) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!job) {
            return res.json({});
        }

        return res.json(job);
    });
});

app.get('/api/get-institutions-profile/:id', function (req, res) {
    var _id = req.params.id;

    if (!_id)
        return res.send("ID required");

    var institution = {'_id': _id};

    institutionDb.getInstitution(institution, function (err, institution) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!institution) {
            return res.json({});
        }

        return res.json(institution);
    });
});

app.post('/api/signup', function (req, res) {
    userDb.insertUser(req.body.user, function (err, user) {
        res.json(user);
    });
});

app.post('/api/save-adjuncts-profile', function (req, res) {
    if (req.body.user) {
        userDb.updateUser(req.body.user);
    }
    else {
        console.log("req.body.user is null!");
    }
    res.end();
});

app.post('/api/save-job-profile', function (req, res) {
    if (req.body.job) {
        if (req.body.job._id) {
            jobDb.updateJob(req.body.job);
        }
        else {
            jobDb.insertJob(req.body.job);
        }
    }
    else {
        console.log("req.body.job is null!");
    }
    res.end();
});

app.post('/api/save-job-for-user', function (req, res) {
    userDb.addUserJob(req.cookies._id, {'jobs': req.body.jobId}, function () {
        res.end();
    });
});

app.post('/api/save-institutions-profile', function (req, res) {
    if (req.body.institution) {
        institutionDb.updateInstitution(req.body.institution);
    }
    else {
        console.log("req.body.institution is null!");
    }
    res.end();
});

app.post('/upload-adjunct', function (req, res) {
    utils.upload(req.files, function (err, newFileName, fileName) {
        if (err) {
            res.json(err);
        }
        else {
            userDb.updateUserField(req.cookies._id, {'imageName': newFileName}, function () {
                res.send({ msg: '<b>"' + fileName + '"</b> uploaded.' });
            });
        }
    });
});


app.post('/send-email', function (req, res) {

    // send to list
    var to = ['naderchehab@gmail.com', '7sonia@gmail.com']

    // this must relate to a verified SES account
    var from = "naderchehab@gmail.com";

    ses.sendEmail({
        Source: from,
        Destination: { ToAddresses: to },
        Message: {
            Subject: {
                Data: '[adjunct] Email from ' + req.body.email.userName
            },
            Body: {
                Text: {
                    Data: "User email: " + req.body.email.userEmail + "\nUser Message: " + req.body.email.body
                }
            }
        }
    }, function (err, data) {
        if (err) {
            throw err;
        }
        console.log('Email sent:', data);
        res.send({msg: 'Email sent'});
    });
});

app.post('/api/search', function (req, res) {
    es.search({'query': {'match': {'_all': req.body.query}}}, function (err, result) {
        res.json(result);
    });
});

app.post('/api/searchAll', function (req, res) {
    es.search({'query': {'match_all': {}}}, function (err, result) {
        res.json(result);
    });
});

app.get('/partial/adjuncts-profile',
    ensureLoggedIn({ redirectTo: path.join(app.get('partials'), 'signin.html'), customReturnTo: '/profile' }),
    function (req, res) {
        res.cookie('_id', req.user._id);
        res.render(path.join(app.get('partials'), 'adjuncts-profile.html'));
    });

app.get('/partial/adjuncts-profile/:userId',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'adjuncts-profile.html'), { locals: {'userId': req.params.userId}});
    });

app.get('/partial/job-profile/:jobId',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'job-profile.html'), { locals: {'jobId': req.params.jobId}});
    });

app.get('/partial/institutions-profile/:institutionId',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'institutions-profile.html'), { locals: {'institutionId': req.params.institutionId}});
    });

app.get('/partial/search-results',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'search-results.html'), { locals: {'all': true}});
    });

app.get('/partial/search-results/:searchTerm',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'search-results.html'), { locals: {'searchTerm': req.params.searchTerm}});
    });

app.get('/partial/:name',
    function (req, res) {
        var name = req.params.name;
        res.render(path.join(app.get('partials'), name + '.html'));
    });

app.get('/signout', function (req, res) {
    req.logout();
    res.clearCookie('_id', { path: '/' });
    res.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successReturnToOrRedirect: '/profile',
        failureRedirect: '/signin' })
);

app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE'  }));

app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
        failureRedirect: '/signin' }),
    function(req, res) {
        if (req.user[0]) {
            req.session.user = req.user[0];
            res.cookie('_id', req.user[0]._id.toString());
        }
        res.redirect('/profile');
    }
);

app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successReturnToOrRedirect: '/profile',
        failureRedirect: '/signin' })
);

app.post('/api/signin',
    passport.authenticate('local', {
        successReturnToOrRedirect: '/profile',
        failureRedirect: '/signin' })
);

app.get('/api/linkedInAuth', function (req, res) {

// If we have the access_token in the cookie skip the Oauth Dance and go straight to Step 3 (which is calling the linkedIn API)
    if (req.cookies.linkedinAccessToken) {
        linkedinAuth.oauthStep3(req, res, req.cookies.linkedinAccessToken, 'people/~:(summary,positions,skills,connections,shares,network,picture-urls::(original))', function (data) {
            var parsedData = JSON.parse(data);

            if (parsedData.status == "401") {
                console.log(err);
                res.json(err);
            }

            // get the linkedin picture
            if (parsedData && parsedData.pictureUrls) {
                var pictureUrl = parsedData.pictureUrls.values[0];
                utils.getLinkedInPicture(pictureUrl, function(err, data) {
                    // we are done, save the linkedin date to the session so it can be retrieved in another call
                    req.session.linkedinData = data;
                    res.writeHead(302, { 'Location': 'http://' + req.headers.host + '/profile' });
                    res.end();
                });
            }
        });

    } else {
        linkedinAuth.oauthStep1(req, res);
    }
});

// The user has successfully entered their linkedin username/password, now we proceed to step 2
app.get('/api/linkedInAuthCallback', function (req, res) {
    var queryObject = url.parse(req.url, true).query;
    linkedinAuth.oauthStep2(req, res, queryObject.code, 'people/~:(summary,positions,skills,connections,shares,network,picture-urls::(original))', function (data) {
        req.session.linkedinData = data;
        res.writeHead(302, { 'Location': 'http://' + req.headers.host + '/profile' });
        res.end();
    });
});

app.get('/api/getLinkedinData', function (req, res) {
    res.send(req.session.linkedinData);
});

app.post('/basic-profile', function (req, res) {
    userDb.updateUser(req.body.user);
    res.end();
});

app.get('/api/countries', function (req, res) {
    metadataDb.get('countries', function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving countries");
        }
        if (!docs) {
            return res.send("[]");
        }
        var data = _.map(docs, function (item) {
            return { id: item._id, text: item.text }
        });
        return res.json(data);
    });
});

app.get('/api/fieldGroups', function (req, res) {
    metadataDb.get('fieldGroups', function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving fieldGroups");
        }
        if (!docs) {
            return res.send("[]");
        }
        var data = _.map(docs, function (item) {
            return { id: item._id, text: item.name }
        });
        return res.json(data);
    });
});

app.get('/api/edDegrees', function (req, res) {
    metadataDb.get('edDegrees', function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving edDegrees");
        }
        if (!docs) {
            return res.send("[]");
        }
        var data = _.map(docs, function (item) {
            return { id: item._id, text: item.name }
        });
        return res.json(data);
    });
});

app.get('/api/institutions', function (req, res) {
    metadataDb.get('institutions', function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving institutions");
        }
        if (!docs) {
            return res.send("[]");
        }
        var data = _.map(docs, function (item) {
            return { id: item._id, text: item.name }
        });
        return res.json(data);
    });
});

app.get('/api/:collectionName/:pageNumber/:pageSize', function (req, res) {
    metadataDb.getPage(req.params.collectionName, req.params.pageNumber, req.params.pageSize, function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving page " + req.params.pageNumber + " from " + req.params.collectionName);
        }

        if (!docs) {
            return res.json({count: 0, docs: []});
        }

        metadataDb.getCount(req.params.collectionName, function(err, count) {
            return res.json({count: count, docs: docs});
        });
    });
});

app.get('/api/:collectionName', function (req, res) {
    metadataDb.get(req.params.collectionName, function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving " + req.params.collectionName);
        }
        if (!docs) {
            return res.send("[]");
        }
        return res.json(docs);
    });
});

app.post('/api/:collectionName', function (req, res) {
    metadataDb.getWhere(req.params.collectionName, {'name': {$regex: req.body.query + ".*"}}, function (err, docs) {
        if (err) {
            return res.send(500, "Error retrieving " + req.params.collectionName);
        }
        if (!docs) {
            return res.send("[]");
        }
        var data = _.map(docs, function (item) {
            return { id: item._id, text: item.name }
        });
        return res.json(data);
    });
});

app.get('*', function (req, res) {
    var md;
    var isMobile;
    if (req.user) { // user coming from valid passport authentication
        res.cookie('_id', req.user._id);
    }
    md = new MobileDetect(req.headers['user-agent']);
    isMobile = (md.mobile() !== null);

    res.render(path.join(app.get('views'), 'index.html'), { locals: {'isMobile': isMobile}});
});

