'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        $scope.users = [];
        $scope.sideSearchColumnUrl = '/partial/side-search-column';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        var jobs = $http.get('/api/jobs');
        var positionTypes = $http.get('/api/positionTypes');
        $q.all([jobs, positionTypes]).then(function (values) {
            var jobs = values[0].data;
            var positionTypes = values[1].data;
            $scope.jobs = _.map(jobs, function(job) {
                var positionType = _.findWhere(positionTypes, {_id: job.positionType});
                if (positionType) {
                    job.positionType = positionType.name;
                }
                return job;
            });
        });
}]);