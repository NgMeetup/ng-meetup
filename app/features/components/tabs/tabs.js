angular
    .module('ngMeetup.components.tabs', [])
    .directive('tabs', tabsDir)
    .directive('systemTab', systemTab);

systemTab.$invoque = ['$timeout'];

/**
 * Tabs
 * @returns {{restrict: string, templateUrl: string, link: Function}}
 */

function tabsDir() {
    return {
        restrict: 'E',
        templateUrl: 'features/components/tabs/tabs.html',
        link: function (scope) {
            scope.tabsClass = function () {
                var _class = 'tabs-icon-left';
                if (ionic.Platform.isIOS()) {
                    _class = 'tabs-icon-only';
                }
                return _class;
            };
        }
    }
}
/**
 * Adds a class to the element depending on the platform
 * @returns {{restrict: string, link: Function}}
 */

function systemTab($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var _class = 'has-tabs-top';
            if (ionic.Platform.isIOS()) {
                $timeout(function () {
                    element.removeClass('has-header');
                });
                _class = 'has-tabs';
            }
            element.addClass(_class);
        }
    }
}