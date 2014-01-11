'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope', '$http', '$cookies', '$q','$aside', function ($scope, $http, $cookies, $q, $aside) {
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
        $http.get('/api/countries').then(function(response) { $scope.countries = response.data; });



        $scope.selected = undefined;
        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        // Any function returning a promise object can be used to load values asynchronously
        $scope.getLocation = function(val) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(res){
                    var addresses = [];
                    angular.forEach(res.data.results, function(item){
                        addresses.push(item.formatted_address);
                    });
                    return addresses;
                });
        };

        $scope.statesWithFlags = [{"name":"Alabama","flag":"5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"},{"name":"Alaska","flag":"e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"},{"name":"Arizona","flag":"9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"},{"name":"Arkansas","flag":"9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"},{"name":"California","flag":"0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"},{"name":"Colorado","flag":"4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"},{"name":"Connecticut","flag":"9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"},{"name":"Delaware","flag":"c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"},{"name":"Florida","flag":"f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"},{"name":"Georgia","flag":"5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"},{"name":"Hawaii","flag":"e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"},{"name":"Idaho","flag":"a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"},{"name":"Illinois","flag":"0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"},{"name":"Indiana","flag":"a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"},{"name":"Iowa","flag":"a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"},{"name":"Kansas","flag":"d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"},{"name":"Kentucky","flag":"8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"},{"name":"Louisiana","flag":"e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"},{"name":"Maine","flag":"3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"},{"name":"Maryland","flag":"a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"},{"name":"Massachusetts","flag":"f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"},{"name":"Michigan","flag":"b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"},{"name":"Minnesota","flag":"b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"},{"name":"Mississippi","flag":"4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"},{"name":"Missouri","flag":"5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"},{"name":"Montana","flag":"c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"},{"name":"Nebraska","flag":"4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"},{"name":"Nevada","flag":"f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"},{"name":"New Hampshire","flag":"2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"},{"name":"New Jersey","flag":"9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"},{"name":"New Mexico","flag":"c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"},{"name":"New York","flag":"1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"},{"name":"North Carolina","flag":"b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"},{"name":"North Dakota","flag":"e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"},{"name":"Ohio","flag":"4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"},{"name":"Oklahoma","flag":"6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"},{"name":"Oregon","flag":"b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"},{"name":"Pennsylvania","flag":"f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"},{"name":"Rhode Island","flag":"f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"},{"name":"South Carolina","flag":"6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"},{"name":"South Dakota","flag":"1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"},{"name":"Tennessee","flag":"9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"},{"name":"Texas","flag":"f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"},{"name":"Utah","flag":"f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"},{"name":"Vermont","flag":"4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"},{"name":"Virginia","flag":"4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"},{"name":"Washington","flag":"5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"},{"name":"West Virginia","flag":"2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"},{"name":"Wisconsin","flag":"2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"},{"name":"Wyoming","flag":"b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"}];



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




