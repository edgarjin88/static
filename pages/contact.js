import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "100%",
    width: "75%",
    display: "flex",
    // border: "black solid 1px",
    flexDirection: "row",
    fontSize: "1.2rem",

    margin: "auto",
    justifyContent: "center",
    marginTop: "1.2rem",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      width: "98%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  formArea: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      width: "99%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3rem",
    width: "50%",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      // justifyContent: "center",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      // justifyContent: "center",
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      // justifyContent: "center",
      width: "95%",
    },
  },
  textContainer: {
    flexDirection: "column",
    height: "100%",
    width: "50%",
    // padding: 0,
    [theme.breakpoints.down("sm")]: {
      // justifyContent: "center",
      width: "80%",
    },
  },
  photoArea: {
    flexDirection: "column",
    backgroundImage: "url('/background/cuba.jpg')",
    backgroundSize: "cover",
    minHeight: "80%",
    width: "50%",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  customLink: {
    color: " #0072b1",
    // cursor: "pointer",
    display: "inline-block",
    fontWeight: "bold",
    textDecoration: "none",
    borderBottom: "1px solid  #0072b1",
    padding: " 3px",
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: " #0072b1",
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
  button: {
    width: "50%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Paper className={classes.formArea}>
        <Grid className={classes.textContainer} container item>
          <h1>
            {" "}
            <EmailIcon /> Contact
          </h1>
          <p>
            For any work related messages, please use the form below or you can
            send me a direct message on{" "}
            <a
              className={classes.customLink}
              href="https://www.linkedin.com/in/yongduck-jin-developer/"
              target="_blank"
            >
              LinkedIn
            </a>
            . I will reply within 24 hours.
          </p>
        </Grid>

        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="email"
            error={false}
            label="Email"
            color="secondary"
            helperText="Incorrect email address"
          />
          <TextField
            id="name"
            error={false}
            color="secondary"
            label="Full Name"
            helperText="Please enter your name"
          />

          <TextField
            id="message"
            label="Message"
            error={false}
            color="secondary"
            multiline
            rows="4"
            helperText="Please enter message before you send a mail"
            // defaultValue="Message"
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </Paper>
      <Grid className={classes.photoArea} item container></Grid>
    </Grid>
  );
};

export default Contact;
