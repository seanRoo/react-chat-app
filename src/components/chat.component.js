import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { MessageInput } from "./messageInput.component";
import { MessageItem } from "./messageItem.component";

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
export const Chat = () => {
  const [state, setState] = useState({
    listValues: []
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
  const classes = useStyles();
  return (
    <Fragment>
      <div style={divStyle}>
        <List className={classes.root}>
          {state.listValues.map(item => (
            <MessageItem key={item.id} message={item.value}></MessageItem>
          ))}
        </List>
      </div>
      <div style={inputStyle}>
        <MessageInput buttonClick={addItem}></MessageInput>
      </div>
    </Fragment>
  );
};
