var _ = require("underscore"),
    mongodb = require('mongodb'),
    fs = require('fs'),
    dbConnect = require('../../server/dbConnect.js')(mongodb),
    aws = require('aws-sdk');

aws.config.loadFromPath('../../server/config/aws-config.json');
s3 = new aws.S3();

// get the list of institutions, update the s3 metadata for each associated logo to have the svg content type
dbConnect(function (err, db) {

    var institutionDb = require('../../server/institutionDb.js')(mongodb, db);

    if (err) {
        return console.error("Error while connecting to mongodb", err);
    }

    console.log('Connected to mongodb.');

    institutionDb.getInstitutions(function (err, institutions) {

        _.each(institutions, function (institution, index) {

            if (institution.logoFileName) {
                sp = institution.logoFileName.split(".");

                var ext = sp[sp.length - 1];

                if (ext == 'svg') {
                    var s3object = {
                        'Bucket': 'Adjuncts',
                        'Key': "institution-logos/" + institution.logoFileName,
                        'Body': fs.createReadStream("tmp/" + institution.logoFileName),
                        'ACL': 'public-read',
                        'ContentType': 'image/svg+xml'
                    };

                    s3.putObject(s3object, function (err, data) {

                        if (err) {
                            return console.error(err);
                        }

                        console.log("Done!", data);
                    });
                }
            }
        });
    });
});
