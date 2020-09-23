import React from "react";
import useStyles from "./Score.styles";

export interface IScoreProps {
  className?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Score(props: IScoreProps): JSX.Element {
  const classes = useStyles();

  const { className, ...other } = props;

  return (
    <React.Fragment>
      <input
        type="number"
        className={`${className ? className : ""} ${classes.input}`}
        {...other}
      />
    </React.Fragment>
  );
}
