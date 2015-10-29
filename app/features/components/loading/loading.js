'use strict';

angular
    .module('ngMeetup.loading', [])
    .controller('LoadingCtrl', loadingCtrl);

loadingCtrl.$invoque = ['$scope,$state'];

function loadingCtrl($scope) {

            $scope.message = 'Loading...';

}