import React, { useState } from "react";
import { Chat } from "./chat.component";
import { UserNameInput } from "./userNameInput.component";

export const ChatContainer = props => {
  const divStyle = {
    border: "1px solid black",
    width: "800px",
    height: "800px",
    display: "grid",
    position: "relative",
    gridTemplateRows: "10% 80%",
    borderRadius: "25px"
  };
  return (
    <div style={divStyle}>
      <UserNameInput />
      <Chat {...props} />
    </div>
  );
};
