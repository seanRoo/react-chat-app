import React from "react";
import { ChatContainer } from "./components/chatContainer.component";
import "./App.css";
import socketIOClient from "socket.io-client";

const App = () => {
  const state = {
    response: false,
    endpoint: "http://localhost:4000/"
  };

  const { endpoint } = state;
  const socket = socketIOClient(endpoint);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const handleNewMessage = message => {
    socket.emit("new_message", { message: message });
    socket.on("new_message", data => {
      console.log(data);
    });
  };
  return (
    <div style={containerStyle}>
      <ChatContainer
        handleNewMessage={handleNewMessage}
        // handleNewUser
        // handleDisconnect
        // handleTyping
      />
    </div>
  );
};

export default App;
