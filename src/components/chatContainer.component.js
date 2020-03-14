import React, { useState } from 'react';
import { Chat } from './chat.component';
import { UserNameInput } from './userNameInput.component';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ChatContainer = props => {
  const divStyle = {
    border: '1px solid black',
    width: '800px',
    height: '800px',
    display: 'grid',
    position: 'relative',
    gridTemplateRows: '10% 80%',
    borderRadius: '25px'
  };

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  }));

  const [user, setUser] = useState();
  const [open, setOpen] = React.useState(false);
  const handleSignIn = username => {
    setUser(username);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={divStyle}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Signed in as {user}!
        </Alert>
      </Snackbar>
      <UserNameInput handleSignIn={handleSignIn} />
      <Chat {...props} user={user} />
    </div>
  );
};
