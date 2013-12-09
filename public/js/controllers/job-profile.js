'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope', '$http',  function ($scope, $http) {

        var jobId = $('#jobId').html();

        if (jobId) {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';
        }
        else {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';

        $http({
            url: '/api/get-job-profile/' + jobId,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.job = data;

            }).error(function (data, status, headers, config) {
                console.log("/api/get-job-profile didn't work");
            });

        $scope.editTopCard = function () {
            console.log("from top card job edit") ;
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
        }
        $scope.editBottomCard = function () {
            console.log("from bottom card job edit") ;
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';

            $http({
                url: '/save-job-profile',
                method: 'POST',
                data: JSON.stringify({'job': $scope.job}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-job-profile-top-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-job-profile-top-card didn't work");
                });
        }
        $scope.saveBottomCard = function () {
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';

            $http({
                url: '/save-job-profile',
                method: 'POST',
                data: JSON.stringify({'job': $scope.job}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-job-profile-bottom-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-job-profile-bottom-card didn't work");
                });
        }

        $scope.positionTypes = [];
        $http({
            url: '/api/positionTypes',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.positionTypes = data;
            }).error(function (data, status, headers, config) {
                console.log("get positionTypes didn't work");
            });

        $scope.contractTypes = [];
        $http({
            url: '/api/contractTypes',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.contractTypes = data;
            }).error(function (data, status, headers, config) {
                console.log("get contractTypes didn't work");
            });

        $scope.countries = [];
        $http({
            url: '/api/countries',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.countries = data;
            }).error(function (data, status, headers, config) {
                console.log("get countries didn't work");
            });

        $scope.openBadgeEditModal= function() {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }
    }]);




