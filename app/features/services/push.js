angular
    .module('ngMeetup.services.push', [])
    .factory('pushService', pushService);

pushService.$inject = ['$http', '$q', '$ionicPopup', '$localStorage'];

function pushService($http, $q, $ionicPopup, $localStorage) {
    return {
        registerDevice: function (regid) {
            var dfd = $q.defer();

            $http
                .post(glvar.baseUrl + 'push/add', {regid: regid})
                .then(function () {
                    dfd.resolve({error: false});
                }, function () {
                    $ionicPopup.alert({
                        title: 'Ups!',
                        template: 'There was a problem registering your device in order to receive push notificacions'
                    });
                    dfd.resolve({error: true});
                });

            return dfd.promise;
        },
        saveRegid: function (regid) {
            $localStorage.regid = regid;
        },
        getRegid: function () {
            return $localStorage.regid;
        }
    }
}