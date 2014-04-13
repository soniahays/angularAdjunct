var _ = require("underscore"),
    mongodb = require('mongodb'),
    dbConnect = require('server/dbConnect.js')(mongodb);


// add the 'imageFileName' field to the job collection

dbConnect(function (err, db) {

    var institutionDb = require('server/institutionDb.js')(mongodb, db);
    var jobDb = require('server/jobDb.js')(mongodb, db);

    if (err) {
        return console.error("Error while connecting to mongodb", err);
    }

    console.log('Connected to mongodb.');

    jobDb.getJobs(function (err, docs) {
        if (err) {
            return console.error(err);
        }

        _.each(docs, function(job) {
            institutionDb.getInstitution({'name': job.employer}, function(err, institution) {

                if (err) {
                    return console.error(err);
                }

                if (institution != null && institution.logoFileName != null) {
                    jobDb.updateJobField(job._id.toString(), {"imageFileName": institution.logoFileName});
                    console.log(institution, job);
                }
            });
        });
    });
});

