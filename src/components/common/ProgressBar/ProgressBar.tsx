import React from "react";
import useStyles from "./ProgressBar.styles";
import { MobileContext } from "components/App";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export interface IProgressBarProps {
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  className?: string;
  wins?: number;
  losses?: number;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const { progress, backgroundColor, progressColor, wins, losses } = props;
  const { isMobile } = React.useContext(MobileContext);

  const classes = useStyles({
    backgroundColor,
    progressColor,
    progress,
    isMobile,
  });

  return (
    <CircularProgressbarWithChildren
      value={progress}
      className={classes.circularBar}
      styles={buildStyles({
        textColor: progressColor,
        pathColor: progressColor,
        trailColor: backgroundColor,
      })}
    >
      <span>{`${progress}%`}</span>
      <span className={classes.title}>{`${wins}W-${losses}L`}</span>
    </CircularProgressbarWithChildren>
  );
}
