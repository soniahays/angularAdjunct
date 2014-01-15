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


        $scope.fieldGroups = [];
        $http({
            url: '/api/fieldGroups',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.fieldGroups = data;
            }).error(function (data, status, headers, config) {
                console.log("get fieldGroups didn't work");
            });

        $scope.institutions =[];
        $http({
            url:'/api/institutions',
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).success(function(data,status, headers,config){
                $scope.insitutions = data;
            }).error(function(data, status, headers, config){
                console.log("get institutions didn't work");
            }).then(function(response) {
                $scope.institutions = _.map(response.data, function(item) { return item.Institution + " (" + item.State + ")"; });
                //$scope.institutions = response.data;
            });

//        $http.get('/api/institutions').then(function(response) {
//            $scope.institutions = _.map(response.data, function(item) { return item.Institution + " (" + item.State + ")"; });
//            //$scope.institutions = response.data;
//        });


//        $scope.createProf = function(){
//            $rootScope.user = $scope.user ;
//            console.log("Create Profile!", $scope.user);
//            $http({
//                url: '/basic-profile',
//                method: 'POST',
//                data: JSON.stringify({'user':$scope.user}),
//                headers: {'Content-Type': 'application/json'}
//            }).success(function (data, status, headers, config) {
//                    $location.path( '/confirm-email' );
//                }).error(function (data, status, headers, config) {
//                    console.log("basic profile post didn't work");
//                });
        }

    }]);