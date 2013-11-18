'use strict';

angular.module('adjunct.controllers')
    .controller('SigninCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.showError = true;

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
            if ($scope.hide)
                $scope.hide();
        }
        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            if ($scope.hide)
                $scope.hide();
        }
        $scope.goToSignUp = function () {
            $location.path('/signup');
            if ($scope.hide)
                $scope.hide();
        }
    }]);