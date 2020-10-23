import "react-circular-progressbar/dist/styles.css";

import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import React from "react";
import { hexToRGB } from "utils/colorConverter";
import { useSelector } from "react-redux";
import useStyles from "./CircularProgressBar.styles";

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

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const classes = useStyles({
    color,
    progress,
    isMobile,
    orientation,
  });

  function buildTrailColor(color: string): string {
    return `rgba(${hexToRGB(color)}, 0.3)`;
  }

  return (
    <CircularProgressbarWithChildren
      value={progress}
      className={classes.CircularBar}
      counterClockwise={true}
      styles={{
        path: {
          stroke: color,
        },
        trail: {
          stroke: buildTrailColor(String(color)),
        },
      }}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
}
