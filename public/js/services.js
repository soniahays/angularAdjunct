'use strict';

angular.module('adjunct.services')
    .factory('WikiSummary', function () {
        return {
            getArticle: function (wikiPage, callback) {
                var callWikiApi = function (wikipediaPage) {
                    $.getJSON('http://en.wikipedia.org/w/api.php?action=query&format=json&callback=?', { prop: 'extracts', titles: wikipediaPage }, wikipediaHTMLResult);
                }

                function wikipediaHTMLResult(data) {
                    var pages = data.query.pages;
                    var page = pages[Object.keys(pages)[0]];
                    var extract = page.extract;
                    var readData = $(extract);

                    // handle redirects
                    var redirect = readData.find('li:contains("REDIRECT")').text().substr(8);
                    if (redirect != '') {
                        callWikiApi(redirect);
                        return;
                    }
                    callback(readData.html());
                }

                callWikiApi(wikiPage);
            },
            getImages: function (wikiPage, callback) {
                var callWikiApi = function (wikipediaPage) {
                    $.getJSON('http://en.wikipedia.org/w/api.php?callback=?', { action: "query", format: "json", prop: "images", titles: wikipediaPage }, wikipediaHTMLResult);
                }

                function wikipediaHTMLResult(data) {
                    console.log(data);
                    var pages = data.query.pages;
                    var page = pages[Object.keys(pages)[0]];
                    var images = page.images;
                    console.log(images);

                    $.getJSON('http://en.wikipedia.org/w/api.php?callback=?', { action: "query", format: "json", prop: "imageinfo", iiprop: "url", titles: images[3].title }, wikipediaHTMLResult2);
                    console.log(images[0]);
                    for (var i = 0; i < images.length; i++) {

                    }


                }

                function wikipediaHTMLResult2(data) {
                    var pages = data.query.pages;
                    var page = pages[Object.keys(pages)[0]];
                    var imageinfo = page.imageinfo[0].url;

                    console.log(imageinfo);

                }

                callWikiApi(wikiPage);
            }
        };
    });
