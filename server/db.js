// npm install mongodb
var mongodb = require('mongodb')
    , MongoClient = mongodb.MongoClient

module.exports.insert = function (val) {

    MongoClient.connect("mongodb://soniabrami:yacine23@paulo.mongohq.com:10080/sandbox-test", function (err, db) {
        // operate on the collection named "test"
        var collection = db.collection('test');

        // remove all records in collection (if any)
        console.log('removing documents...');
        collection.remove(function (err, result) {
            if (err) {
                return console.error(err)
            }
            console.log('collection cleared!');
            // insert two documents
            console.log('inserting new documents...');
            collection.insert([
                {name: val}

            ], function (err, docs) {
                if (err) {
                    return console.error(err)
                }
                console.log('just inserted ', docs.length, ' new documents!');
                collection.find({}).toArray(function (err, docs) {
                    if (err) {
                        return console.error(err);
                    }
                    docs.forEach(function (doc) {
                        console.log('found document: ', doc);
                    })
                })
            })
        })
    })


};

module.exports.get = function (callback) {

    MongoClient.connect("mongodb://soniabrami:yacine23@paulo.mongohq.com:10080/sandbox-test", function (err, db) {
        // operate on the collection named "test"
        var collection = db.collection('test');

            // insert two documents
            console.log('getting new documents...', collection.find());
            collection.find().toArray(function(err, docs){
                callback(docs[0].name);
                console.log(docs[0].name);
                db.close();
            });




    })


};