var https = require('https');
var fs = require('fs');
var _ = require('underscore');
var mongodb = require('mongodb');
var dbConnect = require('../server/dbConnect.js')(mongodb);

var url = 'https://explore.data.gov/views/xq9j-48uk/rows.json?accessType=DOWNLOAD';
var collectionName = 'institutions';
var fileName = collectionName + '.json';

dbConnect(function (err, db) {

    if (err) {
        return console.error("Error while connecting to mongodb", err);
    }

    console.log('Connected to mongodb.');

    fs.exists(fileName, function (exists) {
        if (exists) {
            console.log("File " + fileName + " exists, reading...");
            fs.readFile(fileName, 'utf8', function (err, data) {
                if (err) {
                    return console.error('Error: ' + err);
                }
                var jsonObj = JSON.parse(data);
                saveJsonToDb(collectionName, jsonObj, db);
            });
        }
        else {
            getJsonFromUrl(url, function(response) {
                var collection = response.data;

                if (collectionName == 'institutions') {
                    // We only get the fields we want (name, city, state)
                    collection = _.map(response.data, function (item) {
                        return { name: item[9], city: item[11], state: item[12] };
                    });
                }

                saveJsonToDisk(fileName, collection, function() {
                    saveJsonToDb(collectionName, collection, db);
                });
            });
        }
    });
});

function getJsonFromUrl(url, callback) {
    https.get(url,function (res) {
        console.log('Getting data from URL: ' + url + ' ...');
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            console.log("Data downloaded successfully!");
            var response = JSON.parse(body);
            callback(response);
        });
    }).on('error', function (e) {
            return console.error("Got error while getting json from url: ", e);
        });
}

function saveJsonToDb(collectionName, jsonObj, db) {
    var collection = db.collection(collectionName);

    console.log("Deleting existing " + collectionName + " collection in adjunct database...")
    collection.remove(null, function(err) {
        if (err) {
            db.close();
            return console.error("Error while removing collection " + collectionName, err);
        }

        console.log("Saving json to " + collectionName + " collection in adjunct database...");
        collection.insert(jsonObj, function (err) {
            if (err) {
                db.close();
                return console.error(err);
            }
            console.log("The " + collectionName + " collection was saved to the database!");
            collection.count(null, function(err, count) {
                if (err) {
                    db.close();
                    return console.error(err);
                }
                console.log("The " + collectionName + " collection has " + count + " rows.");
                db.close();
            })
        });
    });
}

function saveJsonToDisk(fileName, jsonObj, callback) {
    var json = JSON.stringify(jsonObj, null, 4);
    console.log("Saving file " + fileName + " ...");
    fs.writeFile(fileName, json, function (err) {
        if (err) {
            return console.error(err);
        } else {
            console.log("The file was saved to disk!");
            callback();
        }
    });
}