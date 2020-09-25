import React from "react";
import useStyles from "./ProgressBar.styles";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export interface IProgressBarProps {
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  className?: string;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const { progress, backgroundColor, progressColor } = props;

  const classes = useStyles({
    backgroundColor,
    progressColor,
    progress,
  });

  return (
    // <div
    //   className={`${classes.root} ${props.className ? props.className : ""}`}
    // >
    //   <div className={classes.progressBar}></div>
    // </div>
    <CircularProgressbar
      value={progress}
      text={`${progress}%`}
      className={classes.circularBar}
      styles={buildStyles({
        textColor: progressColor,
        pathColor: progressColor,
        trailColor: backgroundColor,
      })}
    />
  );
}
