import React from "react";
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

export const UserNameInput = () => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <TextField
          id="outlined-basic"
          label="Sign in"
          variant="outlined"
          InputProps={{
            classes: {
              root: classes.input
            }
          }}
        />
      </FormControl>
      <Divider />
    </div>
  );
};
