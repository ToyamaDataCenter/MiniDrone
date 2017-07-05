//// クライアント・サーバー間処理

/* モジュール読み込み */
var EventEmitter = require('events').EventEmitter;
var socketio = require('socket.io');

var PushServer = function () {
    EventEmitter.call(this);
}

PushServer.prototype = Object.create(EventEmitter.prototype);
PushServer.prototype.start = function (http) {
    var THIS = this;
    this.io = socketio.listen(http);
    console.log("Push Server Listen");

    this.io.sockets.on('connection', function (socket) {
        console.log("hogehoge");
        THIS.emit('connection', socket);

    });
}

PushServer.prototype.write = function (eventName, message) {
    this.io.sockets.emit(eventName, message);
}

module.exports.factory = function () {
    return new PushServer();
}