import React, { useState, useEffect } from "react";
import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "100%",
    width: "75%",
    display: "flex",
    flexDirection: "row",
    fontSize: "1.2rem",

    margin: "auto",
    marginTop: "0.8rem",
    justifyContent: "center",

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
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [nameHelper, setNameHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [messageHelper, setMessageHelper] = useState("");

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        break;

      case "name":
        setName(event.target.value);
        if (name.length < 2) {
          setNameHelper("Please enter your full name");
        } else {
          setNameHelper("");
        }
        break;
      case "message":
        setMessage(event.target.value);
        if (message.length < 2) {
          setMessageHelper("Please enter message");
        } else {
          setMessageHelper("");
        }
        break;
      default:
        break;
    }
  };

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const onConfirm = (e) => {
    if (
      name.length !== 0 &&
      message.length !== 0 &&
      email.length !== 0 &&
      emailHelper.length === 0 &&
      nameHelper.length === 0 &&
      messageHelper.length === 0
    ) {
      setLoading(true);
      axios
        .get(
          `https://us-central1-portfolio-b1a7f.cloudfunctions.net/sendMail
`,
          { params: { name, email, message } }
        )
        .then((res) => {
          setLoading(false);
          setEmail("");
          setMessage("");
          setName("");
          setAlert({
            open: true,
            message:
              "Your message sent successfully. I will reply within 24 hours",
            backgroundColor: "#4BB543",
          });
        })
        .catch((e) => {
          setLoading(false);
          setAlert({
            open: true,
            message: "Something went wrong, please try again!",
            backgroundColor: "#FF3232",
          });
        });
    } else {
      setAlert({
        open: true,
        message: "Please fill the form before you send a message!",
        backgroundColor: "#FF3232",
      });
    }
  };

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
            label="Email"
            value={email}
            onChange={onChange}
            error={emailHelper.length > 0}
            color="secondary"
            helperText="Incorrect email address"
          />
          <TextField
            id="name"
            error={nameHelper.length > 1}
            value={name}
            onChange={onChange}
            color="secondary"
            label="Full Name"
            helperText={nameHelper}
          />

          <TextField
            value={message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={onChange}
            id="message"
            label="Message"
            error={messageHelper.length > 1}
            color="secondary"
            multiline
            rows="4"
            helperText={messageHelper}
            // defaultValue="Message"
          />
          <Button
            onClick={onConfirm}
            className={classes.button}
            variant="contained"
            color="secondary"
            startIcon={<SendIcon />}
          >
            {loading ? <CircularProgress size={30} /> : "Send"}
          </Button>
        </form>
        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={4000}
        />
      </Paper>

      <Grid className={classes.photoArea} item container></Grid>
    </Grid>
  );
};

export default Contact;
