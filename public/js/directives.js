'use strict';

/* Directives */
/*
angular.module('adjunct.directives')
    .directive('checkUser', ['$location', 'Auth', function ($location, Auth) {
        return {
            link: function (scope, elem, attrs, ctrl) {
                $root.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
                    if (currRoute.accessLevel == 'private' && !Auth.isLoggedIn) {
                        $location.path('/signin');
                    }
                });
            }
        }
    }]);
*/