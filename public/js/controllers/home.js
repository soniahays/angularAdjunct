'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.search = function () {
            $http.post('/api/search', JSON.stringify({'query': $scope.searchBox})).then(function(response){
                if (response.data.hits.total > 0) {
                    console.log(response.data.hits.hits[0]._source);
                }
            });
        };

        $scope.init = function(){

        };
    }]);