'use strict';

angular.module('adjunct.controllers')
    .controller('ConfirmEmailCtrl' ['$scope','$location',   function ($scope,$location) {
        $scope.confEmail=function(){
            $location.path( '/adjuncts-profile' );
        }
    }]);