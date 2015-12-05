module.exports = function (uuid, fs, https, s3, path) {
    return {
        getLinkedInPicture: function(pictureUrl, callback) {
            var newFileName = uuid.v1() + ".jpg";
            try {
                https.get(pictureUrl, function (response) {
                    fs.mkdir("/tmp", function() {
                        var picStream = fs.createWriteStream("/tmp/" + newFileName);
                        response.pipe(picStream);

                        picStream.on('close', function() {
                            var s3object = {
                                'Bucket': 'Adjuncts',
                                'Key': newFileName,
                                'Body': fs.createReadStream("/tmp/" + newFileName),
                                'ACL': 'public-read'
                            };
                            s3.putObject(s3object, function (err, data) {
                                callback(err,newFileName);
                            });
                        });
                    });
                });
            }
            catch (e) {
                callback({ 'msg': '<b>"' + pictureUrl + '"</b> NOT uploaded. ' + e });
            }
        },
        upload: function upload(files, callback) {
            if (files.length == 0 || files.file.size == 0)
                callback({ 'msg': 'No file uploaded.' });
            else {
                var file = files.file;
                var newFileName = uuid.v1() + path.extname(file.path);
                try {
                    var s3object = {
                        'Bucket': 'Adjuncts',
                        'Key': newFileName,
                        'Body': fs.createReadStream(file.path),
                        'ACL': 'public-read'
                    };
                    s3.putObject(s3object, function (err, data) {
                        if (err) {
                            console.log(err);
                            callback(err);
                        }
                        else {
                            callback(null, newFileName, file.name);
                        }
                    });
                }
                catch (e) {
                    console.log(e);
                    callback({ 'msg': '<b>"' + file.name + '"</b> NOT uploaded. ' + e });
                }
            }
        }
    };
}