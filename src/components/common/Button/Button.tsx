import React from "react";
import useStyles from "./Button.styles";

export interface IButtonProps {}

export default function Button(props: IButtonProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}></div>
    </React.Fragment>
  );
}
