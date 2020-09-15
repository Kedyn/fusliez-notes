import React from "react";
import useStyles from "./Score.styles";

export interface IScoreProps {
  title: string;
  classNames?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Score(props: IScoreProps): JSX.Element {
  const classes = useStyles();

  const { classNames, ...other } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <input
          type="number"
          className={`${classNames ? classNames : ""} ${classes.input}`}
          {...other}
        />

        <div className={classes.title}>{props.title}</div>
      </div>
    </React.Fragment>
  );
}
