
var express = require('express');
var app = express();
var isLocal;

app.configure('development', function(){
    isLocal = true;
});
app.configure('production', function(){
    isLocal = false;
});

var http = require('http'),
    path = require('path'),
    passport = require('passport'),
    cel = require('connect-ensure-login'),
    bcrypt = require('bcrypt'),
    db = require('./server/db.js')(bcrypt, isLocal),
    pass = require('./server/passport.js')(db, passport, bcrypt, isLocal),
    countries = require('./server/api/countries.json'),
    fieldGroup = require('./server/api/fieldGroup.json');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('partials', path.join(app.get('views'),  'partials'));
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
app.get('/api/countries', function(req, res) {
    res.json(countries);
});

app.get('/api/fieldGroup', function(req, res) {
    res.json(fieldGroup);
});

app.get('/partial/:name', function(req, res) {
    var name = req.params.name;
    res.render(path.join(app.get('partials'), name + '.html'));
});

app.get('/signout', function(req, res){
    req.logout();
    res.redirect('/');
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
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

app.post('/signin',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin' })
);

app.post('/signup', function(req, res){
    db.insertUser(req.body.user);
    res.end();
});

app.post('/basic-profile', function(req, res){
    db.insertUser(req.body.user);
    res.end();});

app.post('/adjuncts-profile', function(req, res){
    db.insertUser(req.body.user);
    res.end();});

app.get('*', function(req, res) {
    res.render(path.join(app.get('views'), 'index.html'), { user: req.user });
});

/**
 * Start Server
 */
db.connect(function() {
    console.log('Connected to mongodb.');
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
