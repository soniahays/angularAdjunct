'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope,$http,$location) {
        $scope.user = $rootScope.user;

        $scope.countries = [];
        $http({
            url: '/api/countries',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.countries = data;
            }).error(function (data, status, headers, config) {
                console.log("get countries didn't work");
            });


        $scope.fieldGroup = [];
        $http({
            url: '/api/fieldGroup',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.fieldGroup = data;
            }).error(function (data, status, headers, config) {
                console.log("get fieldGroup didn't work");
            });

        $scope.createProf = function(){
            $rootScope.user = $scope.user ;
            console.log("Create Profile!", $scope.user);
            $http({
                url: '/basic-profile',
                method: 'POST',
                data: JSON.stringify({'user':$scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    $location.path( '/confirm-email' );
                }).error(function (data, status, headers, config) {
                    console.log("basic profile post didn't work");
                });
        }

    }]);