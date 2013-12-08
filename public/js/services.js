'use strict';

angular.module('adjunct.services')
    .factory('WikiSummary', function(){
        return function(wikiPage, callback) {
            var callWikiApi = function(wikipediaPage) {
                $.getJSON('http://en.wikipedia.org/w/api.php?action=query&format=json&callback=?', { prop:'extracts', titles: wikipediaPage }, wikipediaHTMLResult);
            }

            function wikipediaHTMLResult(data) {
                var pages = data.query.pages;
                var page = pages[Object.keys(pages)[0]];
                var extract = page.extract;
                var readData = $(extract);

                // handle redirects
                var redirect = readData.find('li:contains("REDIRECT")').text().substr(8);
                if(redirect != '') {
                    callWikiApi(redirect);
                    return;
                }
                callback(readData.html());
            }

            callWikiApi(wikiPage);
        }
    });
