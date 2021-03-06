import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const black = "#000000";

export default createMuiTheme({
  palette: {
    common: {},
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: black,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    h1: {
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: 2,
    },
    h2: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      color: arcGrey,
      lineHeight: 1.5,
    },

    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: "white",
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcGrey,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcGrey}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcGrey}`,
        },
      },
    },
    MuiPaper: {
      root: {
        square: true,
        borderRadius: 0,
        backgroundColor: "white",
      },
      rounded: {
        borderRadius: 0,
      },
    },
  },
});
