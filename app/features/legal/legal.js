'use strict';


angular
    .module('ngMeetup.legal',[])
    .config(legalConfig)
    .controller('legalCtrl',legalCtrl);

//TODO: inject?
legalConfig.$invoque = ['$stateProvider'];
legalCtrl.$invoque = ['$scope'];

function legalConfig($stateProvider){
    $stateProvider
        .state('legal',{
            url: '/legal',
            templateUrl: 'features/legal/legal.html',
            controller: 'legalCtrl',
            cache: true
        })
}

function legalCtrl($scope){
    $scope.showBackButton(true);
}