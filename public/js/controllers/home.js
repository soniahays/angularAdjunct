'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', '$http','$location', function ($scope, $http, $location) {

        $scope.bannerSignupFormUrl = '/partial/signup-home-banner';


        $scope.search = function () {
            window.location.href = '/search-results/' + $scope.searchBox;
        };

        $scope.init = function(){

        };
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
        $scope.googleAuth = function () {
//            window.open('/auth/google');
            window.location.href = '/auth/google';
            if ($scope.hide)
                $scope.hide();
        }
//        $scope.goToSignUp = function () {
//            $location.path('/signup');
//            if ($scope.hide)
//                $scope.hide();
//        }
    }]);




