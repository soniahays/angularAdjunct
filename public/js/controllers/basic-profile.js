'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        $http.get('/api/countries').success(function(response) {
            angular.extend($scope.countrySelectOptions.data, response);
        });

        $scope.countrySelectOptions = {
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
            minimumInputLength: 2   ,
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
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function () {
                window.location.replace(window.location.origin + "/profile");
                //$http.post('/api/signin', JSON.stringify({'email': $scope.user.email, 'password': $scope.user.password}));
            });
        }
    }]);




