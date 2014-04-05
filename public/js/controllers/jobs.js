'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        $scope.users = [];
        $scope.jobs = [];
        var jobs = $http.get('/api/jobs');
        var positionTypes = $http.get('/api/positionTypes');
        var countries = $http.get('/api/countries');

        $q.all([jobs, positionTypes, countries]).then(function (values) {
            var jobs = values[0].data;
            $scope.jobs = _.map(jobs, function(job) {
                console.log(job);
                return job;

            });

        });
}]);