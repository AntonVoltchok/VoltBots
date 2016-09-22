var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(3000));
var five = require('johnny-five');

//var board = new five.Board();

/*
 board.on("ready", function() {
 
 var led = new five.Led(11);
 led.pulse();
 // loop pulse 10 secs
 this.wait(10000, function() {
 led.stop().off();
 });
 });
 */


app.use(express.static(__dirname + '/app'));

//Serving the static HTML file
app.get('/', function (res) {
  res.sendFile('/index.html')
});

var board = new five.Board({
  repl: false
});

board.on('ready', function () {
  
  var led = new five.Led(11);
  
  commands = null;
  
  io.on('connection', function (socket) {
    
    socket.on('stop', function () {
      led.stop().off();
    });
    
    socket.on('start', function () {
      led.pulse();
    });
  });
});

