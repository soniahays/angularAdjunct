
module.exports = function (bcrypt, mongodb) {

    var MongoClient = mongodb.MongoClient;

    var MONGO_URL = "mongodb://localhost:27017/adjunct";
    switch (process.env.NODE_ENV) {
        case 'development':
            MONGO_URL = "mongodb://nader:adj0nct@paulo.mongohq.com:10043/adjunct";
            break;
        case 'production':
            MONGO_URL = "mongodb://nader:adj0nct@paulo.mongohq.com:10043/adjunct";
            break;
    }

    return function (callback) {
        MongoClient.connect(MONGO_URL, function (err_, db_) {
            callback(err_, db_);
        });
    }
}