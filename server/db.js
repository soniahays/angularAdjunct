var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

module.exports = function(bcrypt) {

    var db, err;
    var self = {
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
        getUser: function (user, callback) {
            var collection = db.collection('users');
            var result = collection.find({$and: [{'email': {$exists: true}}, {'email': user.email}]});
            result.toArray(function(err, docs) {
                if (docs.length == 0) {
                    result = collection.find({'facebookId': user.facebookId});
                    result.toArray(function(err, docs) {
                        if (docs.length == 0) {
                            callback(Error("Couldn't find user"), null);
                        }
                        else {
                            callback(null, docs[0]);
                        }
                    });
                }
            });
        },
        findOrCreate: function(user, callback)  {
            var collection = db.collection('users');
            collection.find(user).toArray(function(err, docs){
                if (docs.length > 0)
                    callback(err, docs[0]);
                else {
                    self.insertUser(user);
                }
            });

        }
    };
    return self;
}