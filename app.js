var express = require('express');
var app = express();
var isLocal = false;

app.configure('development', function () {
    isLocal = true;
});
app.configure('production', function () {
    isLocal = false;
});

var http = require('http'),
    path = require('path'),
    passport = require('passport'),
    ensureLoggedIn = require('./server/ensureLoggedIn.js'),
    bcrypt = require('bcrypt'),
    db = require('./server/db.js')(bcrypt, isLocal),
    pass = require('./server/passport.js')(db, passport, bcrypt, isLocal),
    countries = require('./server/api/countries.json'),
    fieldGroup = require('./server/api/fieldGroup.json');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('partials', path.join(app.get('views'), 'partials'));
app.engine('html', require('ejs').renderFile);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());


/**
 * Routes
 */
app.get('/api/countries', function (req, res) {
    res.json(countries);
});

app.get('/api/fieldGroup', function (req, res) {
    res.json(fieldGroup);
});

app.get('/api/get-adjuncts-profile/:email', function(req, res){
    var email = req.params.email;

    if (!email)
        return res.send("email required");

    db.getUser({'email': email}, function(err, user) {
        if (err) {
            return res.send(500, "Error retrieving user");
        }
        if (!user) {
            return res.send("{}");
        }
        delete user.password;
        res.json(user);
    });
});

app.get('/partial/adjuncts-profile',
    ensureLoggedIn({ redirectTo: path.join(app.get('partials'), 'signin-popover.html'), setReturnTo: true, customReturnTo: '/profile' }),
    function (req, res) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', '0');
        res.render(path.join(app.get('partials'), 'adjuncts-profile.html'));
    });

app.get('/partial/:name',
    function (req, res) {
        var name = req.params.name;
        res.render(path.join(app.get('partials'), name + '.html'));
    });

app.get('/signout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/signin' })
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
        successRedirect: '/',
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

app.post('/save-adjuncts-profile', function(req, res){
    console.log(req.body.user);
    db.updateUser(req.body.user);
    res.end();
 });

app.get('*', function (req, res) {
    console.log("GET index.html", "user: " + req.user, "url: " + req.url);
    res.render(path.join(app.get('views'), 'index.html'), { user: req.user });
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
