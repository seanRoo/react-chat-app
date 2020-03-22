import React, { useState } from "react";
import { Chat } from "./chat.component";
import { UserNameInput } from "./userNameInput.component";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { MessageInput } from "./messageInput.component";
import { isMobileDevice } from "../helperFunctions";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ChatContainer = props => {
  const divStyle = {
    border: "1px solid black",
    width: 800,
    overflow: "auto",
    display: "grid",
    position: "relative",
    gridTemplateRows: "10% 80%",
    borderRadius: "25px",
    minHeight: "100%",
    marginBottom: 25,
    marginTop: 25
  };
  const mobileDivStyle = {
    border: "1px solid black",
    width: "100%",
    overflow: "auto",
    display: "grid",
    position: "relative",
    gridTemplateRows: "10% 80%",
    borderRadius: "25px",
    minHeight: "100%"
  };
  const inputStyle = {
    alignSelf: "flex-end",
    width: "100%",
    maxHeight: 80
  };

  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    listValues: [],
    users: []
  });
  const handleSignIn = username => {
    setUser(username);
    setOpen(true);
    props.socket.emit("new_user", { username: username });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleNewMessage = (message, user) => {
    addItem(message, user);
    props.socket.emit("new_message", {
      user: user,
      message: message
    });
  };

  const addItem = (message, user) => {
    setState({
      listValues: [
        ...state.listValues,
        {
          user: user,
          id: state.listValues.length,
          value: message
        }
      ],
      users: state.users
    });
  };
  props.socket.on("new_message", data => {
    addItem(data.message, data.username);
  });
  props.socket.on("new_user", data => {
    setState({
      listValues: state.listValues,
      users: [...data.users]
    });
  });
  props.socket.on("user_disconnected", data => {
    setState({
      listValues: state.listValues,
      users: [...data.users]
    });
  });
  return (
    <div style={isMobileDevice ? mobileDivStyle : divStyle}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Signed in as {user}!
        </Alert>
      </Snackbar>
      <UserNameInput
        handleSignIn={handleSignIn}
        clientCount={state.users.length}
        {...props}
      />
      <Chat {...props} user={user} state={state} />
      <div style={inputStyle}>
        <MessageInput
          handleMessage={handleNewMessage}
          user={user}
        ></MessageInput>
      </div>
    </div>
  );
};
