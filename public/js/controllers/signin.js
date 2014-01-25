'use strict';

angular.module('adjunct.controllers')
    .controller('SigninCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
        }
        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
        }
        $scope.googleAuth = function () {
            window.location.href = '/auth/google';
        }
        $scope.signUp = function () {
            $location.path('/signup');
            if ($scope.$hide)
                $scope.$hide();
        }
    }]);