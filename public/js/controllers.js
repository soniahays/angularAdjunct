'use strict';

/* Controllers */
angular.module('myApp.controllers', ['$strap.directives'])
    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.search = function () {
            $http({
                url: '/search',
                method: 'POST',
                data: JSON.stringify({'query': $scope.query}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("it worked");
            }).error(function (data, status, headers, config) {
                    console.log("it didn't work");

            });
        };
        $scope.init= function(){
            /*
            $http({
            url: '/get',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                    $scope.query= data;
                    console.log(data);
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");

            });
            */
        };
    }])
    .controller('JobsCtrl', ['$scope', function ($scope) {
        $scope.cost = 12;
    }]);
