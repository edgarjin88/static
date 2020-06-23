import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "20rem",
    overflow: "hidden",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(#1a1a1a, #000)",
  },
  h1: {
    font: "300 50px/1",
    color: "whitesmoke",
    whiteSpace: "nowrap",
    " & > span": {
      display: "inline-block",
      animation: "$laser 2.5s cubic-bezier(0.4, 1.4, 0.75, 0.9) infinite",
    },
    " & > span:nth-child(1)": {
      animationDelay: " 0.25s",
    },
    " & > span:nth-child(2)": {
      animationDelay: " 0.5s",
    },
    " & > span:nth-child(3)": {
      animationDelay: " 0.75s",
      color: "red",
    },
    " & > span:nth-child(4)": {
      animationDelay: " 1s",
    },
    " & > span:nth-child(5)": {
      animationDelay: " 1.25s",
    },
    " & > span:nth-child(6)": {
      animationDelay: " 1.5s",
    },
    " & > span:nth-child(7)": {
      animationDelay: " 1.75s",
    },
    " & > span:nth-child(8)": {
      animationDelay: " 2s",
    },
    " & > span:nth-child(9)": {
      animationDelay: " 2.25s",
    },
    " & > span:nth-child(10)": {
      animationDelay: " 2.5s",
    },
  },
  "@keyframes laser": {
    "5%": {
      transform: "scaleX(5000)",
      opacity: ".1",
    },
    "15%": {
      transform: "scaleX(1)",
      opacity: "1",
    },
  },
}));
const Lazer = ({ string }) => {
  const classes = useStyles();
  const stringList = string.split("");
  return (
    <div className={classes.main}>
      <h1 className={classes.h1}>
        {stringList.map((el) => {
          return <span>el</span>;
        })}
      </h1>
    </div>
  );
};

export default Lazer;
