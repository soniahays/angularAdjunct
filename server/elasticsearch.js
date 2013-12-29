module.exports = function (elasticsearch) {

    var options = {
        _index: 'adjunct',
        _type: 'user'
    }

    var self = {
        index: function (users) {
            elasticsearch.deleteByQuery(options, {'match_all': {}}, function(err, data) {
                elasticsearch.bulkIndex(options, users, function (err, data) {
                    //console.log(err, data);
                });
            });
        },
        search: function (query, callback) {
            elasticsearch.search(options, query, callback)
        }
    }

    return self;
}