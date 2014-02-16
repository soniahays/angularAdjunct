'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', function ($scope) {

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
            window.location.href = '/auth/google';
            $("[bs-popover]").click();
        }

        $scope.connectManually = function(){
            window.location.href = '/signup';
            $("[bs-popover]").click();
        }


        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
            }
        }

        $scope.openSignUpModal = function () {
            $('#signup-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.modal = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };
    }]);




