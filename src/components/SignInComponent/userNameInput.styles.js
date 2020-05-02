import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    desktop: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
      },
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
      width: "fit-content",
      float: "right",
      marginRight: 60,
      marginTop: 40,
      display: "flex",
    },
    icon: {
      color: "limegreen",
      paddingRight: 5,
    },
  }),
  { name: "UserNameInput" }
);
