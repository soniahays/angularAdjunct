'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope','$templateCache', '$http', '$cookies', '$q','$aside', function ($scope,$templateCache, $http, $cookies, $q, $aside ) {
        var jobId = $('#jobId').html();

        $scope.master = {};

        $scope.update = function(job) {
            $scope.master = angular.copy(job);
        };

        $scope.reset = function() {
            $scope.job = angular.copy($scope.master);
        };

        $scope.reset();



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

                if (!$scope.job.jobRequirements || $scope.job.jobRequirements.length == 0)
                    $scope.job.jobRequirements = [
                        { value: ''}
                    ];

                if(!$scope.job.jobRequirements)
                   $scope.job.jobRequirements=[];

                if(!$scope.job.additionalAssets)
                    $scope.job.additionalAssets=[];
            }
        });

        $http.get('/api/contractTypes').then(function(response) { $scope.contractTypes = response.data; });
        $http.get('/api/edDegrees').then(function(response) { $scope.edDegrees = response.data; });
        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name; })});
        $http.get('/api/positionTypes').then(function(response){ $scope.positionTypes = _.map(response.data, function(item){return item.name; })});
        $http.get('/api/fieldGroups').then(function(response) { $scope.fieldGroups = _.map(response.data, function(item){return item.name})});
        $http.get('/api/institutions').then(function(response) { $scope.institutions = _.map(response.data, function(item){return item.name})});



        $scope.selected = undefined;
        $http.get('/api/institutions').then(function(response) {
            $scope.institutions = _.map(response.data, function(item) { return item.Institution + " (" + item.State + ")"; });
            //$scope.institutions = response.data;
        });

        $scope.selectedAddress = undefined;
        $scope.getAddress = function(viewValue) {
            var params = {address: viewValue, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then(function(res) {
                    console.log(res.data.results)
                    return res.data.results;
                });
        };

        $scope.aside = {
            "title": "Title",
            "content": "Hello Aside<br />This is a multiline message!"
        };


        $scope.editJobProfile = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.addAJobRequirement = function () {
            $scope.job.jobRequirements.push({value: ''});
        }
        $scope.addAnAdditionalAsset = function(){
            $scope.job.additionalAssets.push({value:''});
        }

        $scope.removeAJobRequirement = function (jobRequirement) {
            for (var i = 0, ii = $scope.job.jobRequirements.length; i < ii; i++) {
                if (jobRequirement == $scope.job.jobRequirements[i]) {
                    $scope.job.jobRequirements.splice(i, 1);
                }
            }
        }

        $scope.removeAnAdditionalAsset = function (additionalAsset) {
            for (var i = 0, ii = $scope.job.additionalAssets.length; i < ii; i++) {
                if (additionalAsset == $scope.job.additionalAssets[i]) {
                    $scope.job.additionalAssets.splice(i, 1);
                }
            }
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

        $scope.saveJobCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
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




