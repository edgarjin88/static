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
    label: "Search Engine Optimisation",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Form validation",
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
    label: "Serverless email functions",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Open Graph",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Server Side Rendering",
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
    label: "Unified Colors",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Responsive Design",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Native Application Look and Feel",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Head>
        <title key="title">Yongduckjin.com | Yongduck Jin</title>
        <meta
          name="description"
          key={"description"}
          content={`Yongduckjin.com | This is my flazing fast, and server-side rendered SPA. All pages are optimised for SEO and best user experience to provide the features of the latest web applications`}
        />
        <meta property="og:title" content={`Yongduckjin.com | Yongduck Jin`} />

        <meta
          key={"og:description"}
          property="og:description"
          content={`Yongduck.jin.com | Yongduckjin.com | This is my flazing fast, and server-side rendered SPA. All pages are optimised for SEO and best user experience to provide the features of the latest web applications`}
        />
        <meta
          key={"og:url"}
          property="og:url"
          content={`yongduckjin.com/portfolio`}
        />
        <link
          key={"canonical"}
          rel="canonical"
          href={`yongduckjin.com/portfolio`}
        />
      </Head>
      <h1>Static SPA Website</h1>
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp; <BallotIcon />
            &nbsp; Features -
          </Typography>
          <p>
            It is my responsive portfolio website. Not a usual static web site,
            but a <strong>BlAZING FAST</strong> single page application with
            SSR. The whole web pages are server side rendered to provide the
            best user experience and Search Engine Optimization.
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
            I used Next.js to integrate server side rendering which provide the
            best user experience as well as SEO. The latest version of Next.js
            manages the code splitting automatically. As this web site already
            contains basic featurs as a SPA, it would be easily sacled up to
            other project such as tech blogs with CRUD functions. Deployed on
            AWS.
          </p>
          <strong>
            React.js/Next.js, Material UI, AWS, S3, NodeMailer, Axios, Real Time
            Message, CloudFront, Firebase
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
            <strong>Material UI</strong> is used as it provides a number of
            React firendly featurs. I intended to use simple and basic design
            patterns, minimising special CSS effects, maintaining the
            originality. The main goal of this design is to give user experience
            of a real application.
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
