import React from "react";
import useStyles from "./ProgressBar.styles";

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
    <div
      className={`${classes.root} ${props.className ? props.className : ""}`}
    >
      <div className={classes.progressBar}></div>
    </div>
  );
}
