import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    "& .MuiInputBase-root": {
      borderRadius: "25px"
    }
  }
}));

export const UserNameInput = props => {
  const [state, setState] = useState({
    nameValue: "",
    isDisabled: false
  });
  const classes = useStyles();

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const username = state.nameValue;
      setState({
        ...state,
        isDisabled: true
      });
      return props.handleSignIn(username);
    }
  };

  const handleChange = event => {
    setState({
      ...state,
      nameValue: event.target.value
    });
  };
  return (
    <div>
      <FormControl className={classes.root}>
        <TextField
          id="outlined-basic"
          label={state.isDisabled ? "" : "Sign in"}
          variant="outlined"
          value={state.nameValue}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          disabled={state.isDisabled}
        />
      </FormControl>
      <Divider />
    </div>
  );
};
