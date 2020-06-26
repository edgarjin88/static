import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

// for tabs
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AppsIcon from "@material-ui/icons/Apps";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";

/// for popover

import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";

///List
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
    name: "Portfolio Website",
    link: "/portfolio",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Sumontee.com",
    link: "/sumontee",
    activeIndex: 1,
    selectedIndex: 1,
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
    maxWidth: "100vw",
  },
  appBar: {
    backgroundColor: "white",
    margin: 0,
    color: "black",
    display: "flex",
    alignItems: "center",
  },

  toolBar: {
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
  tabs: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    maxWidth: "100vw",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
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
    ...theme.typography.tab,
    color: "black",
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
  const [anchorEl, setAnchorEl] = useState(null);

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
              aria-label="icon label tabs"
            >
              <Tab
                onClick={(e) => handleTabClick(e, "/")}
                icon={<HomeIcon />}
                label="HOME"
              />
              <Tab
                icon={<AccountTreeIcon />}
                onClick={handleHover}
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
    </>
  );
}
