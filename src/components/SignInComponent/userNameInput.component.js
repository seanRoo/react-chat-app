import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import LensIcon from "@material-ui/icons/Lens";
import { isMobileDevice } from "../../helperFunctions";
import useStyles from "./userNameInput.styles";

export const UserNameInput = (props) => {
  const [state, setState] = useState({
    nameValue: "",
    isDisabled: false,
  });
  const classes = useStyles();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const username = state.nameValue;
      setState({
        ...state,
        isDisabled: true,
      });
      return props.handleSignIn(username);
    }
  };

  const handleChange = (event) => {
    setState({
      ...state,
      nameValue: event.target.value,
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
          InputLabelProps={{ className: classes.inputLabel }}
        />
      </FormControl>
      <div
        className={
          isMobileDevice
            ? classes.onlineUserDivMobile
            : classes.onlineUserDivDesktop
        }
      >
        <div className={classes.onlineUserTextContainer}>
          <LensIcon className={classes.icon} fontSize={"small"} />
          Online Users: {props.clientCount}
        </div>
      </div>
      <Divider />
    </div>
  );
};
