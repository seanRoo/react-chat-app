import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline'
  },
  listItem: {
    overflowX: 'auto',
    width: 'fit-content',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    marginLeft: 25,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 50,
    color:'blue'
  },
  secondary: {
    color: 'black',
    fontSize: 24,
  },
  otherUserListItem:{
    marginRight:25,
    float: 'right',
    color: 'green'
  },
  listItemContainer:{
    display: 'block',
    clear:'both'
  }
}));

export const MessageItem = props => {
  const classes = useStyles();
  let isAnotherUser = props.user === props.sender? false: true;
  return (
    <div className={classes.listItemContainer}>
      <ListItem className={classNames(
        classes.listItem,
        isAnotherUser && classes.otherUserListItem
        )} alignItems="flex-start">
        <ListItemAvatar>
          <button style={{border: 'none', cursor:'pointer'}}>
          <Avatar alt="Remy Sharp" />
          </button>
        </ListItemAvatar>
        <ListItemText
          classes={{
            secondary: classes.secondary
          }}
          primary={props.sender === props.user ? 'You' : props.sender}
          secondary={props.message}
        />
      </ListItem>
    </div>
  );
};
