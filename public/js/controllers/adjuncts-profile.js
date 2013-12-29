'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', '$q', '$location', function ($scope, $http, $cookies, $q, $location) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.canEdit = $cookies._id && !userId;

        var isEditMode = S($location.path()).endsWith('/edit') && $scope.canEdit;

        $scope.topCardTemplateUrl = isEditMode ?  '/partial/adjuncts-profile-top-card-edit': '/partial/adjuncts-profile-top-card';
        $scope.bottomCardTemplateUrl = isEditMode ? '/partial/adjuncts-profile-bottom-card-edit' : '/partial/adjuncts-profile-bottom-card';
        $scope.middleCardTemplateUrl = isEditMode ? '/partial/adjuncts-profile-middle-card-edit' : '/partial/adjuncts-profile-middle-card';

        var adjunctProfile = $http.get('/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id));
        var countries = $scope.canEdit ? $http.get('/api/countries') : null;
        var linkedinData = $scope.canEdit ? $http.get('/api/getLinkedinData') : null;

        $q.all([adjunctProfile, countries, linkedinData]).then(function (values) {
                $scope.user = values[0].data;
                $scope.countries = values[1] ? values[1].data : null;
                var linkedinData = values[2] ? values[2].data : null;
                //console.log(linkedinData);

                angular.extend($scope.user, {
                    experience1Institution: 'Saginaw Valley State University',
                    experience1Title: 'Instructor',
                    experience1Location: 'Fall 2013, Kochville, Michigan',
                    status: 1,
                    experience1TimePeriodYear: '2013'
                });

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

                calculateSurvey();

                // this is for testing only.
                $scope.user.portfolioLinks = [
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

                // the above is for testing only.

                $scope.isSummaryShown=$scope.user.personalSummary != null;
                if (!$scope.user.portfolioLinks)
                    $scope.user.portfolioLinks = [];


                if (!$scope.user.fieldOfExpertises)
                    $scope.user.fieldOfExpertises = [];

                if (!$scope.user.educationDegrees)
                    $scope.user.educationDegrees = [];

                for (var index in $scope.user.portfolioLinks) {
                    var portfolioLink = $scope.user.portfolioLinks[index];
                    if (portfolioLink.type == 'video') {
                        var videoId = URI.parseQuery(URI.parse(portfolioLink.value).query).v;
                        $scope.user.portfolioLinks[index].id = videoId;
                    }
                }
            },
            function (error) {
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

        $scope.editMiddleCard = function () {
            $scope.middleCardTemplateUrl = '/partial/adjuncts-profile-middle-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
            $http.post('/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.importLinkedin = function () {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.saveMiddleCard = function () {
            $scope.middleCardTemplateUrl = '/partial/adjuncts-profile-middle-card';
            $http.post('/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.saveBadgeCard = function () {
            $http.post('/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.savePortfolioCard = function () {
            $http.post('/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.saveBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
            $http.post('/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
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
            $scope.frameUrl = "https://www.youtube.com/embed/YKulXXvK2TA";
            $scope.docTitle = "Course Welcome Fall 2012";
            $scope.docDescription = "video description goes here",
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

        function calculateSurvey() {
            $scope.filteredBadges = [];

            $scope.syllabusDesignWidth = $scope.user.survey.syllabusDesign * 20;
            $scope.syllabusDesign = {'width': $scope.syllabusDesignWidth + "%"};

            $scope.technologyDesignWidth = $scope.user.survey.technologyDesign * 20;
            $scope.technologyDesign = {'width': $scope.technologyDesignWidth + "%"};

            $scope.studFeedbackWidth = $scope.user.survey.studFeedback * 20;
            $scope.studFeedback = {'width': $scope.studFeedbackWidth + "%"};

            $scope.sumFeedbackWidth = $scope.user.survey.sumFeedback * 20;
            $scope.sumFeedback = {'width': $scope.sumFeedbackWidth + "%"};

            for (var badge in $scope.user.badges) {
                var val = $scope.user.badges[badge];
                if (val != false) {
                    $scope.filteredBadges.push(val);
                }
            }
        }

        function getUniversityTerm(startMonth, startYear, endDate, isStillHere){
            var universityTermStart;
            var universityTermEnd;
            switch(startMonth){
                case 1:
                case 2:
                    universityTermStart="winter";
                    break;
                case 3:
                case 4:
                case 5:
                    universityTermStart="spring";
                    break;
                case 6:
                case 7:
                case 8:
                    universityTermStart="summer";
                    break;
                case 9 :
                case 10 :
                case 11 :
                case 12 :
                    universityTermStart="fall";
                    break;

            }
            if(!isStillHere){
                switch(endDate.month){
                    case 1:
                    case 2:
                    case 3:
                        universityTermEnd="winter";
                        break;
                    case 4:
                    case 5:
                    case 6:
                        universityTermEnd="spring";
                        break;
                    case 7:
                    case 8:
                        universityTermEnd="summer";
                        break;
                    case 9 :
                    case 10 :
                    case 11 :
                    case 12 :
                        universityTermEnd="fall";
                        break;

                }
            }

            return isStillHere ? universityTermStart +" "+ startYear + " - Present" : universityTermStart +" "+ startYear + " - " + universityTermEnd +" "+ endDate.year ;

        }
    }]);
