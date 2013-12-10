'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.search = function () {
            //$http.post('/search', JSON.stringify({'query': $scope.query})).then(function(){});
        };

        $scope.init= function(){

        };
    }]);