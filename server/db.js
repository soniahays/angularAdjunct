var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

module.exports = function (bcrypt) {

    var MONGO_URL = "mongodb://localhost:27017/adjunct";
    switch (process.env.NODE_ENV) {
        case 'development':
            MONGO_URL = "mongodb://nader:adj0nct@paulo.mongohq.com:10043/adjunct";
            break;
        case 'production':
            MONGO_URL = "mongodb://nader:adj0nct@paulo.mongohq.com:10043/adjunct";
            break;
    }

    var db, err;
    var self = {
        connect: function (callback) {
            MongoClient.connect(MONGO_URL, function (err_, db_) {
                err = err_;
                db = db_;
                callback();
            });
        },
        insertUser: function (user, callback) {
            var collection = db.collection('users');
            if (user.password) {
                user.idType = 'email';
                user.id = user.email;
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(user.password, salt, function (err, hash) {
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
        updateUser: function (user, callback) {
            this.getUser(user, function (err, u) {
                if (err) {
                    return console.error(err);
                }
                var collection = db.collection('users');
                    user.password = u.password;
                    delete user._id;
                    collection.update({'id': u.id}, user, function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        if (callback)
                            callback(err, user);
                    });
            });
        },
        updateUserField: function (id, field, callback) {
            var collection = db.collection('users');
            collection.update({'id': id}, {'$set': field}, function (err, user) {
                if (err) {
                    return console.error(err);
                }
                if (callback)
                    callback(err, user);
            });
        },
        getUser: function (user, callback) {
            var collection = db.collection('users');
            collection.find({'idType': user.idType, 'id': user.id})
                .toArray(function (err, docs) {
                    if (err) {
                        return console.error(err);
                    }
                    if (docs.length == 0) {
                        callback(null, null);
                    }
                    else {
                        callback(null, docs[0]);
                    }
                });
        }};
    return self;
}