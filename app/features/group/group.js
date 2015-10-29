'use strict';

angular
    .module('ngMeetup.group', [])
    .config(groupConfig)
    .controller('groupCtrl', groupCtrl);

groupConfig.$invoque = ['$stateProvider'];
groupCtrl.$invoque = ['group', '$scope'];

function groupConfig($stateProvider) {
    $stateProvider
        .state('group', {
            url: '/group',
            templateUrl: 'features/group/group.html',
            controller: 'groupCtrl',
            cache: true,
            resolve: {
                group: function (muGroup) {
                    return muGroup.getGroup();
                }
            }
        })
}

function groupCtrl(group, $scope) {
    $scope.group = group;
    $scope.showBackButton(false);
}