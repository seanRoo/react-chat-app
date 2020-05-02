import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import useStyles from "./messageItem.styles";

export const MessageItem = (props) => {
  const classes = useStyles();
  let isAnotherUser = props.user === props.sender ? false : true;
  return (
    <ListItem
      className={classNames(
        classes.listItem,
        classes.listItemContainer,
        isAnotherUser && classes.otherUserListItem
      )}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" />
      </ListItemAvatar>
      <ListItemText
        classes={{
          secondary: classes.secondary,
          primary: classes.primary,
        }}
        primary={props.sender === props.user ? "You" : props.sender}
        secondary={props.message}
      />
    </ListItem>
  );
};
