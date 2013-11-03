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

    }]).controller('SigninCtrl', ['$scope','$location', function ($scope, $location) {
        $scope.goToSignUp=function(){
            $location.path( '/signup' );
        }
        $scope.showError = true;
    }]).controller('SignupCtrl', ['$scope','$http', function ($scope, $http) {
        $scope.user;
        $scope.joinNow= function(){
              console.log("Join now!", $scope.user);
            $http({
                url: '/signup',
                method: 'POST',
                data: JSON.stringify({'user':$scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("it worked");
                }).error(function (data, status, headers, config) {
                    console.log("it didn't work");

                });
        }

    }]);







