'use strict';

/* Controllers */
angular.module('myApp.controllers', ['$strap.directives'])
    .run(function($rootScope, $http, $route) {
        $rootScope.signout = function() {
            $http({method: 'GET', url: '/signout'});
        }
    })
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

    }]).controller('SigninCtrl', ['$scope', function ($scope) {
        $scope.showError = true;
    }]);
