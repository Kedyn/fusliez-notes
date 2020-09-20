import React from "react";
import useStyles from "./ProgressBar.styles";

export interface IProgressBarProps {
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  text?: string;
  classNames?: string;
  winsAndGames: string;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const {
    progress,
    backgroundColor,
    progressColor,
    text,
    winsAndGames,
  } = props;

  const classes = useStyles({
    backgroundColor,
    progressColor,
    progress,
  });

  return (
    <div
      className={`${classes.root} ${props.classNames ? props.classNames : ""}`}
    >
      <div className={classes.titleContainer}>
        <span>{text}</span>
        <span>{winsAndGames}</span>
      </div>
      <div className={classes.progressBarContainer}>
        <div className={classes.progressBar} />
      </div>
    </div>
  );
}
