const express = require("express");
const app = express();
const port = 4000;
//template engine
// app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));

server = app.listen(port);
const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("New user connected");

  socket.on("new_user", data => {
    socket.username = data.username;
    socket.broadcast.emit("new_user", {
      username: socket.username
    });
  });

  socket.on("new_message", data => {
    io.sockets.emit("new_message", {
      message: data.message,
      username: data.user
    });
  });

  socket.on("disconnect", () => {
    io.sockets.emit("disconnect", {
      username: socket.username
    });
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", {
      username: socket.username,
      message: data.message
    });
  });

  socket.on("tester", data => {
    console.log(data.message);
  });
});
//routes
app.get("/doof", (req, res) => {
  console.log("howya");
  //res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// server = app.listen(3000);
