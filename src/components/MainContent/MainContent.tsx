import React from "react";
import ScoresPanel from "components/ScoresPanel";
import Sections from "components/Sections";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./MainContent.styles";

export default function MainContent(): JSX.Element {
  const isMobile = useSelector(getIsMobile);

  const classes = useStyles({ isMobile });

  return (
    <div id="main" className={classes.MainContent}>
      {!isMobile && <ScoresPanel />}

      <Sections />
    </div>
  );
}
