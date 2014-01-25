var http = require('http'),
    https = require('https'),
    path = require('path'),
    fs = require('fs'),
    uuid = require('node-uuid'),
    express = require('express'),
    passport = require('passport'),
    ensureLoggedIn = require('./server/ensureLoggedIn.js'),
    bcrypt = require('bcryptjs'),
    aws = require('aws-sdk'),
    mongodb = require('mongodb'),
    url = require('url'),
    _ = require('underscore'),
    connect = require('./server/dbConnect.js')(bcrypt, mongodb),
    elasticsearch = require('es')({
        server: {
            auth: '7jrpodo2:pg40ubsoo8ebvaqg',
            host: 'spruce-9191479.us-east-1.bonsai.io'
        }
    }),
    es = require('./server/elasticsearch.js')(elasticsearch),
    linkedinAuth = require('./server/linkedinAuth.js')(http, https);

var userDb, jobDb, institutionDb, pass;

/**
 * Connect to MongoDb then start Express server
 */
connect(function (err, db) {
    console.log('Connected to mongodb.');
    userDb = require('./server/userDb.js')(mongodb, db, bcrypt),
    jobDb = require ('./server/jobDb.js')(mongodb, db),
    institutionDb = require ('./server/institutionDb.js')(mongodb, db),
        metadataDb = require ('./server/metadataDb.js')(mongodb, db),
    pass = require('./server/passport.js')(userDb, passport, bcrypt, _);

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('partials', path.join(app.get('views'), 'partials'));
app.set('publicPath', path.join(__dirname, 'public'));
app.set('bowerPath', path.join(__dirname, 'bower_components'));
app.set('uploadPath', path.join(app.get('publicPath'), 'uploads'));
app.engine('html', require('ejs').renderFile);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.static(app.get('publicPath')));
app.use(express.static(app.get('bowerPath')));
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());


// Kill the cache because Internet Explorer doesn't do caching properly
app.use(function noCache(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});

// We use AWS S3 to store profile pictures
aws.config.loadFromPath('./server/config/aws-config.json');
var s3 = new aws.S3();

// We use AWS SES to send emails
var ses = new aws.SES({apiVersion: '2010-12-01'});

/**
 * Routes
 */

app.get('/api/users', function(req, res) {
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
app.post('/api/index-search', function(req, res) {
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
   userDb.insertUser(req.body.user, function(err, user) {
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
        userDb.addUserJob(req.cookies._id, {'jobs': req.body.jobId}, function() {
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
    upload(req, res, function(newFileName, fileName){
        userDb.updateUserField(req.cookies._id, {'imageName': newFileName}, function() {
            res.send({ msg: '<b>"' + fileName + '"</b> uploaded.' });
        });
    });
});

app.post('/upload-institution/:id', function (req, res) {
    upload(req, res, function(newFileName, fileName){
        institutionDb.updateInstitutionField(req.params.id, {'imageName': newFileName}, function() {
            res.send({ msg: '<b>"' + fileName + '"</b> uploaded.' });
        });
    });
});

app.post('/upload-job/:id', function (req, res) {
    upload(req, res, function(newFileName, fileName){
        jobDb.updateJobField(req.params.id, {'imageName': newFileName}, function() {
            res.send({ msg: '<b>"' + fileName + '"</b> uploaded.' });
        });
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

var upload = function(req, res, callback){
    setTimeout(
        function () {
            res.setHeader('Content-Type', 'text/html');
            if (req.files.length == 0 || req.files.file.size == 0)
                res.send({ 'msg': 'No file uploaded.' });
            else {
                var file = req.files.file;
                var newFileName = uuid.v1() + path.extname(file.path);
                try {
                    var s3object = {
                        'Bucket': 'Adjuncts',
                        'Key': newFileName,
                        'Body': fs.createReadStream(file.path),
                        'ACL': 'public-read'
                    };
                    s3.putObject(s3object, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.send(err);
                        }
                        else {
                            callback(newFileName, file.name);
                        }
                    });
                }
                catch (e) {
                    res.send({ 'msg': '<b>"' + file.name + '"</b> NOT uploaded. ' + e });
                }
            }
        },
        (req.param('delay', 'yes') == 'yes') ? 2000 : -1
    );
};

app.post('/api/search', function (req, res) {
    es.search({'query': {'match': {'_all': req.body.query}}}, function(err, result) {res.json(result);});
});

app.post('/api/searchAll', function (req, res) {
    es.search({'query': {'match_all': {}}}, function(err, result) {res.json(result);});
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
        successReturnToOrRedirect: '/profile',
        failureRedirect: '/signin' })
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
    if (req.cookies.linkedinAccessToken){
        linkedinAuth.oauthStep3(req, res, req.cookies.linkedinAccessToken, 'people/~:(summary,positions,skills,connections,shares,network)', function(data) {
            req.session.linkedinData = data;
            res.writeHead(302, { 'Location': 'http://' + req.headers.host + '/profile/edit' });
            res.end();
        });
    } else {
        linkedinAuth.oauthStep1(req, res);
    }
});

// The user has successfully entered their linkedin username/password, now we proceed to step 2
app.get('/api/linkedInAuthCallback', function (req, res) {
    var queryObject = url.parse(req.url, true).query;
    linkedinAuth.oauthStep2(req, res, queryObject.code, 'people/~:(summary,positions,skills,connections,shares,network)', function(data) {
        req.session.linkedinData = data;
        res.writeHead(302, { 'Location': 'http://' + req.headers.host + '/profile/edit' });
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

app.get('/api/:collectionName', function (req, res) {
    metadataDb.get(req.params.collectionName, function(err, docs) {
        if (err) {
            return res.send(500, "Error retrieving " + req.params.collectionName);
        }
        if (!docs) {
            return res.send("[]");
        }
        return res.json(docs);
    });
});

app.get('*', function (req, res) {
    if (req.user) { // user coming from valid passport authentication
        res.cookie('_id', req.user._id);
    }
    res.render(path.join(app.get('views'), 'index.html'));
});