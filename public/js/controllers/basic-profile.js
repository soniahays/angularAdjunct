'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope,$http,$location) {
        console.log($rootScope.user);
        $scope.user = $rootScope.user;

        $scope.countries = [];
        $http({
            url: '/api/countries',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                console.log(data);
                $scope.countries= data;
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");
            });


        $scope.fieldGroup = [];
        $http({
            url: '/api/fieldGroup',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                console.log(data);
                $scope.fieldGroup= data;
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");
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
                    console.log("it worked");
                    $location.path( '/confirm-email' );
                }).error(function (data, status, headers, config) {
                    console.log("it didn't work");
                });
        }

    }]);