module.exports = function (mongodb) {

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
        insertInstitution: function (institution, callback) {
            var collection = db.collection('institutions');
            collection.insert([institution], function (err) {
                if (err) {
                    return console.error(err);
                }
                else {
                    if (callback)
                        callback(err, institution);
                }
            });

        },
        updateInstitution: function (institution, callback) {
            var query = {'_id': institution._id };
            this.getInstitution(query, function (err, u) {
                if (err) {
                    return console.error(err);
                }
                var collection = db.collection('institutions');
                var o_id = new BSON.ObjectID(u._id);
                delete institution._id;
                collection.update({'_id': o_id}, institution, function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    if (callback)
                        callback(err, institution);
                });
            });
        },
        updateInstitutionField: function (_id, field, callback) {
            var collection = db.collection('institutions');
            var o_id = new BSON.ObjectID(_id);
            collection.update({'_id': o_id}, {'$set': field}, function (err, institution) {
                if (err) {
                    return console.error(err);
                }
                if (callback)
                    callback(err, institution);
            });
        },
        getInstitution: function (institution, callback) {
            var collection = db.collection('institutions');
            if (institution._id) {
                var o_id = new BSON.ObjectID(institution._id);
                institution._id = o_id;
            }
            collection.find(institution)
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
        getInstitutions: function (callback) {
            var collection = db.collection('institutions');
            collection.find()
                .toArray(function (err, docs) {
                    if (err) {
                        return console.error(err);
                    }
                    if (docs.length == 0) {
                        callback(null, null);
                    }
                    else {
                        callback(null, docs);
                    }
                });
        }
    };
    return self;
}
