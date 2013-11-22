'use strict';

/* Directives */

angular.module('adjunct.directives')
    .directive('ngBindHtmlUnsafe', ['$sce', function ($sce) {
        return {
            scope: {
                ngBindHtmlUnsafe: '='
            },
            template: "<div ng-bind-html='trustedHtml'></div>",
            link: function ($scope, iElm, iAttrs, controller) {
                $scope.updateView = function () {
                    $scope.trustedHtml = $sce.trustAsHtml($scope.ngBindHtmlUnsafe);
                }

                $scope.$watch('ngBindHtmlUnsafe', function (newVal, oldVal) {
                    $scope.updateView(newVal);
                });
            }
        };
    }]);
;
