const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

//middleware
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let chatUsers = [];
const server = app.listen(port);
const io = require("socket.io")(server);
io.on("connection", socket => {
  console.log("New user connected");
  socket.on("new_user", data => {
    chatUsers.push(data.username);
    console.log(chatUsers);
    io.sockets.emit("new_user", {
      username: data.username,
      users: chatUsers
    });
  });

  socket.on("new_message", data => {
    socket.broadcast.emit("new_message", {
      message: data.message,
      username: data.user
    });
  });

  socket.on("user_disconnected", data => {
    let disconnectedUser = chatUsers.indexOf(data.username);
    chatUsers.splice(disconnectedUser, 1);
    socket.broadcast.emit("user_disconnected", {
      disconnectedUser: data.username,
      users: chatUsers
    });
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", {
      username: socket.username,
      message: data.message
    });
  });
});
