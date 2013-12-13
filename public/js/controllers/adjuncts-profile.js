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
        $scope.portfolioEditModalUrl = '/partial/portfolio-edit-modal';
        $scope.uploadPictureModalUrl = '/partial/upload-picture-modal';
        $scope.uploadAttachmentModalUrl = '/partial/upload-attachment-competencies-modal';
        $scope.competencyPortfolioModalUrl = '/partial/competency-portfolio-modal';
        $scope.videoModalUrl = '/partial/video-modal';
        $scope.videoUrl = '';
        $scope.computerUploadUrl = '/partial/upload-computer-modal';
        $scope.urlAttachUrl = '/partial/upload-url-modal';
        $scope.canEdit = $cookies._id && !userId;



//        $http.get('/api/get-job-profile/' + jobId).then(function(response) { $scope.job = response.data; });


        $http({
            url: '/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id),
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.user = data;
                angular.extend($scope.user, {
                    experience1Institution: 'Saginaw Valley State University',
                    experience1Title: 'Instructor',
                    experience1Location: 'Fall 2013, Kochville, Michigan',
                    status: 1,
                    experience1TimePeriodYear: '2013',
                    experience1Summary: 'write more about your experience here'
                });

                $scope.user.survey = {};
//                $scope.user.width={};
                $scope.filteredBadges = [];

                for (var badge in $scope.user.badges) {
                    var val = $scope.user.badges[badge];
                    if (val != false) {
                        $scope.filteredBadges.push(val);
                    }
                }

                if (!$scope.user.portfolioLinks)
                    $scope.user.portfolioLinks = [];

                $scope.user.videoIds = [];

                    console.log($scope.user.portfolioLinks);
                for (var index in $scope.user.portfolioLinks){
                    var portfolioLink = $scope.user.portfolioLinks[index];
                    if (portfolioLink.type == 'video') {
                        var videoId = URI.parseQuery(URI.parse(portfolioLink.value).query).v;
                        $scope.user.videoIds.push(videoId);
                    }
                }
            }).error(function (data, status, headers, config) {
                console.log("get-adjuncts-profile-top-card didn't work");
            });

        $scope.months = [];
        var count = 0;
        while (count < 12) {
            $scope.months.push(moment().month(count++).format("MMMM"));
        }

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

                    var syllabusDesignWidth = $scope.user.survey.syllabusDesign*20;
                    $("#syllabusDesign").syllabusDesignWidth(syllabusDesignWidth+"%");
                    $("#syllabusDesignPercent").text(syllabusDesignWidth+"%");
                    console.log("width"+syllabusDesignWidth);

                    var width = $scope.user.survey.technologyDesign*20;
                    $("#technologyDesign").width(width+"%");
                    $("#technologyDesignPercent").text(width+"%");

                    width = $scope.user.survey.studFeedback*20;
                    $("#studFeedback").width(width+"%");
                    $("#studFeedbackPercent").text(width+"%");

                    width = $scope.user.survey.sumFeedback*20;
                    $("#sumFeedback").width(width+"%");
                    $("#sumFeedbackPercent").text(width+"%");


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

        $scope.savePortfolioCard = function () {
            $http({
                url: '/save-adjuncts-profile',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                    console.log("save-adjunct-portfolio-card worked");
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

        $scope.addPortfolioLink= function(){
            console.log("from addPortfolioLink",$scope.user.portfolioLinks);
           $scope.user.portfolioLinks.push({type:'video', value:''});
        }

        $scope.removePortfolioLink= function(portfolioLink) {
            for(var i= 0, ii = $scope.user.portfolioLinks.length; i < ii; i++){
                if(portfolioLink==$scope.user.portfolioLinks[i]){
                    $scope.user.portfolioLinks.splice(i, 1);
                }
            }
        }

        $scope.openPictureUploadModal = function() {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.openAttachmentUploadModal = function(competency) {
            $('#upload-attachment-competencies-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
            $scope.competency = competency;
        }

        $scope.openVideoModal = function(videoId) {
            $scope.videoUrl = "http://www.youtube.com/embed/" + videoId;
            $('#video-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.4'});
        }

        $scope.openVideo = function(videoId) {
            $scope.videoUrl = "http://www.youtube.com/embed/" + videoId;
//            $('#video-modal').modal();
//            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.4'});
        }
        $scope.openBadgeEditModal= function() {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openCompetencyPortfolioModal= function() {
            $('#competency-portfolio-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openPortfolioEditModal= function() {
            $('#portfolio-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.uploadComplete = function (content, completed) {
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
