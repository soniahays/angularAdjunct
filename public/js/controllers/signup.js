'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {
        $scope.joinNow = function () {
            $scope.user.email = encodeURIComponent($scope.user.email);
            $scope.user.password = $scope.password;
            $rootScope.user = $scope.user;
            $http.post('/api/signup', JSON.stringify({'user': $scope.user})).then(function(){$location.path('/basic-profile');});
        }

        $scope.createProfileWithLinkedin = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.tooltip = {
            "title": "<ul id='strength' check-strength='password'></ul>",
            "checked": false
        };
    }]);







