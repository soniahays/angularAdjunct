'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', '$http','$location', function ($scope, $http, $location) {

        $scope.bannerSignupFormUrl = '/partial/signup-home-banner';


        $scope.search = function () {
            $http.post('/api/search', JSON.stringify({'query': $scope.searchBox})).then(function(response){
                if (response.data.hits.total > 0) {
                    console.log(response.data.hits.hits[0]._source);
                }
            });
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




