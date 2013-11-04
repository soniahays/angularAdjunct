var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

module.exports = function(bcrypt) {

    var db, err;
    return {
        connect: function(callback) {
            MongoClient.connect("mongodb://localhost:27017/adjunct", function(err_, db_) {
                err = err_;
                db = db_;
                callback();
            });
        },
        insertUser: function (user) {
            var collection = db.collection('users');
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(user.password, salt, function(err, hash) {
                    user.password = hash;
                    collection.insert([user], function (err, docs) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
            });
        },
        getUser: function (email, callback) {
            var collection = db.collection('users');
            collection.find({'email': email}).toArray(function(err, docs){
                callback(docs[0].email, docs[0].password);
            });
        }
    };
}