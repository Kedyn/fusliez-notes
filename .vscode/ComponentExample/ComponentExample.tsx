import React from "react";
import useStyles from "./ComponentExample.styles";

export interface IComponentExampleProps {}

export default function ComponentExample(
  props: IComponentExampleProps
): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}></div>
    </React.Fragment>
  );
}
