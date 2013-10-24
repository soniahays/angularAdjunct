var express = require('express'),
    pg = require('pg'),
    app = express();

var db = require('./db.js');


app.use(express.bodyParser());

app.configure(function(){
  app.use(express.static(__dirname + '/app'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/get', function(req, res){
    db.get(function(val){ res.send(val); console.log(val);}) ;


});





app.post('/search', function(req, res) {
    var name = req.body.query;
    console.log(name);
    db.insert(name);
    res.send("working");
});






app.listen(process.env.PORT || 3000);

var aDBparams = {
    host: 'ec2-54-225-123-71.compute-1.amazonaws.com',
    port: '5432',
    user: 'mnobcdbdvsdjut',
    password: '5EZKzFT28d_1s3R5j27roSPiLn',
    database: 'den5374f86g52o',
    ssl: true
};

var client = new pg.Client(aDBparams);

client.connect(function(err, client, done) {
    if (err) {
        return console.error('error running query', err);
    }
    client.query('SELECT * FROM public.adjunct', function(err, result) {

        console.log(result.rows);
    });
});
