import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    inline: {
      display: "inline",
    },
    userJoinedDiv: {
      textAlign: "center",
    },
    containerDivStyle: {
      overflowY: "scroll",
      paddingBottom: 30,
    },
  }),
  { name: "ChatComponent" }
);
