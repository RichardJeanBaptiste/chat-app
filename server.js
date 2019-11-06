const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.port || 3000;


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', function(socket){
    // send messages to chat
   socket.on('chat message', function(msg){
        io.emit('chat message', msg);
   });
   // send message when user connects
   io.on('connection', function(socket){
        io.emit('connected', 'user connected');
   });

  });

http.listen(port, () => {console.log("listening on port 3000")});