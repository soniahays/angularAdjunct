'use strict';

angular.module('adjunct.controllers')
    .controller('JobsProfileCtrl', ['$scope', '$http',  function ($scope, $http) {
        $scope.users = [];
        $scope.jobs = [];
        $scope.topCardJobTemplateUrl = '/partial/jobs-profile-top-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $http({
            url: '/api/users',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.users = data;
            }).error(function (data, status, headers, config) {
                console.log("/api/users didn't work");
            });



    }]);
