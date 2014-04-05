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
                var jobTitle = getField($, "Job Title");
                var jobNumber = getField($, "Job Number");
                var datePosted = getField($, "Date Posted");
                var applicationDeadline = getField($, "Application Deadline");
                var jobDescription = getDescription($, "Job Description");
                var contact = getField($, "Contact");
                console.log("jobTitle", jobTitle);
                console.log("jobNumber", jobNumber);
                console.log("datePosted", datePosted);
                console.log("applicationDeadline", applicationDeadline);
                console.log("jobDescription", jobDescription);
                console.log("contact", contact);

                if (jobTitle != "" && datePosted != "" && jobDescription != "") {
                    insertJob({jobTitle: jobTitle, contact: contact, datePosted: datePosted, applicationDeadline: applicationDeadline, jobDescription: jobDescription});
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
                return console.error("Error inserting in db", err);
            }
            else {
                return console.log("done");
            }
        });
    }
});

