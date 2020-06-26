import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Laser from "../components/ui/Laser";
const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",

    margin: "auto",
    marginTop: "0.8rem",
    alignItems: "center",
    textAlign: "center",
  },
  gridContainer: {
    display: "flex",
    height: "20rem",
    justifyContent: "center",
    marginTop: "0",
    marginBottom: "0",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      height: "22rem",

      marginBottom: "1rem",
    },
  },
  imageContainer: {
    justifyContent: "center",
    width: "50%",
    // border: "black solid 1px",
    backgroundColor: "white",
    // padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      // height: "18rem",
      display: "none",
    },
  },
  textContainer: {
    padding: "1rem 5rem",
    justifyContent: "center",
    width: "50%",
    height: "100%",
    zIndex: 2,
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 4rem",
      marginTop: 0,
    },
    [theme.breakpoints.down("md")]: {
      padding: "1.5rem",
      paddingTop: 0,
      // marginTop: 0,
      // border: "black solid 1px",
    },

    backgroundColor: "white",
    // padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      // paddingTop: "1rem",
      padding: "1rem",
      paddingBottom: "2rem",
      width: "98%",
      // height: "25rem",
      marginTop: "1rem",
      marginBottom: "2rem",
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Head>
        <title key="title">About | Yongduck Jin</title>
        <meta
          name="description"
          key={"description"}
          content={`Welcome to my website : ) `}
        />
        <meta
          property="og:title"
          content={`Full Web Developer with passion and skills | Yongduck Jin`}
        />

        <meta
          key={"og:description"}
          property="og:description"
          content={`Full Web Developer with passion and skills | Yongduck Jin`}
        />
        <meta
          key={"og:url"}
          property="og:url"
          content={`yongduckjin.com/about`}
        />
        <link
          key={"canonical"}
          rel="canonical"
          href={`yongduckjin.com/about`}
        />
      </Head>
      <Grid container className={classes.gridContainer}>
        <Grid item className={classes.imageContainer}>
          <img
            className={classes.image}
            src="../about/sky.jpg"
            alt="About me"
          />
        </Grid>
        <Paper elevation={1} className={classes.textContainer}>
          {" "}
          <>
            <Laser string={"About_Me"} />

            <p>
              I am Jin. A super friendly person who always treat even a serious
              problem with a sense of humor. If you are not too serious and not
              too aggressive, we can join forces and create something meaningful
              and inspiring.
            </p>
            <p>
              I am always opend to new opportunities and challenges. Feel free
              to contact me :)
            </p>
          </>
        </Paper>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Paper elevation={1} className={classes.textContainer}>
          <Laser string={"Programming"} />
          <p>
            A full stack javascript developer. I started programming with HTML,
            PHP, CSS and Python to build a website for my own company. Since
            then, I have been focusing on Javascript because I belive all
            companies would be tech companies and most application would run on
            the web.
          </p>

          <p>
            As a developer, I have a principle. Challange myself to build an
            application that I have to build, that I want to build, but not just
            that I can build.
          </p>
        </Paper>
        <Grid item className={classes.imageContainer}>
          <img
            className={classes.image}
            src="/about/programming.jpg"
            alt="Programming"
          />
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Grid item className={classes.imageContainer}>
          <img
            className={classes.image}
            src="/about/jorney.jpg"
            alt="Journey"
          />
        </Grid>
        <Paper elevation={1} className={classes.textContainer}>
          <Laser string={"JOURNEY"} />

          <p>
            My Journey as a developer started building a website for my own
            company. At that time I was working as a registered nurse as well
            and I realized that a number of clinical and non-clinical issues can
            be solved with those skills that I learn from building a website.
            That was the beginning of my journey as a developer.
          </p>

          <p>But, too be honest, I am doing this because it is just fun 🙃</p>
        </Paper>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Paper
          // variant="elevation"
          elevation={1}
          className={classes.textContainer}
        >
          {" "}
          <Laser string={"LIKES"} />
          <p>
            Travel🧳, MMA🥊, Sugar🍬, Coke, Letro video games🕹️, SEGA, SF
            movies, Soccer⚽, Taxi Driver🎞️, Virtual Fighter 1, Cain Velasquez,
            Dragon Age 3🗡️, Doom 2🔫, Cowboy Bebop, Cats🐱, Murakami Haruki📘,
            SLAM DUNK📕, Planetes, Stephen King, GUNMU, Ghost in the Shell🎞️,
            Purple Rain🎸, November Rain🎵, Mushishi📖, Cherry MX red switch ⌨️,
            Saturday, Sunday, and Javascript💻.
          </p>
        </Paper>
        <Grid item className={classes.imageContainer}>
          <img className={classes.image} src="/about/likes.jpg" alt="Likes" />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
