module.exports = function (mongodb, db) {

    var self = {
        get: function (collectionName, callback) {
            var collection = db.collection(collectionName);
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
        },
        getCount: function (collectionName, callback) {
            return db.collection(collectionName).find().count(callback);
        },
        getPage: function (collectionName, pageNumber, pageSize, callback) {
            var collection = db.collection(collectionName);
            pageNumber = parseInt(pageNumber) - 1;
            pageSize = parseInt(pageSize);
            collection.find().skip(pageNumber*pageSize).limit(pageSize)
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
        },
        getWhere: function (collectionName, query, callback) {
            var collection = db.collection(collectionName);
            collection.find(query)
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
