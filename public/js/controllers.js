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

        };
    }])
    .controller('JobsCtrl', ['$scope', function ($scope) {

    }])
    .controller('BasicPrflCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {
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
//            $scope.color = $scope.colors[2]; // red



    }]).controller('SigninCtrl', ['$scope','$location', function ($scope, $location) {
        $scope.goToSignUp=function(){
            $location.path( '/signup' );
            $scope.hide();
        }
        $scope.showError = true;
    }]).controller('SignupCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope, $http, $location) {
         $scope.user={};

         $scope.user.firstName='Sonia';
         $scope.user.lastName='Brami';
         $scope.user.email='sonia@brami.com';
         $scope.user.password='sonia';



        $scope.joinNow= function(){
              $rootScope.user = $scope.user ;
              console.log("Join now!", $scope.user);
            $http({
                url: '/signup',
                method: 'POST',
                data: JSON.stringify({'user':$scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("it worked");
                    $location.path( '/basic-profile' );
                }).error(function (data, status, headers, config) {
                    console.log("it didn't work");

                });
        }


    }]);







