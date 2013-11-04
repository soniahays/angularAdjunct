/**
 * Modules
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    passport = require('passport'),
    cel = require('connect-ensure-login'),
    bcrypt = require('bcrypt'),
    db = require('./server/db.js')(bcrypt),
    pass = require('./server/passport.js')(db, passport, bcrypt)
/**
 * Configuration
 */
var app = express();
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

app.get('/partial/:name', function(req, res) {
    var name = req.params.name;
    res.render(path.join(app.get('partials'), name + '.html'));
});

app.get('/signout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.get('*', function(req, res) {
    res.render(path.join(app.get('views'), 'index.html'), { user: req.user });
});

app.post('/signin',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin' })
);

app.post('/signup', function(req, res){
    db.insertUser(req.body.user);
res.end();});

/**
 * Start Server
 */
db.connect(function() {
    console.log('Connected to mongodb.');
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
