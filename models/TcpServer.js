//// 体重計送受信処理

/* モジュール読み込み */
var net = require('net');
var EventEmitter = require('events').EventEmitter;

/* 待ち受けサーバー情報 */
var HOST = '192.168.102.147';
var PORT = '7000';
var server;

var TcpServer = function () {
    // EventEmmiterのコンストラクタを呼び出す
    EventEmitter.call(this);
}

TcpServer.prototype = Object.create(EventEmitter.prototype);
TcpServer.prototype.server = net.createServer();

TcpServer.prototype.start = function () {
    this.server.listen(PORT, HOST);
    console.log("TCP Server Listen");
    var THIS = this;

    this.server.on('connection', function (socket) {
        console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);
        socket.on('data', function (data) {
            console.log('DATA: ' + data);
            var strData = data.toString();
            THIS.emit('message', strData);
        })

    })
    this.server.on('listening', function () {
        console.log('proxy application server listen');
    })
    this.server.on('close', function () {
        console.log("outer application is disconnected");
    })
    this.server.on('error', function () {
        console.log("outer application occur error");
    })
}
// var TcpServer = {

//     create: function () {
//         server = net.createServer(this.handler);
//     },
//     handler: function (sock) {
//         console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

//         sock.on('data', function (data) {
//             console.log('DATA: ' + data);

//             sock.write('RECIEVED');
//         })
//     },
//     listen: function () {
//         server.listen(PORT, HOST);
//         console.log('Server listening on ' + HOST + ':' + PORT);
//     }
// }

//module.exports = TcpServer;
module.exports.factory = function () {
    return new TcpServer();
}; 
