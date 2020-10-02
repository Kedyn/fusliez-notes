import "react-circular-progressbar/dist/styles.css";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { MobileContext } from "components/App";
import React from "react";
import useStyles from "./CircularProgressBar.styles";

export interface ICircularProgressBarProps {
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CircularProgressBar(
  props: ICircularProgressBarProps
): JSX.Element {
  const { progress, backgroundColor, progressColor, children } = props;
  const { isMobile, orientation } = React.useContext(MobileContext);

  const classes = useStyles({
    backgroundColor,
    progressColor,
    progress,
    isMobile,
    orientation,
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
      {children}
    </CircularProgressbarWithChildren>
  );
}
