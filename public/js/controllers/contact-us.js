'use strict';

angular.module('adjunct.controllers')
    .controller('ContactUsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.send = function() {
            $http.post('/send-email', JSON.stringify({'email': $scope.email})).then(function() {$scope.responseMessage = "Message sent!"; console.log("Hi");}, function() {$scope.responseMessage="Something failed!"});
        }
        // ------------------------------------   Social logging------------------------------------------------------------------------

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

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

// ------------------------------------ End Social logging------------------------------------------------------------------------

        $scope.connectManually = function(){
            window.location.href = '/signup';
            $("[bs-popover]").click();
        }

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
            }
        }

        $scope.openSignUpModal = function () {
            $('#signup-modal').modal();
            $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
        }

        $scope.modal = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };

    }]);