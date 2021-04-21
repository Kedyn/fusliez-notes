import React from "react";
import useStyles from "./ElectronLayout.styles";

export default function ElectronLayout(): JSX.Element {
  const classes = useStyles();

  return <div className={classes.ElectronLayout}>Component content</div>;
}
