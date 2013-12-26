'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', '$q', function ($scope, $http, $cookies, $q) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
        $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
        $scope.middleCardTemplateUrl = '/partial/adjuncts-profile-middle-card';
        $scope.canEdit = $cookies._id && !userId;

        var adjunctProfile = $http.get('/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id));
        var countries = $http.get('/api/countries');
        var linkedinData = $http.get('/api/getLinkedinData');

        $q.all([adjunctProfile, countries, linkedinData]).then(function (values) {
                $scope.user = values[0].data;
                $scope.countries = values[1].data;
                var linkedinData = values[2].data;

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

                if ($scope.user.expertiseTags.length == 0 && linkedinData.skills) {
                    var skills = _.pluck(_.pluck(linkedinData.skills.values, 'skill'), 'name');
                    console.log(skills);
                    $scope.user.expertiseTags = skills;
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
            window.location.replace("http://localhost:3000/api/linkedInAuth");
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
            console.log("from addPortfolioLink", $scope.user.portfolioLinks);
            $scope.user.portfolioLinks.push({type: 'video', value: ''});
        }

        $scope.addPortfolioUpload = function () {
            console.log("from addPortfolioUpload", $scope.user.portfolioLinks);
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
            console.log("from open upload portfolio")
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
    }]);
