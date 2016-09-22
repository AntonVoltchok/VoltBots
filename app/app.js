var socket = io();

function startPulse(){
  socket.emit('start');
}

function stop(){
  socket.emit('stop');
}

document.getElementById('pulse').onclick = startPulse;
document.getElementById('stop').onclick = stop;