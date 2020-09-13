import React from "react";
import useStyles from "./Score.styles";

export interface IScoreProps {
  title: string;
}

export default function Score(props: IScoreProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <input
          type="number"
          min={0}
          defaultValue={0}
          className={classes.input}
        />

        <div className={classes.title}>{props.title}</div>
      </div>
    </React.Fragment>
  );
}
