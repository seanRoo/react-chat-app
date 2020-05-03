import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./messageInput.styles";
import IconButton from "@material-ui/core/IconButton";

export const MessageInput = (props) => {
  const [messageValue, setMessage] = useState();
  const handleClick = () => {
    const message = messageValue;
    clearInputField();
    return props.handleMessage(message, props.user);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const clearInputField = () => {
    setMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleClick();
    }
  };
  const isInputDisabled = () => {
    if (messageValue === undefined || messageValue === "") {
      return true;
    }
    return false;
  };
  const classes = useStyles();
  return (
    <div className={classes.sendMessageContainer}>
      <div className={classes.inputDiv}>
        <TextField
          className={classes.inputStyle}
          id="outlined-textarea"
          placeholder={
            props.user ? "Start typing.." : "Sign in to start chatting"
          }
          multiline
          variant="outlined"
          onChange={handleChange}
          value={messageValue}
          onKeyPress={handleKeyPress}
          autoFocus
          disabled={props.user ? false : true}
        />
      </div>
      <div className={classes.sendButtonDiv}>
        {/* <Button
          type="button"
          onClick={handleClick}
          className={classes.buttonStyle}
          variant="contained"
          color="primary"
          size="small"
          endIcon={<SendIcon />}
          disabled={isInputDisabled()}
        ></Button> */}
        <IconButton
          type="button"
          onClick={handleClick}
          className={classes.buttonStyle}
          variant="contained"
          color="primary"
          size="small"
          disabled={isInputDisabled()}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};
