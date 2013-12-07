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
        insertJob: function (job, callback) {
            var collection = db.collection('jobs');
            collection.insert([job], function (err) {
                if (err) {
                    return console.error(err);
                }
                else {
                    if (callback)
                        callback(err, job);
                }
            });

        },
        updateJob: function (job, callback) {
            var query = {'_id': job._id };
            this.getJob(query, function (err, u) {
                if (err) {
                    return console.error(err);
                }
                var collection = db.collection('jobs');
                var o_id = new BSON.ObjectID(u._id);
                delete job._id;
                collection.update({'_id': o_id}, job, function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    if (callback)
                        callback(err, job);
                });
            });
        },
        updateJobField: function (_id, field, callback) {
            var collection = db.collection('jobs');
            var o_id = new BSON.ObjectID(_id);
            collection.update({'_id': o_id}, {'$set': field}, function (err, job) {
                if (err) {
                    return console.error(err);
                }
                if (callback)
                    callback(err, job);
            });
        },
        getJob: function (job, callback) {
            var collection = db.collection('jobs');
            if (job._id) {
                var o_id = new BSON.ObjectID(job._id);
                job._id = o_id;
            }
            collection.find(job)
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
        getJobs: function (callback) {
            var collection = db.collection('jobs');
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
