'use strict';

angular.module('ngMeetup.services.socket', [])
    .factory('socketService', socketService);

function socketService() {
    var _socket = io('http://127.0.0.1:8000');
    var _token = '';
    return {
        setToken: function (token) {
            _token = token;
            _socket.emit('subscribe', token);
        },
        token : function(){
            return _token;
        },
        socket: _socket
    };
}