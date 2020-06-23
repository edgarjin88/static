import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//icon list
// import ReactIcon from "../public/skills/react.svg";
import FirebaseIcon from "../public/skills/firebase.svg";
import NextIcon from "../public/skills/next-js.svg";
import ReduxIcon from "../public/skills/icons8-redux.svg";
import ReactBlackIcon from "../public/skills/react_b.svg";
import AWSIcon from "../public/skills/aws.svg";
import ExpressIcon from "../public/skills/expressjs.svg";
import ElectronIcon from "../public/skills/electron.svg";
import AntdIcon from "../public/skills/ant-design.svg";
import DockerIcon from "../public/skills/docker.svg";
// import NodeIcon from "../public/skills/icons8-nodejs.svg";
import MongoDBIcon from "../public/skills/mongodb.svg";
import GitIcon from "../public/skills/git.svg";
import JSIcon from "../public/skills/javascript_color.svg";
import HerokuIcon from "../public/skills/icons8-heroku.svg";
import NPMIcon from "../public/skills/npm.svg";
import NodeDotIcon from "../public/skills/node-dot-js.svg";
import TSIcon from "../public/skills/typescript_color.svg";
import WebRTCIcon from "../public/skills/webrtc_b.svg";
import StyledIcon from "../public/skills/styled-components.svg";
import SocketIcon from "../public/skills/socket-dot-io.svg";
import PythonIcon from "../public/skills/python_color2.svg";
import SequelizeIcon from "../public/skills/sequelize.svg";
import SalesforceIcon from "../public/skills/salesforce.svg";
import JestIcon from "../public/skills/jest.svg";
import OauthIcon from "../public/skills/oauth.svg";
import VueIcon from "../public/skills/vue-dot-js.svg";
import SleepingIcon from "../public/skills/sleeping.svg";
import VSCodeIcon from "../public/skills/visualstudiocode.svg";
import RubyIcon from "../public/skills/ruby.svg";
import JqueryIcon from "../public/skills/jquery.svg";
import MySQLIcon from "../public/skills/mysql.svg";
import MaterialIcon from "../public/skills/material-ui.svg";
import BootstrapIcon from "../public/skills/bootstrap.svg";
// import JqueryIcon from "../public/skills/Python_color.svg";
// import JqueryIcon from "../public/skills/jquery.svg";
// import PythonColorIcon from "../public/skills/";
import RailsIcon from "../public/skills/Rails.svg";
// import SleepingIcon from "../public/skills/visualstudiocode.svg";
// import SleepingIcon from "../public/skills/";

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "100%",
    width: "70%",
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    margin: "auto",

    marginTop: "1rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  mainContainer: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "2.5rem",
    width: "65%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  secondContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      // padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      // padding: 0,
    },
  },
  gridItem: {
    // backgroundColor: "red",
    position: "relative",
    width: "6.5rem",
    height: "6.5rem",
    margin: "0.8rem",

    [theme.breakpoints.down("xs")]: {
      width: "5.5rem",
      height: "5.5em",
      margin: "0.4rem",
    },
  },
  svgSize: {
    padding: "0.5rem",
    height: "100%",
    width: "100%",
  },
  caption: {
    height: "100%",
    width: "100%",
    color: "black",

    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 3,
    textTransform: "uppercase",
    fontSize: "0.9rem",
    opacity: 0,
    transition: "all .5s",
    backfaceVisibility: "hidden",
    "&:hover": {
      backgroundColor: "black",
      color: "white",

      opacity: 0.84,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
}));

