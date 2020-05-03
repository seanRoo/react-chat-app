import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () => ({
    inputStyle: {
      width: "100%",
      //   maxHeight: 100,
    },
    buttonStyle: {
      marginTop: "25px",
    },
    sendMessageContainer: {
      textAlign: "center",
      height: "auto",
      "& .MuiInputBase-root": {
        borderRadius: 25,
      },
    },
    inputDiv: {
      width: "85%",
      display: "inline-block",
      marginRight: "10px",
    },
    sendButtonDiv: {
      width: "10%",
      display: "inline-block",
    },
  }),
  { name: "MessageInput" }
);
