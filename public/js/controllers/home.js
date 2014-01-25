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
            $("[bs-popover]").click();
        }
        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            $("[bs-popover]").click();
        }
        $scope.googleAuth = function () {
//            window.open('/auth/google');
            window.location.href = '/auth/google';
            $("[bs-popover]").click();
        }

        $scope.connectManually = function(){
            $location.path('/signup');
            $("[bs-popover]").click();
        }

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }
//        $scope.goToSignUp = function () {
//            $location.path('/signup');
//            if ($scope.hide)
//                $scope.hide();
//        }
    }]);




