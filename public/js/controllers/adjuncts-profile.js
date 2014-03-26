'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', '$q', '$location', '$filter','$templateCache', function ($scope, $http, $cookies, $q, $location, $filter,$templateCache) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.canEdit = $cookies._id && !userId;

        $scope.isEditMode = false;
        $scope.isPositionShown = false;
        $scope.showAddDoc = false;
        $scope.showVid = false;
        $scope.maxNumberOfTagsToShow = 17;

        var isEditModeUrl = S($location.path()).endsWith('/edit') && $scope.canEdit;

        $scope.topCardTemplateUrl = isEditModeUrl ?  '/partial/adjuncts-profile-top-card-edit': '/partial/adjuncts-profile-top-card';
        $scope.bottomCardTemplateUrl = isEditModeUrl ? '/partial/adjuncts-profile-bottom-card-edit' : '/partial/adjuncts-profile-bottom-card';

        var adjunctProfile = $http.get('/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id));
        var countries = $scope.canEdit ? $http.get('/api/countries') : null;
        var fieldGroups = $scope.canEdit ? $http.get('/api/fieldGroups') : null;
        var edDegrees = $scope.canEdit ? $http.get('/api/edDegrees') : null;
        var institutions = $scope.canEdit ? $http.get('/api/institutions') : null;
        var linkedinData = $scope.canEdit ? $http.get('/api/getLinkedinData') : null;

        $scope.$watch('user.country', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.countries, {id: $scope.user.country});
                if (selected)
                    $scope.user.countryName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.field', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.fieldGroups, {id: $scope.user.field});
                if (selected)
                    $scope.user.fieldName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.edDegree', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.edDegrees, {id: $scope.user.edDegree});
                if (selected)
                    $scope.user.edDegreeName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.institution', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.institutions, {id: $scope.user.institution});
                if (selected)
                    $scope.user.institutionName = selected.length ? selected[0].text : null;
            }
        });

        $q.all([adjunctProfile, countries, fieldGroups, edDegrees, institutions, linkedinData]).then(function (values) {
                $scope.user = values[0].data;
                $scope.countries = values[1] ? values[1].data : null;
                $scope.fieldGroups = values[2] ? values[2].data : null;
                $scope.edDegrees = values[3] ? values[3].data : null;
                $scope.institutions = values[4] ? values[4].data : null;
                var linkedinData = values[5] ? values[5].data : null;

                if (linkedinData.pictureFileName && !$scope.user.imageName) {
                    $scope.user.imageName = linkedinData.pictureFileName;
                }

                if (!$scope.user.survey)
                    $scope.user.survey = {};

                if (!$scope.user.fieldOfExpertises || $scope.user.fieldOfExpertises.length == 0)
                    $scope.user.fieldOfExpertises = [
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
            $scope.user.portfolioLinks.push({type: 'Youtube', value: ''});
        }

        $scope.addPortfolioUpload = function () {
            $scope.user.portfolioLinks.push({type: 'PDF', value: ''});
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
            $scope.showAddDoc = false;
        }

        $scope.openBadgeEditModal = function () {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openCompetencyPortfolioModal = function () {
            $('#competency-portfolio-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openAddDoc = function () {
            $scope.showAddDoc = true;
        }

        $scope.closeAddDoc = function() {
            $scope.showAddDoc = false;
        }

        $scope.uploadComplete = function (content, completed) {
            $http.get('/api/get-adjuncts-profile/' + $cookies._id).success(function (data) {
                $scope.user.imageName = data.imageName;
                $("#upload-picture-modal").modal('hide');
            });
        };

        $scope.saveDocument = function() {
            var url;
            var thumbnail;

            if ($scope.document.type == 'Youtube') {
                var youtubeId = getYoutubeId($scope.document.value);
                url = 'https://www.youtube.com/embed/' + youtubeId;
                thumbnail = "http://img.youtube.com/vi/" + youtubeId + "/1.jpg";
            }
            else {
                url = $scope.document.value;
                thumbnail = "/img/PortfolioIconResume.png";
            }
            $scope.user.portfolioLinks.push({
               'category': $scope.document.category,
               'title': $scope.document.title,
               'description': $scope.document.description,
               'value': url,
                "thumbnail": thumbnail,
               'type': $scope.document.type,
               '$$hashKey': "HK" + $scope.user.portfolioLinks.length
            });
        }

        $scope.showMoreTags=function(){
          $scope.maxNumberOfTagsToShow=9999;
        }

        $scope.showLessTags=function(){
            $scope.maxNumberOfTagsToShow=17;
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



        $scope.saveUser = function(data, id) {
            //$scope.user not updated yet
            angular.extend(data, {id: id});
            return $http.post('/saveUser', data);
        };

        // add user
        $scope.addUser = function() {
            $scope.inserted = {
                id: $scope.users.length+1,
                name: '',
                status: null,
                group: null
            };

            $scope.users.push($scope.inserted);
        }

        $scope.getCompetencyPercent = function(answer, category) {
            var competencyPercent = answer*20;

            var hasAttachedDocument = _.findWhere($scope.user.portfolioLinks, {'category': category }) != null;

            if (!hasAttachedDocument){
                competencyPercent -= 0.15 * competencyPercent;
            }

            return competencyPercent;
        }

        $scope.tabs = [
            {
                "title": "Summary",
                "template": "/partial/adjuncts-profile-summary"
            },
            {
                "title": "Questions",
                "template": "/partial/adjuncts-profile-questions"

            },
            {
                "title": "Portfolio",
                "template": "/partial/adjuncts-profile-portfolio"

            }
        ];

        $scope.tabs.activeTab = 0;
    }]);
