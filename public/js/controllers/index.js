'use strict';

angular.module('adjunct.controllers')
.controller('IndexCtrl', ['$scope', '$cookies', function ($scope, $cookies) {
        $scope.isSignedIn = $cookies._id != null;
        $scope.signout = function() {
            window.location.replace('/signout');
        }
}]);