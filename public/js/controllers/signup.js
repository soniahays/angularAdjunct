'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {

        if (false) {
            $scope.user = {};
            $scope.user.firstName = 'Sonia';
            $scope.user.lastName = 'Brami';
            $scope.user.email = 'sonia@brami.com';
            $scope.user.password = 'sonia';
        }

        $scope.joinNow = function () {
            $rootScope.user = $scope.user;
            $http({
                url: '/signup',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("signup post worked");
                    $location.path('/basic-profile');
                }).error(function (data, status, headers, config) {
                    console.log("signup post didn't work");

                });
        }
    }]);







