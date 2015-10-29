angular
    .module('ngMeetup.services.meetup', [])
    .factory('muEvents', meetupEvent)
    .factory('muGroup', meetupGroup);

meetupEvent.$inject = ['$http', '$q'];
meetupGroup.$inject = ['$http', '$q'];

function meetupEvent($http, $q) {
    return {
        getEvents: function (page) {
            var dfd = $q.defer();
            $http.get(glvar.baseUrl + 'events/' + page)
                .then(function (data) {
                    dfd.resolve(data.data.results);
                }, function (error) {
                    dfd.resolve(error);
                });

            return dfd.promise;
        },
        getEventByID: function (event_id) {
            var dfd = $q.defer();
            $http.get(glvar.baseUrl + 'event/' + event_id)
                .then(function (data) {
                    dfd.resolve(data.data.results[0]);
                }, function (error) {
                    dfd.resolve(error);
                });

            return dfd.promise;
        }
    };
}

function meetupGroup($http, $q) {
    return {
        getGroup: function () {
            var dfd = $q.defer();
            $http.get(glvar.baseUrl + 'group')
                .then(function (data) {
                    dfd.resolve(data.data.results[0]);
                }, function (error) {
                    dfd.resolve(error);
                });

            return dfd.promise;
        }
    };
}
