import React from "react";
import useStyles from "./Score.styles";

export interface IScoreProps {
  className?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Score(props: IScoreProps): JSX.Element {
  const classes = useStyles();

  const { ...other } = props;

  return <input type="number" min={0} className={classes.Score} {...other} />;
}
