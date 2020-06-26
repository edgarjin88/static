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
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
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
  divStyle: {
    // maxHeight: "20rem",
    margin: "1rem 0",
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    listStyleType: "none",
  },
  liStyle: {
    margin: "0.1rem",
  },
}));

const features = [
  {
    label: "One to Many video streaming",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Server-side rendering",
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
    label: "SSR/Next.js",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "WebRTC P2P connection",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Direct Message via WebSocket",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Advanced CRUD operations",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Redux/Saga state management",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Sequalize(SQL) data base",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Static files stored on AWS S3",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const advancedFeatures = [
  {
    label: "Optimised re-rendering",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Mesh topology WebRTC",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Email Authentication",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Oauth Authentication",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Search Engine Optimisation",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Push notification",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Open Graph",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Around 60 API end points",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Password recovery",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Specified controls for Broadcaster/viewer",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },

  {
    label: "Lazy scrolling",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },

  {
    label: "Hash tag search",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },

  {
    label: "Multiple Categories",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Comment/Reply to a Comment",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Realtime Dynamic Contents Update",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];
const design = [
  {
    label: "Material UI",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Styled-Components",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Simple and User Friendly",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },

  {
    label: "Optimised for all screens",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Informative Layouts",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Head>
        <title key="title">Lemonstreaming.com | Yongduck Jin</title>
        <meta
          name="description"
          key={"description"}
          content={`Lemonstreaming.com | Video streaming website via WebRTC `}
        />
        <meta
          property="og:title"
          content={`Lemonstreaming.com | Video streaming website via WebRTC`}
        />

        <meta
          key={"og:description"}
          property="og:description"
          content={`Lemonstreaming | Social network website with WebRTC video conference call. You can enjoy all advanced features of social media and streaming services via stable WebRTC protocol`}
        />
        <meta
          key={"og:url"}
          property="og:url"
          content={`yongduckjin.com/lemonstreaming`}
        />
        <link
          key={"canonical"}
          rel="canonical"
          href={`yongduckjin.com/lemonstreaming`}
        />
      </Head>
      <h1>Lemonstreaming.com</h1>
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp; <BallotIcon />
            &nbsp; Features -
          </Typography>
          <p>
            <strong>LEMONSTREAMING</strong> is a fully server side rendered
            single page application. It is a social network service with the
            real-time messaging and <strong>One-Many</strong> video broadcasting
            function. Advanced features of social networks and modern websites
            are integrated.
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
            {" "}
            &nbsp;
            <strong>LEMONSTREAMING</strong> is powered by{" "}
            <strong>Next.js</strong>,<strong> WebRTC</strong> and{" "}
            <strong>Express.js</strong>. Because the video streaming is via{" "}
            <strong>P2P</strong> connection, it does not cause direct traffic to
            the main server. As long as the broadcasters have enough bandwidth,
            they can provide their own streaming data to their clients.
          </p>
          <p>
            On top of general web app features, this website comes up with{" "}
            <strong>advanced features </strong>
            such as OAUTH authentication and push notification.
          </p>
          <strong>
            Front: React, Redux, Redux-saga, Next.js HTML, CSS, Material UI,
            Web-socket, WebRTC, Express.js, AWS S3, Heroku
          </strong>
          <strong>
            Back: Express.js, Web-socket, Sequelize(SQL), Passport.js, Heroku,
            AWS S3, OAUTH 2.0
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
            <EmojiObjectsIcon /> &nbsp;Advanced Features -
          </Typography>
          <div className={classes.divStyle}>
            <li className={classes.liStyle}>
              Optimised re-rendering prevention
            </li>
            <li className={classes.liStyle}>OAUTH authenciation</li>
            <li className={classes.liStyle}>
              Email validation and Password recovery
            </li>
            <li className={classes.liStyle}>Customised input validation</li>
            <li className={classes.liStyle}>SEO and Open Graph</li>
            <li className={classes.liStyle}>Push notification</li>
            <li className={classes.liStyle}>Hash tag searching</li>
            <li className={classes.liStyle}>
              One to Many WebRTC P2P connection
            </li>
            <li className={classes.liStyle}>
              One to Many WebRTC connection via SFU
            </li>
            <li className={classes.liStyle}>
              Specified authorities for broadcaster and viewers
            </li>
            <li className={classes.liStyle}>Around 60 API end points</li>
            <li className={classes.liStyle}>
              Reat time update of all dynamic information on the website
            </li>
          </div>
        </Grid>
        <Grid container item className={classes.contentsArea}>
          {" "}
          <Stepper key="teckStack" stepContents={advancedFeatures} />
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
            <strong>Styled-Components</strong> and <strong>Material UI</strong>{" "}
            were used to build a responsive social web application. General
            design was motivated by Youtube.
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
