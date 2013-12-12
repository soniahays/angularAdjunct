'use strict';

angular.module('adjunct.controllers')
    .controller('ContactUsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.send = function() {
            $http.post('/send-email', JSON.stringify({'email': $scope.email}));
        }
    }]);