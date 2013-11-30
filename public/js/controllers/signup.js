'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {

        $scope.joinNow = function () {
            $scope.user.email = encodeURIComponent($scope.user.email);
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







