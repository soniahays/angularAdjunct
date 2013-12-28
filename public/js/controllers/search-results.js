'use strict';

angular.module('adjunct.controllers')
    .controller('SearchResultsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $scope.user = {};

        var searchTerm = $('#searchTerm').html();

        if (!searchTerm) {
            return;
        }

        $http.post('/api/search', JSON.stringify({'query': searchTerm})).then(function(response){
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