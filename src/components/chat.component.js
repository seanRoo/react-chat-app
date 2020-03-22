import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { MessageItem } from "./messageItem.component";

//TODO
// handleTyping

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 600,
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
const divStyle = {
  overflowY: "auto"
};

export const Chat = props => {
  window.onbeforeunload = () => {
    props.socket.emit("user_disconnected", { username: props.user });
  };

  const classes = useStyles();
  return (
    <>
      <div style={divStyle}>
        <div className={classes.userJoinedDiv}>
          <strong>
            <ul style={{ listStyle: "none" }}>
              {props.state.users.map(item => (
                <li>
                  <i>
                    {item == props.user ? "You" : item}
                    joined the chat!
                  </i>
                </li>
              ))}
            </ul>
          </strong>
        </div>
        <List className={classes.root}>
          {props.state.listValues.map(item => (
            <MessageItem
              key={item.id}
              message={item.value}
              sender={item.user}
              user={props.user}
            ></MessageItem>
          ))}
        </List>
      </div>
    </>
  );
};
