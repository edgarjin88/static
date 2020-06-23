import React from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import HomeIcon from "@material-ui/icons/Home";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MailIcon from "@material-ui/icons/Mail";
import AppsIcon from "@material-ui/icons/Apps";
const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    // height: "20vh",
    zIndex: 1302,
    position: "relative",
  },

  mainContainer: {
    position: "absolute",
    // height: "20vh",
  },
  project: {
    display: "flex",
    color: "black",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    alignItems: "center",
  },
  link: {
    display: "flex",
    color: "black",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    alignItems: "center",

    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      boxShadow: " 0 1rem 2rem rgba(0, 0, 0, 0.15)",
      transform: "translateY(-2px)",
      cursor: "pointer",
    },
    "&:active": {
      boxshadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      transform: "translateY(2px)",
    },
  },
  gridItem: {
    margin: "0 4em",
    marginTop: "2em",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      // height: "2.5em",
      // width: "2.5em",
      margin: 0,
      marginTop: "1em",
    },
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
  copyLeft: {
    marginBottom: "4rem",

    [theme.breakpoints.down("xs")]: {
      margin: 0,
      marginTop: "5rem",
      marginBottom: "5rem",
    },
  },
}));

export default function Footer(props) {
  const Router = useRouter();

  const classes = useStyles();

  const handleLinkClick = (arg) => {
    Router.push(arg).then(() => window.scrollTo(0, 0));
  };

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid container item justify="center">
          <Hidden xsDown>
            <Grid item className={classes.gridItem}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: 0 }}
              >
                <Grid
                  item
                  onClick={(e) => handleLinkClick("/")}
                  className={classes.link}
                >
                  <HomeIcon /> Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: 0 }}
              >
                <Grid item className={classes.project}>
                  <AccountTreeIcon />
                  Projects
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  onClick={(e) => handleLinkClick("/lemonstreaming")}
                >
                  - Lemonstreaming
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  onClick={(e) => handleLinkClick("/sumontee")}
                >
                  - Sumontee
                </Grid>

                <Grid
                  item
                  onClick={(e) => handleLinkClick("/portfolio")}
                  className={classes.link}
                >
                  - Portfolio Website
                </Grid>
                <Grid
                  item
                  onClick={(e) => handleLinkClick("/launinark")}
                  className={classes.link}
                >
                  - Launinark
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: 0 }}
              >
                <Grid
                  item
                  className={classes.link}
                  onClick={(e) => handleLinkClick("/skills")}
                >
                  <AppsIcon />
                  Skills
                </Grid>
                <Grid
                  className={classes.link}
                  item
                  onClick={(e) => handleLinkClick("/about")}
                >
                  <EmojiPeopleIcon />
                  About Me
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: 0 }}
              >
                <Grid
                  className={classes.link}
                  item
                  onClick={(e) => handleLinkClick("/contact")}
                >
                  <MailIcon />
                  Contact Me
                </Grid>
              </Grid>
            </Grid>{" "}
          </Hidden>
        </Grid>
        <Grid item className={classes.gridItem}>
          <h3 className={classes.copyLeft}>Copyleft © 2020 | Created by Jin</h3>
        </Grid>
      </Grid>
    </footer>
  );
}
