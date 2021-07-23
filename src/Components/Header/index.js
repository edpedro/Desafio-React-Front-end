import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import logo from "../../assets/Healthx.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginTop: "60px",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  img: {
    width: "200px",
  },
  button: {
    background: "#34E0AA",
    color: "#000",
    "&:hover": {
      background: "#3beaa9",
    },
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        mt={60}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src={logo} alt="Logo" className={classes.img} />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
