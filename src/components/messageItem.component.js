import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  },
  listItem: {
    overflowX: "auto",
    width: "50%",
    whiteSpace: "normal",
    wordWrap: "break-word"
    // paddingLeft: 60
  },
  secondary: {
    color: "black"
  }
}));

export const MessageItem = props => {
  const classes = useStyles();

  return (
    <div>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          classes={{
            secondary: classes.secondary
          }}
          primary={props.sender}
          secondary={props.message}
        />
      </ListItem>
    </div>
  );
};
