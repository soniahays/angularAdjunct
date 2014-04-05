var cheerio = require('cheerio'),
    fs = require('fs'),
    mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/adjunct", function (err_, db) {

    if (err_) {
        console.error(err_);
        return;
    }

    var path = __dirname + "\\universityjobs\\";
    fs.readdir(path, function(err, files) {

        if (err) {
            console.error(err);
            return;
        }

        for (var i = 0; i < files.length; i++) {

            fs.readFile(path + files[i], 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                var $ = cheerio.load(data);
                var jobTitle = getField($, "Job Title");
                var jobNumber = getField($, "Job Number");
                var datePosted = getField($, "Date Posted");
                var applicationDeadline = getField($, "Application Deadline");
                var jobDescription = getDescription($, "Job Description");
                console.log("jobTitle", jobTitle);
                console.log("jobNumber", jobNumber);
                console.log("datePosted", datePosted);
                console.log("applicationDeadline", applicationDeadline);
                console.log("jobDescription", jobDescription);

                if (jobTitle != "" && datePosted != "" && jobDescription != "") {
                    insertJob({jobTitle: jobTitle, datePosted: datePosted, applicationDeadline: applicationDeadline, jobDescription: jobDescription});
                }
            });
        }
    });


    function getField($, str) {
        return $("font:contains(" + str + ":)").parent().parent().next().text().trim();
    }

    function getDescription($, str) {
        return $("font:contains(" + str + ")").parent().parent().parent().next().text().trim();
    }

    function insertJob(job) {
        var collection = db.collection('jobs');
        collection.insert([job], function (err) {
            if (err) {
                return console.error(err);
            }
            else {
                return console.log("done");
            }
        });
    }


});

