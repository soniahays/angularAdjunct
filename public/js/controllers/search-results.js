'use strict';

angular.module('adjunct.controllers')
    .controller('SearchResultsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $scope.user = {};

        var searchTerm = $('#searchTerm').html();
        var all = $('#all').html();

        if (!searchTerm && !all) {
            return;
        }

        var url = all ? '/api/searchAll' : '/api/search';
        $http.post(url, JSON.stringify({'query': searchTerm})).then(function(response){
            if (response.data) {
                $scope.users = _.map(response.data.hits.hits, function(user) {
                    angular.extend(user, user._source);
                    return user;
                });
            }
            else {
                $scope.message = "Search server is unreachable";
            }
        });
    }]);