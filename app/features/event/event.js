'use strict';

angular
    .module('ngMeetup.event', [])
    .config(eventsConfig)
    .controller('eventCtrl', eventCtrl);

eventsConfig.$invoque = ['$stateProvider'];
eventCtrl.$invoque = ['event', '$scope'];

function eventsConfig($stateProvider) {
    $stateProvider
        .state('event', {
            url: '/event/:event_id',
            templateUrl: 'features/event/event.html',
            controller: 'eventCtrl',
            resolve: {
                event: function ($stateParams, muEvents) {
                    return muEvents.getEventByID($stateParams.event_id);
                }
            }
        })
}

function eventCtrl(event, $scope) {
    $scope.event = event;
    $scope.showBackButton(true);
    $scope.mapIcon = glvar.mapIcon;

    $scope.float = function (num) {
        return parseInt(num * 100) / 100;
    };

    $scope.openMap = function (event) {
        var coor = event.venue.lat + ',' + event.venue.lon;
        var url = 'https://www.google.com/maps/place/' + coor + '/' + coor;
        window.open(url, '_system');
    };


    /*
    * FORCE LINKS FROM EVENT TO OPEN IN POPUP
     */
    $('.container').on('click', 'a', function (e) {
        e.preventDefault();
        $scope.openLink($(this).attr('href'));
    });

    $scope.$on('$ionicView.leave', function () {
        $(document).unbind("click");
    });


}