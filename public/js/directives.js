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
    }]).directive('ngEnter',function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }).directive('pwCheck', [function () {
        return { require: 'ngModel', link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        } }
    }]).directive("passwordValidate",function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {

                    scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                    scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                    scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;


                    if (scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                        ctrl.$setValidity('pwd', true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity('pwd', false);
                        return undefined;
                    }

                });
            }
        };
    }).directive('checkStrength',function () {

        return {
            replace: false,
            link: function (scope, iElement, iAttrs) {
                var strength = {
                    colors: ['#DDD', '#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                    mesureStrength: function (p) {

                        if (!p) {
                            return 0;
                        }

                        var _force = 0;
                        var _regex = /[$-/:-?{-~!"^_`\[\]]/g;

                        var _lowerLetters = /[a-z]+/.test(p);
                        var _upperLetters = /[A-Z]+/.test(p);
                        var _numbers = /[0-9]+/.test(p);
                        var _symbols = _regex.test(p);

                        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                        var _passedMatches = $.grep(_flags,function (el) {
                            return el === true;
                        }).length;

                        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                        _force += _passedMatches * 10;

                        // penality (short password)
                        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                        // penality (poor variety of characters)
                        _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                        _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
                        _force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

                        return _force;

                    },
                    getColor: function (s) {
                        var idx = 0;
                        if (s > 0) {
                            if (s <= 10) {
                                idx = 1;
                            }
                            else if (s <= 20) {
                                idx = 2;
                            }
                            else if (s <= 30) {
                                idx = 3;
                            }
                            else if (s <= 40) {
                                idx = 4;
                            }
                            else {
                                idx = 5;
                            }
                        }

                        return { idx: idx + 1, col: this.colors[idx] };

                    }
                };

                scope.$watch(iAttrs.checkStrength, function () {
                    var c = strength.getColor(strength.mesureStrength(scope.password));

                    iElement.css({ "display": "block"});
                    iElement.children('li')
                        .css({ "background": "#DDD" })
                        .slice(0, c.idx)
                        .css({ "background": c.col });

                    switch (c.idx) {
                        case 1:
                            scope.strength = "";
                            break;
                        case 2:
                            scope.strength = "Weak";
                            break;
                        case 3:
                            scope.strength = "Weak";
                            break;
                        case 4:
                            scope.strength = "Fair";
                            break;
                        case 5:
                            scope.strength = "Good";
                            break;
                        case 6:
                            scope.strength = "Excellent";
                            break;
                        default:
                            scope.strength = "";
                    }

                    if (!scope.password || scope.password.length > 0 && scope.password.length <= 6) {
                        scope.strength = "Too short";
                    }
                });

            },
            template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
        };

    }).directive('customBindHtml', ['$compile', function ($compile) {
        return {
            link: function (scope, element, attr) {
                scope.$watch(attr.customBindHtml, function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                });
            }
        };
    }]).directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    // this next if is necessary for when using ng-required on your input.
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    if (inputValue == undefined) return ''
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    }).directive('documentClick', ['$document', function($document) {
        return {
            link : function(scope, element, attrs) {
                $document.on('click', function (e) {
                    $('[bs-popover]').each(function () {
                        if (!$(".popover").is(e.target) && $(".popover").has(e.target).length === 0 && !$(".popoverButton").is(e.target) && $(".popover").length > 0) {
                            $("[bs-popover]").click();
                        }
                    });
                });
            }
        }
    }]).directive('progressBar',function () {
        return {
            restrict: 'EA',
            link: function (scope, iElement, iAttrs) {

                var strength = {
                    colors :['#CAD2d7','#d6EEFB','#36ABEB','#103346','#1D3283'],
                    getColor: function(newVal){
                        var idx = 0;
                        if(newVal>0){
                            if(newVal <= 10){
                                idx = 1;
                            }
                            else if(newVal <= 20){
                                idx = 2;
                            }
                            else if(newVal <= 30){
                                idx = 3;
                            }
                            else if(newVal <= 40){
                                idx = 3;
                            }
                            else if(newVal <= 100){
                                idx = 5;
                            }
                        }
                        return{idx : idx+1, col: this.colors[idx]};
                    }
                };
                        scope.$watch("pbProgress", function (newVal, oldVal) {
                            var c = strength.getColor(newVal);

                    iElement.find('.progress-bar').css({ "width": newVal + "%","background-color": c.col});

                    if (newVal) {
                        iElement.find('.percentage-title-badge-section').text(newVal + "%");
                    }
                    else {
                        iElement.find('.percentage-title-badge-section').text("0%");
                    }
                });
            },
            scope: {
               "class": "@",
               pbProgress:"=",
               pbTitle:"@"
            },
            template: '<div class="list-group-item-custom list-group-item-customize-left list-item-badge-section">' +
                '<div class="competency-title-badge-section">{{pbTitle}}</div>' +
                '<div class="percentage-title-badge-section"></div>' +
                '<div class="progress progress-custom progress-custom-badge-section">' +
                '<div class="progress-bar progress-bar-custom {{class}}" role="progressbar"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" />' +
                '</div>' +
                '</div>'
        }
    });