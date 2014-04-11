var http = require("http"),
    _ = require("underscore"),
    mongodb = require('mongodb'),
    dbConnect = require('../server/dbConnect.js')(mongodb);

// get the list of institutions from the db then get images for each one from wikipedia
dbConnect(function (err, db) {

    if (err) {
        return console.error("Error while connecting to mongodb", err);
    }

    console.log('Connected to mongodb.');

    var collection = db.collection("institutions");
    collection.find()
        .toArray(function (err, docs) {
            if (err) {
                return console.error(err);
            }

            getAllLogoUrls(docs, 0, function() {
                console.log("Done!");
            });

        });
});

// get logos for many institutions
function getAllLogoUrls(docs, index, callback) {
    getLogoUrls(docs[index].name, function(err, data) {
        console.log(docs[index].name, data);
        if (index < 8) {
            getAllLogoUrls(docs, index+1, callback);
        }
        else {
            callback();
        }
    });
}

// Get logo URL for a university from its wikipedia article
function getLogoUrls (wikipediaPage, callback) {

    if (wikipediaPage == "") {
        return;
    }

    wikipediaPage = encodeURIComponent(wikipediaPage);

    getJson('http://en.wikipedia.org/w/api.php?&action=query&format=json&redirects&prop=images&imlimit=50&titles=' + wikipediaPage, function (err, data) {
        var page = getPage(data);
        var images = page.images;
        var titles = '';

        if (images && images.length < 3) {
            titles = images[0].title;
        }
        else {
            _.each(images, function (image) {
                var title = image.title.toLowerCase();
                if ((title.indexOf('logo') != -1 || title.indexOf('coa') != -1 || title.indexOf('seal') != -1) && title.indexOf("commons-logo") == -1 && title.indexOf("wikidata-logo") == -1 && title.indexOf("wikisource-logo") == -1)
                    titles += image.title + "|";
            });

            titles = titles.substring(0, titles.length - 1);
        }
        titles = encodeURIComponent(titles)

        if (titles != "") {
            getJson('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=' + titles, function (err, data) {
                _.each(data.query.pages, function (page, i) {
                    callback(null, page.imageinfo[0].url);
                })
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
