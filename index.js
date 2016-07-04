var app = require('./server');
var app = require('http').Server(app);
var io = require('socket.io')(app);
var path = require('path');
var nconf = require('./server/environment.js');

var port = nconf.get('PORT');

var i = 0;

// set up socket.io
io.on('connection', function(socket){
  socket.on('chat message',function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', {message: msg, id: i++});
  });
});

// start server
app.listen(port, function(){
  console.log(`server is now listening on port ${port}`);
});
