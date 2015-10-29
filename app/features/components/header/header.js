angular
    .module('ngMeetup.components.header', [])
    .directive('header', headerDir);

headerDir.$inject = ['$ionicHistory'];

function headerDir($ionicHistory) {
    return {
        restrict: 'E',
        templateUrl: 'features/components/header/header.html',
        link: function (scope) {
            scope.meetupName = glvar.meetupName;
            scope.goBack = function () {
                $ionicHistory.goBack();
            };
        }
    }
}
