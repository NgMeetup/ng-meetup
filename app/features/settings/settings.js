'use strict';

angular
    .module('ngMeetup.settings', [])
    .config(settingsConfig)
    .controller('settingsCtrl', settingsCtrl);

//TODO: inject??

function settingsConfig($stateProvider) {
    $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'features/settings/settings.html',
            controller: 'settingsCtrl',
            cache: true
        })
}

function settingsCtrl($scope, $localStorage, $interval,$log) {
    $scope.$on('$ionicView.enter', function () {
        $scope.showBackButton(true);
    });

    $scope.settings = {
        imagesAutodownload:'false',
        allowPushNotifications:'false'
    };


    if (angular.isDefined($localStorage.settings)) {
        $scope.settings = $localStorage.settings;
    } else {
        $localStorage.settings = $scope.settings;
    }

    $scope.saveOption = function(){
        $log.warn($scope.settings.imagesAutodownload);
        $localStorage.settings = $scope.settings;
    };

}

