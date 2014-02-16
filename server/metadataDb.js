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
