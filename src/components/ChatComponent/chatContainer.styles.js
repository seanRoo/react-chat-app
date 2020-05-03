import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () => ({
    divStyle: {
      border: "1px solid black",
      width: 800,
      display: "grid",
      position: "relative",
      gridTemplateRows: "10% 80%",
      borderRadius: "25px",
      height: "90%",
      paddingBottom: 30,
    },
    mobileDivStyle: {
      border: "1px solid black",
      width: "100%",
      display: "grid",
      position: "relative",
      gridTemplateRows: "10% 80%",
      borderRadius: "25px",
      minHeight: "100%",
    },
    inputStyle: {
      alignSelf: "flex-end",
      width: "100%",
      maxHeight: 80,
    },
  }),
  { name: "ChatContainer" }
);
