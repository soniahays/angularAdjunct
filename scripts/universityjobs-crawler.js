var Crawler = require("simplecrawler"),
    fs = require('fs');

var myCrawler = new Crawler("www.universityjobs.com");
////var myCrawler = new Crawler("www.edsurge.com");
////myCrawler.initialPath = "/jobs/";
//var myCrawler = new Crawler("www.higheredjobs.com");
//myCrawler.initialPath = "/faculty/default.cfm";
var myCrawler = new Crawler("www.universityjobs.com");
myCrawler.initialPath = "/jobs/faculty.html";

//var myCrawler = new Crawler("adj-dev.herokuapp.com");
//myCrawler.initialPath = "/";
myCrawler.initialPort = 80;
myCrawler.initialProtocol = "https";
myCrawler.interval = 5000;
myCrawler.maxConcurrency = 1;

myCrawler.addFetchCondition(function(parsedURL) {
    return parsedURL.path.match(/faculty\.html/i)||
           parsedURL.path.match(/jobs2\.php\?subcatid=14&catid=1/i)||
           parsedURL.path.match(/jobdetail\.php/i);

});

var i = 0;

myCrawler.on("fetchcomplete",function(queueItem, responseBuffer, response) {
    var type = response.headers['content-type'];
    console.log("I just received %s (%d bytes)",queueItem.url,responseBuffer.length);
    console.log("It was a resource of type %s", type);

    if (type.indexOf("text/html") == -1) {
        return;
    }

    fs.writeFile("universityjobs\\medicineandhealth\\file" + i + ".html", responseBuffer, function(err) {
        i++;
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
});

myCrawler.on("fetcherror",function(queueItem, response) {
    console.log(response);
});

myCrawler.on("fetchclienterror",function(queueItem, errorData) {
    console.log(errorData);
});

myCrawler.start();