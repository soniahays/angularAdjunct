'use strict';

angular.module('adjunct.controllers')
    .controller('SigninCtrl', ['$scope', '$location', '$http', 'Auth', function ($scope, $location, $http, Auth) {
        $scope.showError = true;

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
            $scope.hide();
        }
        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            $scope.hide();
        }
        $scope.goToSignUp = function () {
            $location.path('/signup');
            $scope.hide();
        }
    }]);