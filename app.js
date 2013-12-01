var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    uuid = require('node-uuid'),
    express = require('express'),
    passport = require('passport'),
    ensureLoggedIn = require('./server/ensureLoggedIn.js'),
    bcrypt = require('bcrypt'),
    aws = require('aws-sdk'),
    mongodb = require('mongodb'),
    db = require('./server/db.js')(bcrypt, mongodb),
    pass = require('./server/passport.js')(db, passport, bcrypt, mongodb),
    countries = require('./server/api/countries.json'),
    months = require('./server/api/months.json'),
    fieldGroup = require('./server/api/fieldGroup.json');

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

/**
 * Routes
 */
app.get('/api/countries', function (req, res) {
    res.json(countries);
});

app.get('/api/months', function (req, res) {
    res.json(months);
});
app.get('/api/fieldGroup', function (req, res) {
    res.json(fieldGroup);
});

app.get('/api/users', function(req, res) {
    db.getUsers(function (err, users) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!users) {
            return res.send('Not found');
        }
        return res.json(users);
    });
});

app.get('/api/get-adjuncts-profile/:id', function (req, res) {
    var _id = req.params.id;

    if (!_id)
        return res.send("ID required");

    var user = {'_id': _id};

    db.getUser(user, function (err, user) {
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

app.get('/partial/adjuncts-profile',
    ensureLoggedIn({ redirectTo: path.join(app.get('partials'), 'signin-popover.html'), customReturnTo: '/profile' }),
    function (req, res) {
        res.cookie('_id', req.user._id);
        res.render(path.join(app.get('partials'), 'adjuncts-profile.html'));
    });

app.get('/partial/adjuncts-profile/:userId',
    function (req, res) {
        res.render(path.join(app.get('partials'), 'adjuncts-profile.html'), { locals: {'userId': req.params.userId}});
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
        successReturnToOrRedirect: '/',
        failureRedirect: '/signin' })
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/signin' })
);

app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/signin' })
);

app.post('/signin-post',
    passport.authenticate('local', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/signin' })
);

app.post('/signup', function (req, res) {
    db.insertUser(req.body.user);
    res.end();
});

app.post('/basic-profile', function (req, res) {
    db.updateUser(req.body.user);
    res.end();
});

app.post('/save-adjuncts-profile', function (req, res) {
    if (req.body.user) {
        db.updateUser(req.body.user);
    }
    else {
        console.log("req.body.user is null!");
    }
    res.end();
});



app.post('/upload', function (req, res) {
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
                            db.updateUserField(req.cookies._id, {'imageName': newFileName}, function() {
                                res.send({ msg: '<b>"' + file.name + '"</b> uploaded.' });
                            });
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
});

app.get('*', function (req, res) {
    if (req.user) { // user coming from valid passport authentication
        res.cookie('_id', req.user._id);
    }
    res.render(path.join(app.get('views'), 'index.html'));
});


/**
 * Start Server
 */
db.connect(function () {
    console.log('Connected to mongodb.');
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
