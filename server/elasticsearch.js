module.exports = function (elasticsearch) {

    var options = {
        _index: 'adjunct',
        _type: 'user'
    }

    var self = {
        index: function (users) {
            elasticsearch.bulkIndex(options, users, function (err, data) {
                //console.log(data);
            });
        },
        search: function (query, callback) {
            elasticsearch.search(options, query, callback)
        }
    }

    return self;
}