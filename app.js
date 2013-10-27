var express = require('express'),
    http = require('http'),
    path = require('path'),
    db = require('./server/db.js'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('partials', path.join(app.get('views'),  'partials'));
app.engine('html', require('ejs').renderFile);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render(path.join(app.get('views'), 'index.html'));
});

app.get('/jobs', function(req, res) {
    res.render(path.join(app.get('views'), 'index.html'));
});

app.get('/partial/:name', function(req, res) {
    var name = req.params.name;
    res.render(path.join(app.get('partials'), name + '.html'));
});

app.post('/test', function(req, res) {
    var name = req.body.query;
    console.log(name);
    db.insert(name);
    res.send("working");
});

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});