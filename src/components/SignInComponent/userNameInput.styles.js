import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    desktop: {
      width: "48%",
      paddingLeft: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
      "& .MuiInputBase-root": {
        borderRadius: "25px",
      },
    },
    mobile: {
      "& > *": {
        margin: theme.spacing(1),
        width: "65%",
      },
      "& .MuiInputBase-root": {
        borderRadius: "25px",
      },
    },
    onlineUserDivMobile: {
      width: "fit-content",
      float: "right",
      marginRight: "5%",
      marginTop: "9%",
      display: "flex",
    },
    onlineUserDivDesktop: {
      textAlign: "center",
      width: "48%",
      float: "right",
    },
    icon: {
      color: "limegreen",
      paddingRight: 5,
    },
    onlineUserTextContainer: {
      marginTop: "25px",
    },
  }),
  { name: "UserNameInput" }
);
