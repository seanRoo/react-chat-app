import React, { Fragment } from "react";
import { ChatContainer } from "./components/chatContainer.component";
import "./App.css";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={containerStyle}>
      <ChatContainer />
    </div>
  );
}

export default App;
