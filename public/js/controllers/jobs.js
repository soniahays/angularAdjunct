'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        $scope.users = [];
        $scope.jobs = [];
        var jobs = $http.get('/api/jobs');
        var positionTypes = $http.get('/api/positionTypes');
        $q.all([jobs, positionTypes]).then(function (values) {
            var jobs = values[0].data;
            var positionTypes = values[1].data;
            $scope.jobs = _.map(jobs, function(job) {
                var positionType = _.findWhere(positionTypes, {_id: job.positionTypeId});
                if (positionType) {
                    job.positionTypeDesc = positionType.name;
                }
                return job;
            });
        });
}]);