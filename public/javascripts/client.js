var socket = io.connect();

// aキーのkeydownイベントを起こす
// var _e = document.createEvent("KeyboardEvent");
// _e.initKeyEvent("keydown", true, true, null, false, false, false, false, 65, 0);
// document.getElementById("dummy").dispatchEvent(_e);

function fire(key) {
    // クライアントからサーバーへ送信
    socket.emit("clienttoserver", { keydown: key });
}