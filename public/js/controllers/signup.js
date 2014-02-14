'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {
        $scope.user = {};

        $scope.connectManually = function () {
            $scope.user.email = encodeURIComponent($scope.user.email);
            $scope.user.password = $scope.password;
            $http.post('/api/signup', JSON.stringify({'user': $scope.user})).then(function(response){
                $rootScope.user = response.data;
                $rootScope.user.password = $scope.password;
                $location.path('/basic-profile');
            });
        }

        $scope.createProfileWithLinkedin = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.tooltip = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };

        $scope.importLinkedin = function () {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }
    }]);


