import React, { useState } from "react";
import { Chat } from "./chat.component";

export const ChatContainer = props => {
  const divStyle = {
    border: "1px solid black",
    width: "800px",
    height: "800px",
    display: "grid",
    position: "relative",
    gridTemplateRows: "5% 80%"
  };
  const [state, setState] = useState({
    textValues: []
  });
  return (
    <div style={divStyle}>
      Chat Container
      <Chat {...props}></Chat>
    </div>
  );
};
