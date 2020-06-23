import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

// for tabs
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AppsIcon from "@material-ui/icons/Apps";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import { TabScrollButton } from "@material-ui/core";

/// for popover

import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

///List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

//
import { useRouter } from "next/router";

const menuOptions = [
  {
    name: "Lemonstreaming.com",
    link: "/lemonstreaming",
    activeIndex: 1,
    selectedIndex: 0,
  },
  {
    name: "Sumontee.com",
    link: "/sumontee",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "Portfolio Website",
    link: "/portfolio",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Launinark.com",
    link: "/launinark",
    activeIndex: 1,
    selectedIndex: 3,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    // width: "200vw",
    // min
  },
  appBar: {
    backgroundColor: "white",
    width: "100%",
    // height: "4rem",
    color: "black",
    display: "flex",
    alignItems: "center",
  },

  toolBar: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    // height: "4rem",
  },
  tabs: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    // fontSize: "1em",
    // height: "4rem",
    "&: svg": {
      color: "black",
      // fontSize: "1em",
    },
  },

  typography: {
    padding: theme.spacing(2),
  },
  popOver: {
    margin: 0,
    borderRadius: 0,
    padding: 0,
  },
  menu: {
    backgroundColor: "white",
    color: "black",
    margin: 0,
    zIndex: 1302,
  },
  menuItem: {
    // ...theme.typography.h1,
    color: "black",
    // fontSize: "2rem",
    // fontWeight: "bold",
    backgroundColor: "white",
    borderBottom: "1px solid black",
    margin: 0,
    opacity: 1,
    borderRadius: 0,
    "&:hover": {
      color: "white",
      backgroundColor: "black",
      opacity: 1,
    },
  },
  // toolbarMargin: {
  //   ...theme.mixins.toolbar,
  //   marginBottom: "3em",
  //   [theme.breakpoints.down("md")]: {
  //     marginBottom: "2em",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     marginBottom: "1.25em",
  //   },
  // },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const classes = useStyles();
  const Router = useRouter();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for poper
  const handleClick = (event) => {
    console.log("set encor :", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("close fired : ");
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const Pop = (
    <Popover
      classes={{ root: classes.popOver }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Paper>
        <MenuList
          onMouseLeave={handleClose}
          disablePadding
          autoFocusItem={false}
          id="simple-menu"
        >
          {menuOptions.map((option, i) => (
            <MenuItem
              classes={{ root: classes.menuItem }}
              key={`${option}${i}`}
              onClick={(e) => handleTabClick(e, option.link)}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Popover>
  );

  const handleTabClick = (e, arg) => {
    handleClose();
    Router.push(arg).then(() => window.scrollTo(0, 0));
  };

  const handleHover = (e) => {
    handleClick(e);
    handleChange(e, 1);
  };

  // 아이콘 숫자 차이 때문이ㅣㄴ듯 아이콘을 더 넣어 보자.
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab
                style={{ height: "2em" }}
                onClick={(e) => handleTabClick(e, "/")}
                icon={<HomeIcon />}
                label="HOME"
              />
              <Tab
                icon={<AccountTreeIcon />}
                // onClick={(e) => handleTabClick(e, "/projects")}
                onClick={handleHover}
                // onMouseLeave={handleClose}
                label="PROJECT"
              />
              <Tab
                icon={<AppsIcon />}
                onClick={(e) => handleTabClick(e, "/skills")}
                label="SKILLS"
              />
              <Tab
                icon={<EmojiPeopleIcon />}
                onClick={(e) => handleTabClick(e, "/about")}
                label="ABOUT"
              />
              <Tab
                icon={<MailIcon />}
                onClick={(e) => handleTabClick(e, "/contact")}
                label="CONTACT"
              />
            </Tabs>
            {Pop}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <div className={classes.toolbarMargin} /> */}
    </>
  );
}
