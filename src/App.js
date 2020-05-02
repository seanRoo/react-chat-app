import React from "react";
import { ChatContainer } from "./components/ChatComponent/chatContainer.component";
import "./App.css";
import socketIOClient from "socket.io-client";

const App = () => {
  console.log(process.env);
  //const endpoint = "http://localhost:8080/";
  // process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "/";
  const socket = socketIOClient();
  console.log(socket);
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <ChatContainer socket={socket} />
    </div>
  );
};

export default App;
