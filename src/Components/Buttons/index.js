import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#34E0AA",
    color: "#000",
    "&:hover": {
      background: "#3beaa9",
    },
  },
}));

export function Buttons({ handleClickOpen, title, type }) {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        type={type}
        fullWidth
        onClick={() => handleClickOpen()}
      >
        {title}
      </Button>
    </>
  );
}