const Skills = () => {
  const classes = useStyles();
  const IconList = [
    {
      name: "Firebase",
      component: <FirebaseIcon className={classes.svgSize} />,
    },
    { name: "Next.js", component: <NextIcon className={classes.svgSize} /> },
    {
      name: "React.js",
      component: <ReactBlackIcon className={classes.svgSize} />,
    },
    { name: "Redux", component: <ReduxIcon className={classes.svgSize} /> },
    { name: "AWS", component: <AWSIcon className={classes.svgSize} /> },
    { name: "Docker", component: <DockerIcon className={classes.svgSize} /> },
    { name: "MongoDB", component: <MongoDBIcon className={classes.svgSize} /> },
    { name: "Git", component: <GitIcon className={classes.svgSize} /> },
    { name: "Javascript", component: <JSIcon className={classes.svgSize} /> },
    { name: "Heroku", component: <HerokuIcon className={classes.svgSize} /> },
    { name: "NPM", component: <NPMIcon className={classes.svgSize} /> },
    { name: "Node.js", component: <NodeDotIcon className={classes.svgSize} /> },
    { name: "Typescript", component: <TSIcon className={classes.svgSize} /> },
    { name: "WebRTC", component: <WebRTCIcon className={classes.svgSize} /> },
    {
      name: "Styled Components",
      component: <StyledIcon className={classes.svgSize} />,
    },
    { name: "SocketIO", component: <SocketIcon className={classes.svgSize} /> },
    { name: "Python", component: <PythonIcon className={classes.svgSize} /> },
    { name: "VS Code", component: <VSCodeIcon className={classes.svgSize} /> },
    { name: "Rails", component: <RailsIcon className={classes.svgSize} /> },
    { name: "MySQL", component: <MySQLIcon className={classes.svgSize} /> },
    {
      name: "Material UI",
      component: <MaterialIcon className={classes.svgSize} />,
    },
    { name: "jQuery", component: <JqueryIcon className={classes.svgSize} /> },
    {
      name: "Salesforce",
      component: <SalesforceIcon className={classes.svgSize} />,
    },
    { name: "Ruby", component: <RubyIcon className={classes.svgSize} /> },
    {
      name: "Bootstrap",
      component: <BootstrapIcon className={classes.svgSize} />,
    },
    { name: "Ant Design", component: <AntdIcon className={classes.svgSize} /> },
    {
      name: "Electron",
      component: <ElectronIcon className={classes.svgSize} />,
    },
    {
      name: "Express.js",
      component: <ExpressIcon className={classes.svgSize} />,
    },
    { name: "Jest", component: <JestIcon className={classes.svgSize} /> },
    { name: "Oauth", component: <OauthIcon className={classes.svgSize} /> },
    { name: "Vue", component: <VueIcon className={classes.svgSize} /> },
    {
      name: "Sleeping",
      component: <SleepingIcon className={classes.svgSize} />,
    },
  ];

  return (
    <Paper className={classes.main}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid container className={classes.secondContainer} item>
          {IconList.map((el, i) => {
            return (
              <Paper elevation={1} className={classes.gridItem} key={i}>
                {el.component}
                <figcaption className={classes.caption}>{el.name}</figcaption>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Skills;

// const Skills = () => {
//   const classes = useStyles();
//   const IconList = [
//     {name: , component: },     {name: , component: },     {name: , component: },     {name: , component: },     {name: , component: },     {name: , component: },     {name: , component: },     {name: , component: },
//     <FirebaseIcon className={classes.svgSize} />
//     <NextIcon className={classes.svgSize} />,
//     <ReactBlackIcon className={classes.svgSize} />,
//     <ReduxIcon className={classes.svgSize} />,
//     <AWSIcon className={classes.svgSize} />,
//     <DockerIcon className={classes.svgSize} />,
//     <MongoDBIcon className={classes.svgSize} />,
//     <GitIcon className={classes.svgSize} />,
//     <JSIcon className={classes.svgSize} />,
//     <HerokuIcon className={classes.svgSize} />,
//     <NPMIcon className={classes.svgSize} />,
//     <NodeDotIcon className={classes.svgSize} />,
//     <TSIcon className={classes.svgSize} />,
//     <WebRTCIcon className={classes.svgSize} />,
//     <StyledIcon className={classes.svgSize} />,
//     <SocketIcon className={classes.svgSize} />,
//     <PythonIcon className={classes.svgSize} />,
//     <VSCodeIcon className={classes.svgSize} />,
//     <RailsIcon className={classes.svgSize} />,
//     <MySQLIcon className={classes.svgSize} />,
//     <MaterialIcon className={classes.svgSize} />,
//     <JqueryIcon className={classes.svgSize} />,
//     <SalesforceIcon className={classes.svgSize} />,
//     <RubyIcon className={classes.svgSize} />,
//     <BootstrapIcon className={classes.svgSize} />,
//     <AntdIcon className={classes.svgSize} />,
//     <ElectronIcon className={classes.svgSize} />,
//     <ExpressIcon className={classes.svgSize} />,
//     <JestIcon className={classes.svgSize} />,
//     <OauthIcon className={classes.svgSize} />,
//     <VueIcon className={classes.svgSize} />,
//     <SleepingIcon className={classes.svgSize} />,
//   ];
