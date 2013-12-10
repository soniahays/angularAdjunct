module.exports = function (mongodb, db) {

    var BSON = mongodb.BSONPure;

    var self = {
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
