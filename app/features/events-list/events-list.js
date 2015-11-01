'use strict';

angular
    .module('ngMeetup.events-list', [])
    .config(eventConfig)
    .controller('eventsListCtrl', eventsListCtrl);

eventConfig.$invoque = ['$stateProvider'];
eventsListCtrl.$invoque = ['events', '$scope', '$state', '$filter'];

function eventConfig($stateProvider) {
    $stateProvider
        .state('events-list', {
            url: '/events',
            templateUrl: 'features/events-list/events-list.html',
            controller: 'eventsListCtrl',
            cache: false,
            resolve: {
                events: function (muEvents) {
                    return muEvents.getEvents();
                }
            }
        })
}

//TODO: lo suyo aquí sería que refreshEvents borrase el cache solo de esta vista al mandar recargar y
// dejar activado el cache en el stateProvider. Lo dejo como TODO


function eventsListCtrl(events, $scope, $state, $filter) {
    $scope.upcoming = $filter('filter')(events, {status: 'upcoming'});
    $scope.past = $filter('filter')(events, {status: 'past'});

    $scope.showBackButton(false);

    $scope.refreshEvents = function () {

        $state.go($state.current, {}, {reload: true});
        //tell $ionicLoading to stop
        $scope.$broadcast('scroll.refreshComplete');
    };
}