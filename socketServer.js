const express = require('express');
const app = express();
const port = process.env.PORT||8080;
const path = require('path');

//middleware
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server = app.listen(port);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('New user connected');

  socket.on('new_user', data => {
    io.sockets.emit('new_user', {
      username: data.username
    });
  });

  socket.on('new_message', data => {
    socket.broadcast.emit('new_message', {
      message: data.message,
      username: data.user
    });
  });

  socket.on('disconnect', () => {
    io.sockets.emit('disconnect', {
      username: socket.username
    });
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', {
      username: socket.username,
      message: data.message
    });
  });

  socket.on('tester', data => {
    console.log(data.message);
  });
});
//routes
app.get('/doof', (req, res) => {
  console.log('howya');
  //res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// server = app.listen(3000);
