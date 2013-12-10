'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $scope.sideSearchColumnUrl = '/partial/side-search-column';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $http.get('/api/jobs').then(function(jobsResponse) {
            $http.get('/api/positionTypes').then(function(positionTypesResponse) {
                var positionTypes = positionTypesResponse.data;
                var jobs = jobsResponse.data;
                for (var i = 0; i < jobs.length; i++) {
                    jobs[i].positionType = $.grep(positionTypes, function(e) { return e._id == jobs[i].positionType; })[0].name;
                }

                $scope.jobs = jobs;
            });
        });
    }]);