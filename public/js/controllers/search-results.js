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
                $scope.users = _.pluck(response.data.hits.hits, '_source');
            }
            else {
                $scope.message = "Search server is unreachable";
            }
        });

        $scope.search = function() {

        }
    }]);