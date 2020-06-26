import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Stepper from "../components/ui/Stepper";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import LanguageIcon from "@material-ui/icons/Language";

import BallotIcon from "@material-ui/icons/Ballot";
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
    label: "Landing Page",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Landing Page2",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const design = [
  {
    label: "Responsive grid layout",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Custom animation",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Long-scrolling website design",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <title key="title">Launinark.com | Yongduck Jin</title>
      <meta
        name="description"
        key={"description"}
        content={`Launinark.com | Static website for the company Launinark `}
      />
      <meta
        property="og:title"
        content={`Launinark.com | Static website for the company Launinark`}
      />

      <meta
        key={"og:description"}
        property="og:description"
        content={`Launinark | Static website for the company Launinark`}
      />
      <meta
        key={"og:url"}
        property="og:url"
        content={`yongduckjin.com/launinark`}
      />
      <link
        key={"canonical"}
        rel="canonical"
        href={`yongduckjin.com/launinark`}
      />
      <h1>Launinark.com</h1>
      <Grid container item className={classes.gridContainer}>
        <Grid item className={classes.textArea}>
          {" "}
          <Typography variant="h2">
            {" "}
            -&nbsp; <BallotIcon />
            &nbsp; Features -
          </Typography>
          <p>
            A static webpage designed for a company Launinark. Used plain
            javascript, jQuery, HTML and CSS for DOM manipulation and animation.
            Deployed on AWS.
          </p>
          <div className={classes.linkContainer}>
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
            <ColorLensIcon />
            &nbsp; Design -
          </Typography>
          <p>
            It is a mobile friendly website that can fit in any size of screens.
            This website is similar to usual long-scrolling websites. For
            animations and visual effects, only CSS and jQuery were used.
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
