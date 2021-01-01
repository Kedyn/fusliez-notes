import React from "react";
import useStyles from "./MobileLayout.styles";

export default function MobileLayout(): JSX.Element {
  const classes = useStyles();

  return <div className={classes.MobileLayout}>Component content</div>;
}
