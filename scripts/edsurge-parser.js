var cheerio = require('cheerio'),
    fs = require('fs'),
    mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/adjunct", function (err_, db) {

    if (err_) {
        console.error(err_);
        return;
    }

    var path = __dirname + "\\edsurge\\";
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
                var jobTitle = getField($, ".heading--heavy", "name");
                var employer = getField($, ".heading--heavy", "hiringOrganization");
                var jobCategory = getCategory($, ".heading--dek");
                var jobCategoryArr = jobCategory.split("-");
                var category = jobCategoryArr[0];
                var companyType = jobCategoryArr[1];
                var contractType = jobCategoryArr[2];
                var location =jobCategoryArr[3];
                var description = getDescription($, "description");

                if (jobTitle != "" && employer != "") {
                    console.log("jobTitle", jobTitle);
                    console.log("employer", employer);
                    console.log("jobCategory", jobCategory);
                    console.log("jobCategoryArr", jobCategoryArr);
                    insertJob({
                                jobTitle: jobTitle, employer: employer, jobCategory: jobCategory,
                                category: category, companyType: companyType, contractType: contractType,
                                location: location, description :description
                    });
                }
            });
        }
    });

    function getField($, str1, str2) {
        return $(str1 + " > span[itemprop='" + str2 + "']").text()
    }
    function getCategory($, str1) {
        return $(str1).text()
    }
    function getDescription($, str) {
        return $("div[itemprop='" + str + "']").html()
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

