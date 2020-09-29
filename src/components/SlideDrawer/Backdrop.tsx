import React from "react";
import useStyles from "./Backdrop.styles";

export default function Backdrop(): JSX.Element {
  const classes = useStyles();

  return <div className={classes.backdrop} />;
}
