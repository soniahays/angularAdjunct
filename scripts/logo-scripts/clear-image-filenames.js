var _ = require("underscore"),
    mongodb = require('mongodb'),
    dbConnect = require('server/dbConnect.js')(mongodb);

// removes logo references from institions and jobs collections

dbConnect(function (err, db) {


    var collection = db.collection('jobs');

    collection.update({'_id': { $exists: true }}, {'$unset': {"imageFileName": 1}}, { multi: true }, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Done");
    });

    var collection = db.collection('institutions');

    collection.update({'_id': { $exists: true }}, {'$unset': {"logoFileName": 1}}, { multi: true }, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Done");
    });
});