import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../components/ui/SimpleCard";
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

const backgroundImgURL = [
  "url('/background/cross.jpg')",

  "url('/background/board.jpg')",
  ,
  "url('/background/cuba.jpg')",
  "url('/background/flower.jpg')",
  "url('/background/leaf.jpg')",
  "url('/background/wind.jpg')",
  "url('/background/wood.jpg')",
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
    backgroundImage: "url('/background/board.jpg')",
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
    color: "grey",
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
    fontWeight: 200,
    color: "black",
    fontSize: "4rem",
    transition: "all 2s",
    "&:hover": {
      color: "red",
    },
    marginBottom: 0,
  },
  secondText: {
    marginTop: "3em",
    fontWeight: 200,
    backgroundColor: "black",
    color: "white",
    fontSize: "4rem",
    transition: "all 2s",
    "&:hover": {
      color: "grey",
    },
    marginBottom: 0,
  },
  jobTitle: {
    fontSize: "1.8rem",
    transition: "all 0.2s",
    color: "black",
  },
}));

const Index = () => {
  const classes = useStyles();
  const [descriptionStyle, setDescriptionStyle] = useState(classes.firstText);
  const [title, setTitle] = useState(classes.jobTitle);
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
      {/* <h1>PLAY</h1> */}
      <div className={classes.backImg}></div>
      <div className={`${classes.description} pattern-dots-md`}>
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
        {/* <SimpleCard /> */}
      </div>
    </div>
  );
};

export default Index;
