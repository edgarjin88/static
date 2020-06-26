import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Stepper from "../components/ui/Stepper";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

import BallotIcon from "@material-ui/icons/Ballot";
import SettingsIcon from "@material-ui/icons/Settings";
import ColorLensIcon from "@material-ui/icons/ColorLens";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",

    // backgroundColor: "grey",
    marginTop: "3rem",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  gridContainer: {
    // backgroundColor: "red",
    width: "70%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
      marginBottom: "1.5rem",
    },
  },
  textArea: {
    width: "45%",
    margin: "0.5rem",
    // flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      // height: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      // height: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // height: "50%",
    },
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentsArea: {
    width: "45%",
    padding: "0.5rem",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      // height: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      // height: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // height: "50%",
    },
  },
  hrStyle: {
    color: "red",
    width: "60%",
    height: "2px",
    margin: "2rem 0",
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
    color: "#868686",
    padding: "0.3rem",

    // cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: "#868686",

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
}));

const features = [
  {
    label: "Server-side rendering",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "One to One video conference call",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "SPA experience",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const techStack = [
  {
    label: "WebRTC",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Real time message via WebSocket",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Local Authentication",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Hash tag search",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Basic CRUD operation",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Tweet/Retweet/Like/Edit",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Follow/Unfollow",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "SEO",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "SSR + SPA",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },

  {
    label: "AWS EC2 and S3",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];
const design = [
  {
    label: "Responsive design",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },

  {
    label: "Styled-Components & Ant Design",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Head>
        <title key="title">SUMONTEE | Yongduck Jin</title>
        <meta
          name="description"
          key={"description"}
          content={`Sumontee | Social network website with WebRTC video conference call `}
        />
        <meta
          property="og:title"
          content={`Sumontee | Social network website with WebRTC video conference call`}
        />

        <meta
          key={"og:description"}
          property="og:description"
          content={`Sumontee | Social network website with WebRTC video conference call. You can enjoy general features of social media and super fast video conference call via WebRTC`}
        />
        <meta
          key={"og:url"}
          property="og:url"
          content={`yongduckjin.com/sumontee`}
        />
        <link
          key={"canonical"}
          rel="canonical"
          href={`yongduckjin.com/sumontee`}
        />
      </Head>
      <h1>Sumontee.com</h1>
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp; <BallotIcon />
            &nbsp; Features -
          </Typography>
          <p>
            <strong>SUMONTEE</strong> is a fully server side rendered single
            page application. It is a social website with real-time messaging
            and video conference call function. Basic features of social network
            websites are integrated.
          </p>
          <div className={classes.linkContainer}>
            <div className={classes.link}>
              <GitHubIcon />
              <a> &nbsp; &nbsp; Gihub Code</a>
            </div>

            <div className={classes.link}>
              <LanguageIcon />
              <a>&nbsp; &nbsp; Demo</a>
            </div>
          </div>
        </Grid>
        <Grid container item className={classes.contentsArea}>
          {" "}
          <Stepper key="features" stepContents={features} />
        </Grid>
      </Grid>
      <Divider className={classes.hrStyle} />
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp;
            <SettingsIcon /> &nbsp; Stack -
          </Typography>
          <p>
            <strong>SUMONTEE</strong> is powered by <strong>Next.js</strong>,
            <strong> WebRTC</strong> and <strong>Express.js</strong>. It
            provides a real time message and one to one converence call
            function. As the video streaming is via <strong>P2P</strong>{" "}
            connection, it does not cause direct traffic to the main server.
          </p>
          <p>
            It is a website that comes up with the usual functions such as CRUD
            operations, writing a post or comment, real-time messaging,
            lazy-scrolling and local authentication. A number of modern web
            technologies such as Redux, Redux-Saga, and AWS EC2 used to build an
            optimised web application. Front-end and back-end were deployed on
            seperate AWS EC2 and they are connected via HTTPS protocol.
          </p>
          <strong>
            Front: React, Redux, Redux-saga, NEXT.js HTML, CSS,
            Styled-Components Ant Design, Web-socket, WebRTC, Express.js, AWS
            EC2, Axios
          </strong>
          <strong>
            Back: Express.js, Web-socket, Sequelize(SQL), Passport.js, AWS EC2,
            AWS S3
          </strong>
        </Grid>
        <Grid container item className={classes.contentsArea}>
          {" "}
          <Stepper key="teckStack" stepContents={techStack} />
        </Grid>
      </Grid>
      <Divider className={classes.hrStyle} />

      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp;
            <ColorLensIcon />
            &nbsp; Design -
          </Typography>
          <p>
            <strong>Styled-Components</strong> and <strong>Ant Design</strong>{" "}
            were used to build a responsive social web application. General
            design was motivated by Twitter and Facebook.
          </p>
        </Grid>
        <Grid container item className={classes.contentsArea}>
          {" "}
          <Stepper key="design" stepContents={design} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
