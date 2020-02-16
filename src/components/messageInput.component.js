import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import MessageItem from "./messageItem.component";

export const MessageInput = props => {
  const inputStyle = {
    width: "90%"
  };
  const buttonStyle = {
    width: "5%",
    marginLeft: "8px",
    marginTop: "12px"
  };
  const [messageValue, setMessage] = useState();
  const handleClick = () => {
    const message = messageValue;
    clearInputField();
    return props.handleMessage(message);
  };
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const clearInputField = () => {
    setMessage("");
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <TextField
        style={inputStyle}
        id="outlined-textarea"
        placeholder="Placeholder"
        multiline
        variant="outlined"
        onChange={handleChange}
        value={messageValue}
        onKeyPress={handleKeyPress}
      />
      <Button
        type="button"
        onClick={handleClick}
        style={buttonStyle}
        variant="contained"
        color="primary"
        size="small"
        endIcon={<SendIcon />}
      ></Button>
    </div>
  );
};
