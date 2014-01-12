'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {

        $scope.joinNow = function () {
            $scope.user.email = encodeURIComponent($scope.user.email);
            $rootScope.user = $scope.user;
            $http.post('/api/signup', JSON.stringify({'user': $scope.user})).then(function(){$location.path('/basic-profile');});
        }

        $scope.tooltip = {
            "title": "Password must meet the following requirements:</br><div class='pwdHasLetter' style='color:blue'>At least <strong>one letter</strong></div></br>At least <strong>one number</strong></br>At least <strong>8 characters long</strong>",
            "checked": false
        };
    }]);







