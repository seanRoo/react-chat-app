import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { MessageInput } from "./messageInput.component";
import { MessageItem } from "./messageItem.component";

//TODO
// handleNewUser
// handleDisconnect
// handleTyping

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  inline: {
    display: "inline"
  },
  userJoinedDiv: {
    textAlign: "center"
  }
}));
const inputStyle = {
  alignSelf: "flex-end",
  width: "100%",
  position: "absolute"
};
const divStyle = {
  overflowY: "auto"
};

export const Chat = props => {
  const [state, setState] = useState({
    listValues: []
  });
  props.socket.on("new_message", data => {
    addItem(data.message);
  });
  const addItem = message => {
    setState({
      listValues: [
        ...state.listValues,
        {
          id: state.listValues.length,
          value: message
        }
      ]
    });
  };
  const handleNewMessage = message => {
    props.socket.emit("new_message", { message: message });
  };

  window.onbeforeunload = () => {
    props.socket.emit("disconnect");
  };

  props.socket.on("disconnect", data => {
    if (data.username) {
      console.log(`${data.username} disconnected`);
    }
    console.log("Well god damn someone done disconnected!");
  });

  const classes = useStyles();
  return (
    <Fragment>
      <div style={divStyle}>
        {props.user ? (
          <div
            className={classes.userJoinedDiv}
            hidden={props.user ? false : true}
          >
            <strong>
              <i>{props.user} joined the chat</i>
            </strong>
          </div>
        ) : null}
        <List className={classes.root}>
          {state.listValues.map(item => (
            <MessageItem
              key={item.id}
              message={item.value}
              user={props.user}
            ></MessageItem>
          ))}
        </List>
      </div>
      <div style={inputStyle}>
        <MessageInput
          handleMessage={handleNewMessage}
          user={props.user}
        ></MessageInput>
      </div>
    </Fragment>
  );
};
