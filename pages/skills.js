import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ReactIcon from "../public/skills/react.svg";

// 아이콘들을 채워서 스킬들의 리스트를 만들기.
// 아이콘들 정렬하고 플렉서블 하고 리스폰시브 하게 만들기.
//리펙토링 가능하면 코드양 줄이기.

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: "red",
    height: "80vh",
    display: "flex",
    backgroundColor: "red",
    justifyContent: "center",
    margin: 0,
    marginTop: "5px",
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
    backgroundColor: "grey",
    justifyContent: "center",
    width: "80%",
  },
  secondContainer: {
    justifyContent: "center",
  },
  gridItem: {
    border: "1px solid black",
    backgroundColor: "yellow",
  },
}));

// 양 사이드는 버블 날라가는 것.
// 중앙은 빛이 돌아가는 걸로.

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid container className={classes.secondContainer} item>
          <Grid className={classes.gridItem}>
            {" "}
            <ReactIcon />
          </Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>

          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
          <Grid className={classes.gridItem}> test</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
