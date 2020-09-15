import React from "react";
import useStyles from "./ProgressBar.styles";

export interface IProgressBarProps {
  progress: number;
  background_color?: string;
  progress_color?: string;
  text?: string;
  classNames?: string;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const { progress, background_color, progress_color, text } = props;

  const classes = useStyles({
    backgroundColor: background_color,
    progressColor: progress_color,
    progress,
  });

  return (
    <React.Fragment>
      <div
        className={`${classes.root} ${
          props.classNames ? props.classNames : ""
        }`}
      >
        <div className={classes.progressBar}></div>
        {text && <div className={classes.title}>{text}</div>}
      </div>
    </React.Fragment>
  );
}
