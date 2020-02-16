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
    width: "100%",
    whiteSpace: "normal",
    wordWrap: "break-word"
  },
  secondary: {
    color: "black"
  }
}));

export const MessageItem = props => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" />
      </ListItemAvatar>
      <ListItemText
        classes={{
          secondary: classes.secondary
        }}
        primary={"Sean"}
        secondary={props.message}
      />
    </ListItem>
  );
};
