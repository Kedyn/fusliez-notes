import React from "react";
import useStyles from "./Scores.styles";

export interface IScoresProps {}

export default function Scores(props: IScoresProps): JSX.Element {
  const classes = useStyles();

  const rate = 70;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.progress}>
          <div
            className={classes.progressBar}
            style={{ width: `${rate}%` }}
          ></div>
          <div className={classes.title}>Win rate {rate}%</div>
        </div>
      </div>
    </React.Fragment>
  );
}
