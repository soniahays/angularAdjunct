'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', '$q', '$location', function ($scope, $http, $cookies, $q, $location) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.canEdit = $cookies._id && !userId;

        $scope.isEditMode = false;
        $scope.isPositionShown = false;

        var isEditModeUrl = S($location.path()).endsWith('/edit') && $scope.canEdit;

        $scope.topCardTemplateUrl = isEditModeUrl ?  '/partial/adjuncts-profile-top-card-edit': '/partial/adjuncts-profile-top-card';
        $scope.bottomCardTemplateUrl = isEditModeUrl ? '/partial/adjuncts-profile-bottom-card-edit' : '/partial/adjuncts-profile-bottom-card';

        var adjunctProfile = $http.get('/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id));
        var countries = $scope.canEdit ? $http.get('/api/countries') : null;
        var linkedinData = $scope.canEdit ? $http.get('/api/getLinkedinData') : null;

        $q.all([adjunctProfile, countries, linkedinData]).then(function (values) {
                $scope.user = values[0].data;
                $scope.countries = values[1] ? values[1].data : null;
                var linkedinData = values[2] ? values[2].data : null;

                if ($scope.user.country)
                    $scope.user.countryName = _.findWhere($scope.countries, {_id: $scope.user.country}).name;

                if (!$scope.user.survey)
                    $scope.user.survey = {};

                if (!$scope.user.fieldOfExpertises || $scope.user.fieldOfExpertises.length == 0)
                    $scope.user.fieldOfExpertises = [
                        { value: ''}
                    ];

                if (!$scope.user.educationDegrees || $scope.user.educationDegrees.length == 0)
                    $scope.user.educationDegrees = [
                        { value: ''}
                    ];

                if (!$scope.user.resumePositions || $scope.user.resumePositions.length == 0)
                    $scope.user.resumePositions = [
                        { value: ''}
                    ];

                if (!$scope.user.expertiseTags) {
                    $scope.user.expertiseTags = [];
                }

                if ($scope.user.expertiseTags.length == 0 && linkedinData && linkedinData.skills) {
                    var skills = _.pluck(_.pluck(linkedinData.skills.values, 'skill'), 'name');
                    $scope.user.expertiseTags = skills;
                }

                if ($scope.user.jobs) {
                    var jobPromises = [$http.get('/api/positionTypes')];
                    for (var i = 0; i < $scope.user.jobs.length; i++) {
                        jobPromises.push($http.get('/api/get-job-profile/' + $scope.user.jobs[i]));
                    }
                    $q.all(jobPromises).then(function(values) {
                        var positionTypes = values[0].data;
                        var jobs = _.pluck(values.slice(1), 'data');
                        $scope.user.jobs = _.map(jobs, function(job) {
                            var positionType = _.findWhere(positionTypes, {_id: job.positionTypeId});
                            if (positionType) {
                                job.positionTypeDesc = positionType.name;
                            }
                            return job;
                        });
                    });
                }

                if (linkedinData && linkedinData.summary) {
                    $scope.user.personalSummary = linkedinData.summary;
                }

                if (linkedinData && linkedinData.positions) {
                    var positions = linkedinData.positions.values;
                    $scope.user.resumePositions = _.map(positions, function(position) {

                        return {
                            title: position.title,
                            institution: position.company.name,
                            startMonth: position.startDate.month,
                            startYear: position.startDate.year,
                            stillHere: position.isCurrent,
                            endMonth: position.isCurrent ? null : position.endDate.month,
                            endYear: position.isCurrent ? null : position.endDate.year,
                            location: position.location,
                            description: position.summary,
                            termsDate: getUniversityTerm(position.startDate.month, position.startDate.year,position.endDate,position.isCurrent)
                        }

                    });
                }

                $scope.filteredBadges = [];
                for (var badge in $scope.user.badges) {
                    var val = $scope.user.badges[badge];
                    if (val != false) {
                        $scope.filteredBadges.push(val);
                    }
                }

                $scope.document = {};
                /*
                    {
                        "type": "video",
                        "value": "https://www.youtube.com/embed/YKulXXvK2TA",
                        "title": "Course Welcome Fall 2012",
                        "description": "video description goes here",
                        "thumbnail": "http://img.youtube.com/vi/YKulXXvK2TA/2.jpg",
                        "$$hashKey": "02X"
                    },
                    {
                        "type": "video",
                        "value": "https://www.youtube.com/embed/F1QNHJ1N-p0",
                        "title": "Homework review Winter 2009",
                        "description": "video description goes here",
                        "thumbnail": "http://img.youtube.com/vi/F1QNHJ1N-p0/2.jpg",
                        "$$hashKey": "02Z"
                    },
                    {
                        "type": "pdf",
                        "title": "PDF title goes here",
                        "description": "PDF description goes here",
                        "value": "https://docs.google.com/gview?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true",
                        "thumbnail": "/img/PortfolioIconResume.png",
                        "$$hashKey": "02Y"
                    }
                ];
                */

                $scope.isSummaryShown = $scope.user.personalSummary != null;

                if (!$scope.user.portfolioLinks)
                    $scope.user.portfolioLinks = [];


                if (!$scope.user.fieldOfExpertises)
                    $scope.user.fieldOfExpertises = [];

                if (!$scope.user.educationDegrees)
                    $scope.user.educationDegrees = [];
            },
            function (error) {
                console.log("get-adjuncts-profile-top-card didn't work", error);
            });

        $scope.activePositionIndex;

        $scope.months = [];
        var count = 0;
        while (count < 12) {
            $scope.months.push(moment().month(count++).format("MMMM"));
        }

        $scope.statuses = [
            {value: 1, text: 'Fall'},
            {value: 2, text: 'Winter'},
            {value: 3, text: 'Spring'},
            {value: 4, text: 'Summer'}
        ];

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
            $scope.isEditMode=true;
        }

        $scope.editBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card-edit';
        }

        $scope.showPersonalSummaryEdit = function(){
           $scope.restorePersonalSummary = angular.copy($scope.user.personalSummary);
           $scope.isPersonalSummaryShown = !$scope.isPersonalSummaryShown;
        }

        $scope.showResumePositionEdit = function(index) {
//            $scope.restoreResumePosition = angular.copy($scope.user.resumePosition);
            $scope.activePositionIndex = index;
        }

        $scope.isResumePositionShown = function(index){
            var shouldShow = $scope.activePositionIndex === index;
            return shouldShow;
        }

        $scope.showResumeSectionEdit = function (){
            $scope.isResumeSectionShown = !$scope.isResumeSectionShown;
        }

        $scope.restorePreviousPersonalSummary = function(){
           $scope.user.personalSummary = angular.copy($scope.restorePersonalSummary);
        }

        $scope.restorePreviousResumePosition = function(){
            $scope.user.resumePosition =angular.copy($scope.restoreResumePosition);
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
            $scope.isEditMode=false;
        }

        $scope.importLinkedin = function () {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.saveBadgeCard = function () {
            $scope.filteredBadges = [];
            for (var badge in $scope.user.badges) {
                var val = $scope.user.badges[badge];
                if (val != false) {
                    $scope.filteredBadges.push(val);
                }
            }

            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.savePortfolioCard = function () {
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.saveBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.savePersonalSummary = function (){
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
            $scope.isPersonalSummaryShown = !$scope.isPersonalSummaryShown;
        }

        $scope.saveResumePositionEdit = function(){
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user':$scope.user}));
            $scope.activePositionIndex = -1;
        }

        $scope.addPortfolioLink = function () {
            $scope.user.portfolioLinks.push({type: 'video', value: ''});
        }

        $scope.addPortfolioUpload = function () {
            $scope.user.portfolioLinks.push({type: 'pdf', value: ''});
        }

        $scope.removePortfolioLink = function (portfolioLink) {
            for (var i = 0, ii = $scope.user.portfolioLinks.length; i < ii; i++) {
                if (portfolioLink == $scope.user.portfolioLinks[i]) {
                    $scope.user.portfolioLinks.splice(i, 1);
                }
            }
        }

        $scope.addAFieldOfExpertise = function () {
            $scope.user.fieldOfExpertises.push({value: ''});
        }

        $scope.addAPersonalSummary = function(){
           $scope.isSummaryShown = !$scope.isSummaryShown;
        }

        $scope.addAEducationDegree = function () {
            $scope.user.educationDegrees.push({value: ''});
        }

        $scope.addAResumePosition = function () {
            $scope.user.resumePositions.push({value: ''});
        }

        $scope.removeAEducationDegree = function (educationDegree) {
            for (var i = 0, ii = $scope.user.educationDegrees.length; i < ii; i++) {
                if (educationDegree == $scope.user.educationDegrees[i]) {
                    $scope.user.educationDegrees.splice(i, 1);
                }
            }
        }

        $scope.removeAFieldOfExpertise = function (fieldOfExpertise) {
            for (var i = 0, ii = $scope.user.fieldOfExpertises.length; i < ii; i++) {
                if (fieldOfExpertise == $scope.user.fieldOfExpertises[i]) {
                    $scope.user.fieldOfExpertises.splice(i, 1);
                }
            }
        }

        $scope.removePositionAlert = function(resumePosition){
            $scope.selectedResumePosition = resumePosition;
            $('#alert-modal').modal();
        }

        $scope.removeAResumePosition = function (resumePosition) {
            for (var i = 0, ii = $scope.user.resumePositions.length; i < ii; i++) {
                if (resumePosition == $scope.user.resumePositions[i]) {
                    $scope.user.resumePositions.splice(i, 1);
                }
            }
        }

        $scope.openPictureUploadModal = function () {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.openAttachmentUploadModal = function (competency) {
            $('#upload-attachment-competencies-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
            $scope.competency = competency;
        }

        $scope.openVideoModal = function (videoId) {
            $scope.frameUrl = "http://www.youtube.com/embed/" + videoId;
            $('#video-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.4'});
        }

        $scope.openDoc = function (url, docType, docTitle, docDescription) {
            $scope.frameUrl = url;
            $scope.docTitle = docTitle;
            $scope.docDescription = docDescription;
        }

        $scope.openBadgeEditModal = function () {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openCompetencyPortfolioModal = function () {
            //$scope.frameUrl = "https://www.youtube.com/embed/YKulXXvK2TA";
            //$scope.docTitle = "Course Welcome Fall 2012";
            //$scope.docDescription = "video description goes here",
            $('#competency-portfolio-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openUploadPortfolioModal = function () {
            $('#upload-portfolio-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.uploadComplete = function (content, completed) {
            $http.get('/api/get-adjuncts-profile/' + $cookies._id).success(function (data) {
                $scope.user.imageName = data.imageName;
            });
        };

        $scope.saveDocument = function() {
            var url;
            if ($scope.document.type == 'video') {
                url = 'https://www.youtube.com/embed/' + getYoutubeId($scope.document.value);
            }
            else {
                url = $scope.document.value;
            }
            $scope.user.portfolioLinks.push({
               'category': $scope.document.category,
               'title': $scope.document.title,
               'description': $scope.document.description,
               'value': url,
               'thumbnail': "/img/PortfolioIconResume.png",
               'type': $scope.document.type,
               '$$hashKey': "HK" + $scope.user.portfolioLinks.length
            });
        }

        $scope.savePortfolio = function() {
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        function getYoutubeId(url) {
            var regex = /(www.)?youtu(be\.com|\.be)\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/
            var matches = url.match(regex);
            return matches[4];
        }

        function getUniversityTerm(startMonth, startYear, endDate, isStillHere){
            var universityTermStart;
            var universityTermEnd;
            switch(startMonth){
                case 1:
                case 2:
                    universityTermStart = "Winter";
                    break;
                case 3:
                case 4:
                case 5:
                    universityTermStart = "Spring";
                    break;
                case 6:
                case 7:
                case 8:
                    universityTermStart = "Summer";
                    break;
                case 9 :
                case 10 :
                case 11 :
                case 12 :
                    universityTermStart = "Fall";
                    break;

            }
            if(!isStillHere){
                switch(endDate.month){
                    case 1:
                    case 2:
                    case 3:
                        universityTermEnd = "Winter";
                        break;
                    case 4:
                    case 5:
                    case 6:
                        universityTermEnd = "Spring";
                        break;
                    case 7:
                    case 8:
                        universityTermEnd = "Summer";
                        break;
                    case 9 :
                    case 10 :
                    case 11 :
                    case 12 :
                        universityTermEnd = "Fall";
                        break;

                }
            }

            return isStillHere ? universityTermStart +" "+ startYear + " - Present" : universityTermStart +" "+ startYear + " - " + universityTermEnd +" "+ endDate.year ;

        }
    }]);
