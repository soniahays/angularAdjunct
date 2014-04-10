var http = require("http"),
    _ = require("underscore");

var getImages = function (wikipediaPage) {

    if (wikipediaPage == "") {
        return;
    }

    getJson('http://en.wikipedia.org/w/api.php?&action=query&format=json&prop=images&imlimit=50&titles=' + wikipediaPage, function (err, data) {
        var page = getPage(data);
        var images = page.images;
        var titles = '';

        _.each(images, function (image) {
            var title = image.title.toLowerCase();
            if ((title.indexOf('logo') != -1 || title.indexOf('coa') != -1) && title.indexOf("commons-logo") == -1 && title.indexOf("wikidata-logo") == -1 && title.indexOf("wikisource-logo") == -1)
                titles += image.title + "|";
        });

        titles = titles.substring(0, titles.length - 1);

        if (titles != "") {
            getJson('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=' + titles, function (err, data) {
                _.each(data.query.pages, function (page, i) {
                    console.log(page.imageinfo[0].url);
                })
            });
        }
        else {
            console.log("Got nothing for " + wikipediaPage);
        }
    });
}

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


getImages("Harvard University");
getImages("Concordia University");
getImages("McGill University");
getImages("University of California, Davis");
getImages("University of California, Berkeley");
getImages("");
getImages("");
getImages("");
