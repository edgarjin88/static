import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Typed from "react-typed";
const roles = [
  "React.js",
  "WebRTC",
  "Next.js",
  "WebSocket",
  "Dragon_Age 🗡️",
  "Material-UI",
  "Node.js",
  "Exprss.js",
  `DOOM2 🧡`,
  "SQL",
  "NoSQL",
  "Ghost_in_the_Shell 🎞️",
];

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "65vh",
    display: "flex",
    margin: 0,
    textAlign: "center",
  },
  backImg: {
    backgroundImage: "url('/background/hand.jpg')",
    backgroundSize: "cover",
    background: "no-repeat",
    width: "50%",
    // height: "100%",
    borderRight: "2px black solid",
    backgroundPosition: "50% 50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  description: {
    width: "50%",
    // height: "",

    color: "black",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "65vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100vh",
    },
  },
  firstText: {
    marginTop: "3em",
    backgroundColor: "black",
    fontWeight: 500,
    color: "black",
    fontSize: "4rem",
    transition: "all 2s",

    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  secondText: {
    marginTop: "3em",
    fontWeight: 500,
    backgroundColor: "black",
    color: "white",
    fontSize: "4rem",
    transition: "all 2s",

    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  jobTitle: {
    fontSize: "1.8rem",
    transition: "all 0.2s",
    color: "black",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const [descriptionStyle, setDescriptionStyle] = useState(classes.firstText);
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    console.log("fired");
    let styleChange = setInterval(() => {
      if (transition) {
        setDescriptionStyle(classes.firstText);
        setTransition(!transition);
      } else {
        setDescriptionStyle(classes.secondText);
        setTransition(!transition);
      }
    }, 2000);
    return () => {
      clearInterval(styleChange);
    };
  }, [transition]);

  return (
    <div className={`${classes.main}`}>
      <Head>
        <title key="title">Yongduckjin.com</title>
        <meta
          name="description"
          key={"description"}
          content={`Full stack web developer | Next.js/React.js/Node.js/Express.js/WebRTC  `}
        />
        <meta
          property="og:title"
          content={`Full Web Developer with passion and skills | Yongduck Jin`}
        />

        <meta
          key={"og:description"}
          property="og:description"
          content={`Full stack web developer | Next.js/React.js/Node.js/Express.js/WebRTC `}
        />
        <meta key={"og:url"} property="og:url" content={`yongduckjin.com`} />
        <link key={"canonical"} rel="canonical" href={`yongduckjin.com`} />
      </Head>
      <div className={classes.backImg}></div>
      <div
        className={`${classes.description}  pattern-dots-sm




`}
      >
        <h1
          className={`pattern-horizontal-lines-sm
	 text-pattern ${descriptionStyle}`}
        >
          YONGDUCK JIN
        </h1>
        <h3 className={` ${classes.jobTitle}`}>FULL STACK DEVELOPER</h3>
        <h2 style={{ color: "black" }}>
          <Typed
            loop
            typeSpeed={50}
            backSpeed={20}
            strings={roles}
            backDelay={1500}
            loopCount={0}
            showCursor
            className="self-typed"
            cursorChar="|"
          />
        </h2>
      </div>
    </div>
  );
};

export default Index;
