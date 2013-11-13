'use strict';

angular.module('adjunct.controllers')
    .controller('SigninCtrl', ['$scope','$location', function ($scope, $location) {
        $scope.showError = true;
        $scope.goToSignUp=function(){
            $location.path('/signup');
            $scope.hide();
        }
        $scope.facebookAuth = function() {
            window.location.href = '/auth/facebook';
            $scope.hide();
        }
        $scope.linkedinAuth = function() {
            window.location.href = '/auth/linkedin';
            $scope.hide();
        }
    }]);