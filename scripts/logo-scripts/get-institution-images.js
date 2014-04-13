var http = require("http"),
    _ = require("underscore"),
    mongodb = require('mongodb'),
    fs = require('fs'),
    path = require('path'),
    request = require('request'),
    uuid = require('uuid'),
    dbConnect = require('../../server/dbConnect.js')(mongodb),
    aws = require('aws-sdk');

// We use AWS S3 to store logos
aws.config.loadFromPath('../../server/config/aws-config.json');
s3 = new aws.S3();

// get the list of institutions from the db then get images for each one from wikipedia
dbConnect(function (err, db) {

    var institutionDb = require('../../server/institutionDb.js')(mongodb, db);

    if (err) {
        return console.error("Error while connecting to mongodb", err);
    }

    console.log('Connected to mongodb.');

    institutionDb.getInstitutions(function (err, docs) {
        //institutionDb.getInstitution({'name': "American Conservatory Theater"}, function (err, doc) {
        //institutionDb.getInstitution({'name': "Phillips Graduate Institute"}, function (err, doc) {
        if (err) {
            return console.error(err);
        }

        getAllLogoUrls(docs, 0, db, function () {
            console.log("Done getting all images!");
        });
    });
});

function download(uri, filename, callback) {
    console.log("filename:", filename);
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

// get logos for many institutions
// save them to disk then upload them to amazon s3
// finally, update the institution record in the db to add the s3 url
function getAllLogoUrls(docs, index, db, callback) {

    var collection = db.collection('institutions');

    getLogoUrls(docs[index].name, function (err, url) {

        if (err) {
            console.error(err);

            if (index < docs.length - 1) {
                getAllLogoUrls(docs, index + 1, db, callback);
            }
            else {
                callback();
            }

            return;
        }

        var sp = url.split('.');
        var extension = sp[sp.length - 1];
        var newFileName = "institution-logo-" + uuid.v1() + '.' + extension;

        download(url, 'tmp/' + newFileName, function () {

            var s3object = {
                'Bucket': 'Adjuncts',
                'Key': "institution-logos/" + newFileName,
                'Body': fs.createReadStream("tmp/" + newFileName),
                'ACL': 'public-read',
                'ContentType': getContentTypeByFile(newFileName)
            };

            s3.putObject(s3object, function (err, data) {

                if (err) {
                    return console.log(err);
                }

                collection.update({'name': docs[index].name}, {'$set': {"logoFileName": newFileName }}, function (err, institution) {

                    if (err) {
                        return console.error(err);
                    }

                    console.log("Institution: " + docs[index].name + " logoFileName: " + newFileName);

                    if (index < docs.length - 1) {
                        getAllLogoUrls(docs, index + 1, db, callback);
                    }
                    else {
                        callback();
                    }
                });
            });
        });
    });
}

function getContentTypeByFile(fileName) {
    var rc = 'application/octet-stream';
    var fn = fileName.toLowerCase();

    if (fn.indexOf('.html') >= 0) rc = 'text/html';
    else if (fn.indexOf('.css') >= 0) rc = 'text/css';
    else if (fn.indexOf('.json') >= 0) rc = 'application/json';
    else if (fn.indexOf('.js') >= 0) rc = 'application/x-javascript';
    else if (fn.indexOf('.png') >= 0) rc = 'image/png';
    else if (fn.indexOf('.jpg') >= 0) rc = 'image/jpg';
    else if (fn.indexOf('.svg') >= 0) rc = 'image/svg+xml';

    return rc;
}

// Get logo URL for a university from its wikipedia article
function getLogoUrls(wikipediaPage, callback) {

    if (wikipediaPage == "") {
        callback("wikipediaPage is a required argument");
    }

    console.log("Page: " + wikipediaPage);

    getJson('http://en.wikipedia.org/w/api.php?&action=query&format=json&redirects&prop=images&imlimit=50&titles=' + encodeURIComponent(wikipediaPage), function (err, data) {
        var page = getPage(data);
        var images = page.images;
        var logoFileName = "";

        console.log("Page images: ", images);

        if (images && images.length == 1) {
            logoFileName = images[0].title;
        }
        else {
            _.each(images, function (image) {
                var filename = image.title.toLowerCase();
                if ((filename.indexOf('logo') != -1 || filename.indexOf('coa') != -1 || filename.indexOf('seal') != -1) && filename.indexOf("commons-logo") == -1 && filename.indexOf("wikidata-logo") == -1 && filename.indexOf("wikisource-logo") == -1) {
                    logoFileName = image.title;
                    return;
                }
            });
        }

        if (logoFileName != "") {
            console.log("selected logo: " + logoFileName);
            getJson('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=' + encodeURIComponent(logoFileName), function (err, data) {
                var page = getPage(data);
                if (page.imageinfo && page.imageinfo.length > 0) {
                    callback(null, page.imageinfo[0].url);
                }
                else {
                    console.log("No imageinfo for: ", page);
                }
            });
        }
        else {
            callback("Got nothing for " + wikipediaPage);
        }
    });
}

// json GET from a URL
function getJson(url, callback) {

    http.get(url,function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            var data = JSON.parse(body);
            callback(null, data);
        });
    }).on('error', function (e) {
            callback(e);
        });
}

function getPage(data) {
    var pages = data.query.pages;
    return pages[Object.keys(pages)[0]];
}

