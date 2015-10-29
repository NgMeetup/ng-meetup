'use strict';

angular
    .module('ngMeetup', [
        'ionic',
        'ngCordova',
        'ngStorage',
        'ui.router',
        'ngMap',
        'ngMeetup.components.header',
        'ngMeetup.components.tabs',
        'ngMeetup.services.socket',
        'ngMeetup.services.meetup',
        'ngMeetup.services.push',
        'ngMeetup.events-list',
        'ngMeetup.event',
        'ngMeetup.group',
        'ngMeetup.settings',
        'ngMeetup.legal',
        'ngMeetup.loading'
    ])
    .config(ngConfig)
    .run(ngRun);

ngConfig.$inject = ['$urlRouterProvider', '$compileProvider'];
ngRun.$inject = ['$rootScope', '$ionicLoading', 'pushService', '$log', '$ionicPopup', '$cordovaPush'];

function ngConfig($urlRouterProvider, $compileProvider) {
    $urlRouterProvider.otherwise('/group');
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|market|chrome-extension):/);
}

function ngRun($rootScope, $ionicLoading, pushService, $log, $ionicPopup, $cordovaPush) {
    $rootScope.$on('$stateChangeStart', function () {
        $ionicLoading.show({
            templateUrl: 'features/components/loading/loading.html'
        });
    });

    $rootScope.$on('$stateChangeSuccess', function () {
        $ionicLoading.hide();
    });

    $rootScope.showBackButton = function (bool) {
        $rootScope.showBackBtn = bool;
    };

    $rootScope.openLink = function(url){
        window.open(url, '_blank');
    };
}