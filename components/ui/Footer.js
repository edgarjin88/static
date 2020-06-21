import React from "react";
import Link from "../Link";
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
  link: {
    display: "flex",
    color: "black",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    alignItems: "center",
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
    margin: "2em 0",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginTop: "2rem",
      marginBottom: "1em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

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
                  onClick={() => props.setValue(0)}
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
                <Grid
                  item
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                  className={classes.link}
                >
                  <AccountTreeIcon />
                  Projects
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                >
                  - Sumontee
                </Grid>
                <Grid
                  item
                  // href="/lemonstreaming"
                  className={classes.link}
                >
                  - Lemonstreaming
                </Grid>
                <Grid
                  item
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                  className={classes.link}
                >
                  - Launinark
                </Grid>
                <Grid
                  item
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                  className={classes.link}
                >
                  - Portfolio Website
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
                  href="/revolution"
                  className={classes.link}
                  onClick={() => props.setValue(2)}
                >
                  <AppsIcon />
                  Skills
                </Grid>
                <Grid
                  item
                  href="/revolution"
                  className={classes.link}
                  onClick={() => props.setValue(2)}
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
                  item
                  onClick={() => props.setValue(3)}
                  href="/about"
                  className={classes.link}
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
