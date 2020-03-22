import React from "react";
import { ChatContainer } from "./components/chatContainer.component";
import "./App.css";
import socketIOClient from "socket.io-client";

const App = () => {
  const endpoint =
    process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "/";
  const socket = socketIOClient(endpoint);
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  };

  return (
    <div style={containerStyle}>
      <ChatContainer socket={socket} />
    </div>
  );
};

export default App;
