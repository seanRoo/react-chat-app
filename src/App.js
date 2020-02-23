import React, { useState } from "react";
import { ChatContainer } from "./components/chatContainer.component";
import "./App.css";
import socketIOClient from "socket.io-client";

const App = () => {
  const endpoint = "http://localhost:4000/";
  const socket = socketIOClient(endpoint);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>
      <ChatContainer socket={socket} />
    </div>
  );
};

export default App;
