'use strict';

angular.module('adjunct.controllers')
    .controller('SearchResultsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $http({
            url: '/api/users',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.users = data;
            }).error(function (data, status, headers, config) {
                console.log("/api/users didn't work");
            });
    }]);