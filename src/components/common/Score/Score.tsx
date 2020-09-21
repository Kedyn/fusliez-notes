import React from "react";
import useStyles from "./Score.styles";

export interface IScoreProps {
  title: string;
  className?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Score(props: IScoreProps): JSX.Element {
  const classes = useStyles();

  const { className, ...other } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <input
          type="number"
          className={`${className ? className : ""} ${classes.input}`}
          {...other}
        />

        <div className={classes.title}>{props.title}</div>
      </div>
    </React.Fragment>
  );
}
