'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
        $scope.middleCardTemplateUrl = '/partial/adjuncts-profile-middle-card';
        $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
        $scope.sideSearchColumnUrl = '/partial/side-search-column';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.badgeSectionUrl = '/partial/badge-section';
        $scope.badgeEditModallUrl = '/partial/badge-edit-modal';
        $scope.uploadPictureModalUrl = '/partial/upload-picture-modal';
        $scope.videoModalUrl = '/partial/video-modal';
        $scope.user = {};
        $scope.user.imageName = null;
        $scope.user.badges = [];


        $http({
            url: '/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id),
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.user = data;
                angular.extend($scope.user, {
                    summary: 'Jennifer is currently pursuing her graduate degree at Michigan State University. Her research interests include Poland, the Holocaust, European Jewry Gender Childhood and Family. She has over six years of experience as an instructor and teaching assistant. Jennifer is a tech savvy teacher and has been enhancing her classes with Youtube video and online questionnaire for four years now',
                    experience1Institution: 'Saginaw Valley State University',
                    experience1Title: 'Instructor',
                    experience1Location: 'Fall 2013, Kochville, Michigan',
                    status: 1,
                    experience1TimePeriodYear: '2013',
                    experience1Summary: 'write more about your experience here'
                });
                $scope.filteredBadges = [];

                for (var badge in $scope.user.badges) {
                    var val = $scope.user.badges[badge];
                    if (val != false) {
                        $scope.filteredBadges.push(val);
                    }
                }

            }).error(function (data, status, headers, config) {
                console.log("get-adjuncts-profile-top-card didn't work");
            });

        $scope.months = [];
        $http({
            url: '/api/months',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.months = data;
            }).error(function (data, status, headers, config) {
                console.log("get months didn't work");
            });


        $scope.statuses = [
            {value: 1, text: 'fall'},
            {value: 2, text: 'winter'},
            {value: 3, text: 'spring'},
            {value: 4, text: 'summer'}
        ];

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
        }

        $scope.editBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';

            $http({
                url: '/save-adjuncts-profile',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-top-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-top-card didn't work");
                });
        }

        $scope.saveBadgeCard = function () {
            $http({
                url: '/save-adjuncts-profile',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-adjunct-badge-card worked");
                    $scope.filteredBadges = [];

                    for (var badge in $scope.user.badges) {
                        var val = $scope.user.badges[badge];
                        if (val != false) {
                            $scope.filteredBadges.push(val);
                        }
                    }
                }).error(function (data, status, headers, config) {
                    console.log("save-adjunct-badge-card didn't work");
                });
        }

        $scope.saveBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';

            $http({
                url: '/save-adjuncts-profile',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-bottom-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-bottom-card didn't work");
                });
        }

        $scope.openPictureUploadModal = function() {
            $('#upload-picture-modal').modal();
                $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});

        }

        $scope.openVideoModal = function() {
            $('#video-modal').modal();
                $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.4'});
        }

        $scope.openBadgeEditModal= function() {
            $('#badge-edit-modal').modal();
                $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.uploadComplete = function (content, completed) {
            console.log(content);

            $http({
                url: '/api/get-adjuncts-profile/' + $cookies._id,
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    $scope.user.imageName = data.imageName;
                    $('#upload-picture-modal').modal('hide');
                }).error(function (data, status, headers, config) {
                    console.log("get-adjuncts-profile-top-card didn't work");
                });
        };
    }]);
