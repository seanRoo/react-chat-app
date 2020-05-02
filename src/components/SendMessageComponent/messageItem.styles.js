import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () => ({
    inline: {
      display: "inline",
    },
    listItem: {
      overflowX: "auto",
      width: "fit-content",
      whiteSpace: "normal",
      wordWrap: "break-word",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 25,
      marginLeft: 25,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 50,
      color: "blue",
    },
    secondary: {
      color: "black",
      fontSize: 14,
    },
    primary: {
      fontSize: 14,
    },
    otherUserListItem: {
      marginRight: 25,
      float: "right",
      color: "green",
    },
    listItemContainer: {
      clear: "both",
      maxWidth: "65%",
    },
  }),
  { name: "MessageItem" }
);
