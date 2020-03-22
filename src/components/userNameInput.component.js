import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import LensIcon from "@material-ui/icons/Lens";
import { isMobileDevice } from "../helperFunctions";

const useStyles = makeStyles(theme => ({
  desktop: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    "& .MuiInputBase-root": {
      borderRadius: "25px"
    }
  },
  mobile: {
    "& > *": {
      margin: theme.spacing(1),
      width: "65%"
    },
    "& .MuiInputBase-root": {
      borderRadius: "25px"
    }
  },
  onlineUserDivMobile: {
    width: "fit-content",
    float: "right",
    marginRight: "5%",
    marginTop: "9%",
    display: "flex"
  },
  onlineUserDivDesktop: {
    width: "fit-content",
    float: "right",
    marginRight: 60,
    marginTop: 40,
    display: "flex"
  },
  icon: {
    color: "limegreen",
    paddingRight: 5
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
      <FormControl
        className={isMobileDevice ? classes.mobile : classes.desktop}
      >
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
      <div
        className={
          isMobileDevice
            ? classes.onlineUserDivMobile
            : classes.onlineUserDivDesktop
        }
      >
        <LensIcon className={classes.icon} fontSize={"small"} />
        <span>Online Users: {props.clientCount}</span>
      </div>
      <Divider />
    </div>
  );
};
