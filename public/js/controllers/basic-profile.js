'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        $http.get('/api/countries').success(function(response) {
            angular.extend($scope.countrySelectOptions.data, response);
        });

        $http.get('/api/edDegrees').success(function(response) {
            angular.extend($scope.educationDegreeSelectOptions.data, response);
        });

        $scope.countrySelectOptions = {
            data: []
        };

        $scope.educationDegreeSelectOptions = {
            data: []
        };

        var getInstitutions = function (queryParams) {
            return $http.post('/api/institutions', queryParams.data).success(queryParams.success);
        }

        $scope.institutionSelectOptions = {
            minimumInputLength: 4,
            ajax: {
                data: function (term, page) {
                    return {
                        query: term
                    };
                },
                quietMillis: 600,
                transport: getInstitutions,
                results: function (response, page) {
                    return {
                        results: response
                    };
                }
            }
        };

        var getSpecialties = function (queryParams) {
            return $http.post('/api/fieldGroups', queryParams.data).success(queryParams.success);
        }

        $scope.specialtySelectOptions = {
            minimumInputLength: 1,
            ajax: {
                data: function (term, page) {
                    return {
                        query: term
                    };
                },
                quietMillis: 500,
                transport: getSpecialties,
                results: function (response, page) {
                    return {
                        results: response
                    };
                }
            }
        };

        $scope.manuallyCreateProf = function () {
            angular.extend($scope.user, $rootScope.user);
            $scope.user.educationDegree = $scope.user.educationDegree.id;
            $scope.user.country = $scope.user.country.id;
            $scope.user.field = $scope.user.field.id;
            $scope.user.institution = $scope.user.institution.id;
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function () {
                window.location.replace(window.location.origin + "/profile");
                //$http.post('/api/signin', JSON.stringify({'email': $scope.user.email, 'password': $scope.user.password}));
            });
        }
    }]);




