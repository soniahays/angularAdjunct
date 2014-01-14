'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {
        $scope.pw='';
        $scope.joinNow = function () {
            $scope.user.email = encodeURIComponent($scope.user.email);
            $rootScope.user = $scope.user;
            $http.post('/api/signup', JSON.stringify({'user': $scope.user})).then(function(){$location.path('/basic-profile');});
        }

        $scope.tooltip = {
            "title": "<div class='input-help'>Password must meet the following requirements:</br><ul><li ng-class='pwdHasLetter'>At least <strong>one letter</strong></li><li ng-class='pwdHasNumber'>At least <strong>one number</strong></li><li ng-class='pwdValidLength'>At least <strong>8 characters long</strong></li></ul></div>",
            "checked": false
        };
    }]);







