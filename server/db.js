
module.exports = function (bcrypt, mongodb) {

        var MongoClient = mongodb.MongoClient;

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
    var BSON = mongodb.BSONPure;

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
            var query = {'_id': user._id };
            this.getUser(query, function (err, u) {
                if (err) {
                    return console.error(err);
                }
                var collection = db.collection('users');
                user.password = u.password;
                var o_id = new BSON.ObjectID(u._id);
                delete user._id;
                collection.update({'_id': o_id}, user, function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        if (callback)
                            callback(err, user);
                    });
            });
        },
        updateUserField: function (_id, field, callback) {
            var collection = db.collection('users');
            var o_id = new BSON.ObjectID(_id);
            collection.update({'_id': o_id}, {'$set': field}, function (err, user) {
                if (err) {
                    return console.error(err);
                }
                if (callback)
                    callback(err, user);
            });
        },
        getUser: function (user, callback) {
            var collection = db.collection('users');
            if (user._id) {
                var o_id = new BSON.ObjectID(user._id);
                user._id = o_id;
            }
            collection.find(user)
                .toArray(function (err, docs) {
                    if (err) {
                        return console.error(err);
                    }
                    if (docs.length == 0) {
                        callback(null, null);
                    }
                    else {
                        docs[0]._id = docs[0]._id.toHexString();
                        callback(null, docs[0]);
                    }
                });
        },
        getUsers: function (callback) {
            var collection = db.collection('users');
            collection.find()
                .toArray(function (err, docs) {
                    if (err) {
                        return console.error(err);
                    }
                    if (docs.length == 0) {
                        callback(null, null);
                    }
                    else {

                        for (var i = 0; i < docs.length; i++) {
                            delete docs[i].password;
                        }

                        callback(null, docs);
                    }
                });
        }
    };
    return self;
}