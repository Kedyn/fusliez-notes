import React from "react";
import useStyles from "./ProgressBar.styles";

export interface IProgressBarProps {
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  text?: string;
  classNames?: string;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const { progress, backgroundColor, progressColor, text } = props;

  const classes = useStyles({
    backgroundColor: backgroundColor,
    progressColor: progressColor,
    progress,
  });

  console.log(backgroundColor);

  return (
    <div
      className={`${classes.root} ${props.classNames ? props.classNames : ""}`}
    >
      <div className={classes.progressBar} />
      <div className={classes.title}>{text}</div>
    </div>
  );
}
