import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    // height: "20rem",
    overflow: "hidden",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "radial-gradient(#1a1a1a, #000)",
  },
  h1: {
    "&:hover": {
      animation: "$laser 1.3s cubic-bezier(0.4, 1.4, 0.75, 0.9) forwards",
      color: "white",
      background: "radial-gradient(#1a1a1a, #000)",
    },
    font: "300 50px/1",
    color: "black",
    whiteSpace: "nowrap",
    " & > span": {
      // display: "hidden",
      opacity: 0,
      display: "inline-block",
      animation: "$laser 1.7s cubic-bezier(0.4, 1.4, 0.75, 0.9) forwards",
    },
    " & > span:nth-child(1)": {
      animationDelay: " 0.25s",
    },
    " & > span:nth-child(2)": {
      animationDelay: " 0.3s",
    },
    " & > span:nth-child(3)": {
      animationDelay: " 0.45s",
    },
    " & > span:nth-child(4)": {
      animationDelay: " 0.6s",
    },
    " & > span:nth-child(5)": {
      animationDelay: " 0.75s",
    },
    " & > span:nth-child(6)": {
      animationDelay: " 0.9s",
    },
    " & > span:nth-child(7)": {
      animationDelay: " 1.1s",
    },
    " & > span:nth-child(8)": {
      animationDelay: " 1.2s",
    },
    " & > span:nth-child(9)": {
      animationDelay: " 1.6s",
    },
    " & > span:nth-child(10)": {
      animationDelay: " 1.8s",
    },
    " & > span:nth-child(11)": {
      animationDelay: " 2s",
    },
  },
  "@keyframes laser": {
    "0%": {
      opacity: "0.3",
    },
    "5%": {
      transform: "scaleX(8000)",
      color: "white",
      opacity: ".8",
    },
    "15%": {
      transform: "scaleX(1)",
      opacity: "1",
      coor: "white",
    },
    "100%": {
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
        {stringList.map((el, i) => {
          return <span key={i}>{el}</span>;
        })}
      </h1>
    </div>
  );
};

export default Lazer;
