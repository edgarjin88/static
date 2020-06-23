import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "../components/ui/Stepper";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    marginTop: "1rem",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  gridContainer: {
    width: "80%",
    justifyContent: "center",
  },
  textArea: {
    width: "45%",
    // flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentsArea: {
    width: "45%",
    padding: "0.5rem",
  },
  hrStyle: {
    color: "red",
    width: "60%",
    height: "2px",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <h1>Sumontee.com</h1>
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">- Features -</Typography>
          <p>
            It is my responsive portfolio website. Not just a usual static web
            application, but a <strong>BlAZING FAST</strong> single page
            application. The whole web pages are server side rendered to provide
            the best user experience and Search Engine Optimization.
          </p>
        </Grid>
        <Grid item className={classes.contentsArea}>
          {" "}
          <Stepper />
        </Grid>
      </Grid>
      <Divider className={classes.hrStyle} />
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">- Tech Stack -</Typography>
          <p>
            I used Next.js to integrate server side rendering which provide the
            best user experience as well as SEO. As this web site already
            contains basic featurs as a SPA, it would be easily sacled up to
            other project such as tech blogs with CRUD functions. Deployed on
            AWS.
          </p>
          <strong>
            React.js/Next.js, Material UI, AWS, S3, NodeMail, Axios, Real Time
            Message, CloudFront
          </strong>
        </Grid>
        <Grid item className={classes.contentsArea}>
          {" "}
          <Stepper />
        </Grid>
      </Grid>
      <Divider className={classes.hrStyle} />

      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">- Design -</Typography>
          <p>
            <strong>Material UI</strong> is used as it provides a number of
            React firendly featurs. It can be fully server side rendered even in
            full stack dynamic web application. Also, general functionalities
            provided by <strong>Styleld-Components</strong> already exist in{" "}
            <strong>Material UI</strong>. I intended to use simple and basic
            design patterns, minimising special CSS effects, but at the same
            time creating my originality.
          </p>
        </Grid>
        <Grid item className={classes.contentsArea}>
          {" "}
          <Stepper />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
