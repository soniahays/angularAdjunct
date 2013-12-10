'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope', '$http', function ($scope, $http) {
        var jobId = $('#jobId').html();

        $scope.job = {};

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

        $http.get('/api/positionTypes').then(function(response) { $scope.positionTypes = response.data; });
        $http.get('/api/contractTypes').then(function(response) { $scope.contractTypes = response.data; });
        $http.get('/api/countries').then(function(response) { $scope.countries = response.data; });
        $http.get('/api/get-job-profile/' + jobId).then(function(response) { $scope.job = response.data; });

        $scope.editTopCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
        }

        $scope.editBottomCard = function () {
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $http.post('/api/save-job-profile/', JSON.stringify({'job': $scope.job}));
        }

        $scope.saveBottomCard = function () {
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';
            $http.post('/api/save-job-profile', JSON.stringify({'job': $scope.job}));
        }

        $scope.openBadgeEditModal = function () {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }
    }]);




