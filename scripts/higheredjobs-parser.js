var cheerio = require('cheerio'),
    fs = require('fs'),
    mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/adjunct", function (err_, db) {

    if (err_) {
        console.error(err_);
        return;
    }

    var path = __dirname + "\\higheredjobs\\";
    fs.readdir(path, function(err, files) {

        if (err) {
            console.error("Error reading dir", err);
            return;
        }

        var count = -1;

        for (var i = 0; i < files.length; i++) {

            fs.readFile(path + files[i], 'utf8', function (err,data) {

                if (err) {
                    return console.log("Error reading file", err);
                }

                var $ = cheerio.load(data);
                var jobTitle = getField($, "#mainContent", "h1");
                var employer = getThing($,"Institution:");
                var fullLocation = getThing($,"Location:");
                var fullLocationArr = fullLocation.split(",");
                var city = fullLocationArr[0];
                var state = fullLocationArr[1];
                var datePosted = getThing($,"Posted:");
                var applicationDeadline = getThing($,"Application Due:");
                var contractType = getThing($,"Type:");
                var categoryArr = getThing($,"Category:");
                var description = getDescription($,"#jobDesc");
//                var datePosted = getField($, "Date Posted");
//                var applicationDeadline = getField($, "Application Deadline");
//                var jobCategory = getCategory($, ".heading--dek");
//                var jobCategoryArr = jobCategory.split("-");
//                var category = jobCategoryArr[0];
//                var companyType = jobCategoryArr[1];
//                var contractType = jobCategoryArr[2];
//                var location =jobCategoryArr[3];
//                var description = getDescription($, "description");

                if (jobTitle != ""&& employer !="" && description !="") {
                    console.log("jobTitle", jobTitle);
//                    console.log("employer", employer);
//                    console.log("jobCategory", jobCategory);
//                    console.log("jobCategoryArr", jobCategoryArr);
                    insertJob({
                                jobTitle: jobTitle, employer:employer, fullLocation:fullLocation, city: city, state: state, categoryArr:categoryArr, datePosted:datePosted,
                                applicationDeadline:applicationDeadline,contractType:contractType, description:description
                    });
                }
            });
        }
    });

    function getField($, str1, str2) {
        return $(str1 + " "+ str2).text().trim();

    }
    function getThing($,str1) {
        return $("th:contains("+str1+")").next().text();
    }
    function getDescription($,str1) {
        return $(str1+" "+"p").text();
    }

    function getCategory($) {
        return $("th:contains("+'Category:'+")").next().text();
//        return $("font:contains(" + str + ")").parent().parent().parent().next().html();

    }
//    function getDescription($, str) {
//        return $("div[itemprop='" + str + "']").html()
//    }
    function insertJob(job) {
        var collection = db.collection('jobs');
        collection.insert([job], function (err) {
            if (err) {
                return console.error("Error inserting in db", err);
            }
            else {
                return console.log("done");
            }
        });
    }
});

