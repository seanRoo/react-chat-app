import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  inputStyle: {
    width: "80%",
    maxHeight: 100
  },
  buttonStyle: {
    width: "5%",
    marginLeft: 8,
    marginTop: 12,
    borderRadius: 40
  },
  inputContainer: {
    textAlign: "center",
    paddingBottom: 20,
    height: "auto",
    "& .MuiInputBase-root": {
      borderRadius: 25
    }
  }
});

export const MessageInput = props => {
  const [messageValue, setMessage] = useState();
  const handleClick = () => {
    const message = messageValue;
    clearInputField();
    return props.handleMessage(message, props.user);
  };
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const clearInputField = () => {
    setMessage("");
  };

  const handleKeyPress = event => {
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
    <div className={classes.inputContainer}>
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
      <Button
        type="button"
        onClick={handleClick}
        className={classes.buttonStyle}
        variant="contained"
        color="primary"
        size="small"
        endIcon={<SendIcon />}
        disabled={isInputDisabled()}
      ></Button>
    </div>
  );
};
