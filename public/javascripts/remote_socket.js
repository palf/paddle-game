var socket = io.connect();

var on_gesture = function(data) {
  socket.emit('on paddle input', data);
}
