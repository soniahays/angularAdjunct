'use strict';

/* Directives */

angular.module('adjunct.directives')
    .directive('checkUser', ['$rootScope', '$location', 'Auth', function ($root, $location, Auth) {
        return {
            link: function (scope, elem, attrs, ctrl) {
                $root.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
                    if (currRoute.accessLevel == 'private' && ((typeof globalUser == 'undefined') || globalUser == null)) {
                        //returnTo = currRoute.templateUrl;
                        $location.path('/signin');
                    }
                    /*
                     * IMPORTANT:
                     * It's not difficult to fool the previous control,
                     * so it's really IMPORTANT to repeat the control also in the backend,
                     * before sending back from the server reserved information.
                     */
                });
            }
        }
    }]);