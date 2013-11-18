'use strict';

angular.module('adjunct.controllers')
.controller('IndexCtrl', ['$scope', '$cookies', function ($scope, $cookies) {
    $scope.signout = function() {
        $cookies.id = null;
        $cookies.idType = null;
        window.location.replace('/signout');
    }
}]);