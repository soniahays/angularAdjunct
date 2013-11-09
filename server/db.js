var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

module.exports = function(bcrypt) {

    var db, err;
    var self = {
        connect: function(callback) {
            MongoClient.connect("mongodb://localhost:27017/adjunct", function(err_, db_) {
            //MongoClient.connect("mongodb://nader:adj0nct@paulo.mongohq.com:10043/adjunct", function(err_, db_) {
                err = err_;
                db = db_;
                callback();
            });
        },
        insertUser: function (user, callback) {
            var collection = db.collection('users');
            if (user.password) {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(user.password, salt, function(err, hash) {
                        user.password = hash;
                        collection.insert([user], function (err) {
                            if (err) {
                                return console.error(err);
                            }
                            else {
                                if (callback)
                                    callback(err, user);
                            }
                        });
                    });
                });
            }
            else {
                collection.insert([user], function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    else {
                        if (callback)
                            callback(err, user);
                    }
                });
            }
        },
        getUser: function (user, callback) {
            var collection = db.collection('users');
            var result = collection.find({$and: [{'email': {$exists: true}}, {'email': user.email}]});
            result.toArray(function(err, docs) {
                if (docs.length == 0) {
                    result = collection.find({$and: [{'facebookId': {$exists: true}}, {'facebookId': user.facebookId}]});
                    result.toArray(function(err, docs) {
                        if (docs.length == 0) {
                            result = collection.find({$and: [{'linkedinId': {$exists: true}}, {'linkedinId': user.linkedinId}]});
                            result.toArray(function(err, docs) {
                                if (docs.length == 0) {
                                    callback(null, null);
                                }
                                else {
                                    callback(null, docs[0]);
                                }
                            });
                        }
                        else {
                            callback(null, docs[0]);
                        }
                    });
                }
                else {
                    callback(null, docs[0]);
                }
            });
        }
    };
    return self;
}