import "react-circular-progressbar/dist/styles.css";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import React from "react";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./CircularProgressBar.styles";
import { hexToRGB } from "utils/colorConverter";

export interface ICircularProgressBarProps {
  progress: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CircularProgressBar(
  props: ICircularProgressBarProps
): JSX.Element {
  const { progress, color, children } = props;
  const { isMobile, orientation } = useMobile()!; // eslint-disable-line

  const classes = useStyles({
    color,
    progress,
    isMobile,
    orientation,
  });

  function buildTrailColor(color: string): string {
    return `rgba(${hexToRGB(color)}, 0.5)`;
  }

  return (
    <CircularProgressbarWithChildren
      value={progress}
      className={classes.CircularBar}
      counterClockwise={true}
      styles={{
        root: {
          filter: `drop-shadow(0 0 0.25rem ${buildTrailColor(color)})`,
        },
        path: {
          stroke: color,
        },
        trail: {
          stroke: buildTrailColor(color),
        },
      }}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
}
