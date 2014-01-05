'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope', '$http', '$cookies', '$q', function ($scope, $http, $cookies, $q) {
        var jobId = $('#jobId').html();

        $scope.job = {};
        $scope.canSaveJob = $cookies._id;

        if (jobId) {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';
        }
        else {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.uploadJobPictureModalUrl = '/partial/upload-job-picture-modal';

        var jobPromise;

        if (jobId) {
            jobPromise = $http.get('/api/get-job-profile/' + jobId);
        }

        var positionTypesPromise = $http.get('/api/positionTypes');

        $q.all([jobPromise, positionTypesPromise]).then(function(values) {
            if (values[0]) {
                $scope.job = values[0].data;
                $scope.positionTypes = values[1].data;
                if ($scope.job) {
                    var positionType = _.findWhere($scope.positionTypes, {_id: $scope.job.positionTypeId});
                    if (positionType) {
                        $scope.job.positionTypeDesc = positionType.name;
                    }
                }
            }
        });

        $http.get('/api/contractTypes').then(function(response) { $scope.contractTypes = response.data; });
        $http.get('/api/countries').then(function(response) { $scope.countries = response.data; });

        $scope.editJobProfile = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.openJobPictureUploadModal = function() {
            $('#upload-job-picture-modal').modal();
            var action = $('#upload-job-picture-modal form').attr('action');
            action = action.replace('/upload-job', '/upload-job/' + jobId);
            $('#upload-job-picture-modal form').attr('action', action);
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
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

        $scope.uploadComplete = function (content, completed) {
            $http.get('/api/get-job-profile/' + jobId).success(function(data) {
                $scope.user.imageName = data.imageName;
                $('#upload-job-picture-modal').modal('hide');
            });
        };

        $scope.saveJobForUser = function () {
            $http.post('/api/save-job-for-user', JSON.stringify({'jobId': jobId}));
        }
    }]);




