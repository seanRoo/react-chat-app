import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () => ({
    inputStyle: {
      width: "80%",
      maxHeight: 100,
    },
    buttonStyle: {
      width: "5%",
      marginLeft: 8,
      marginTop: 12,
      borderRadius: 40,
    },
    inputContainer: {
      textAlign: "center",
      paddingBottom: 20,
      height: "auto",
      "& .MuiInputBase-root": {
        borderRadius: 25,
      },
    },
  }),
  { name: "MessageInput" }
);
