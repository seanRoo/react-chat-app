import React, { useRef, useEffect } from "react";
import List from "@material-ui/core/List";
import { MessageItem } from "../SendMessageComponent/messageItem.component";
import useStyles from "./chatComponent.styles";

//TODO
// handleTyping

export const Chat = (props) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(scrollToBottom, [props.state.listValues]);
  window.onbeforeunload = () => {
    props.socket.emit("user_disconnected", { username: props.user });
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.containerDivStyle}>
        <div className={classes.userJoinedDiv}>
          <strong>
            <ul style={{ listStyle: "none" }}>
              {props.state.users.map((item) => (
                <li key={`newUser-${item}`}>
                  <i>
                    {item === props.user ? "You " : `${item} `}
                    joined the chat!
                  </i>
                </li>
              ))}
            </ul>
          </strong>
        </div>
        <List className={classes.root}>
          {props.state.listValues.map((item) => (
            <MessageItem
              key={item.id}
              message={item.value}
              sender={item.user}
              user={props.user}
            ></MessageItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </div>
    </>
  );
};
