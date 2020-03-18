import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { MessageInput } from './messageInput.component';
import { MessageItem } from './messageItem.component';

//TODO
// handleTyping

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight:600,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  inline: {
    display: 'inline'
  },
  userJoinedDiv: {
    textAlign: 'center'
  }
}));
const inputStyle = {
  alignSelf: 'flex-end',
  width: '100%',
  maxHeight: 80
};
const divStyle = {
  overflowY: 'auto'
};

export const Chat = props => {
  const [state, setState] = useState({
    listValues: [],
    users: []
  });
  props.socket.on('new_message', data => {
    addItem(data.message, data.username);
  });
  const addItem = (message, user) => {
    setState({
      listValues: [
        ...state.listValues,
        {
          user: user,
          id: state.listValues.length,
          value: message
        }
      ],
      users: state.users
    });
  };
  const handleNewMessage = (message, user) => {
    addItem(message, user);
    props.socket.emit('new_message', {
      user: user,
      message: message
    });
  };

  // window.onbeforeunload = () => {
  //   props.socket.emit('disconnect');
  // };

  // props.socket.on('disconnect', data => {
  //   if (data.username) {
  //     console.log(`${data.username} disconnected`);
  //   }
  //   console.log('Well god damn someone done disconnected!');
  // });

  props.socket.on('new_user', data => {
    setState({
      listValues: state.listValues,
      users: [
        ...state.users,
        {
          user: data.username === props.user ? 'You' : data.username
        }
      ]
    });
  });

  const classes = useStyles();
  return (
    <Fragment>
      <div style={divStyle}>
        <div className={classes.userJoinedDiv}>
          <strong>
            <ul style={{ listStyle: 'none' }}>
              {state.users.map(item => (
                <li>
                  <i>{item.user} joined the chat!</i>
                </li>
              ))}
            </ul>
          </strong>
        </div>
        <List className={classes.root}>
          {state.listValues.map(item => (
            <MessageItem
              key={item.id}
              message={item.value}
              sender={item.user}
              user={props.user}
            ></MessageItem>
          ))}
        </List>
      </div>
      <div style={inputStyle}>
        <MessageInput
          handleMessage={handleNewMessage}
          user={props.user}
        ></MessageInput>
      </div>
    </Fragment>
  );
};
