var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

var db, err;

module.exports.connect = function(callback) {
    MongoClient.connect("mongodb://localhost:27017/adjunct", function(err_, db_) {
        err = err_;
        db = db_;
        callback();
    });
};

module.exports.insert = function (username, password) {
    var collection = db.collection('users');
    collection.remove(function (err, result) {
        if (err) {
            return console.error(err)
        }
        collection.insert([{ username: username, password: password }], function (err, docs) {
            if (err) {
                return console.error(err)
            }
        })
    })
};

module.exports.get = function (callback) {
    var collection = db.collection('users');
    collection.find().toArray(function(err, docs){
        callback(docs[0].username, docs[0].password);
    });
};