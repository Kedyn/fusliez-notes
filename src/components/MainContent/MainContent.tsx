import PlayersPanel from "components/PlayersPanel";
import React from "react";
import ScoresPanel from "components/ScoresPanel";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./MainContent.styles";

export default function MainContent(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile });

  return (
    <div id="main" className={classes.MainContent}>
      {!isMobile && <ScoresPanel />}
      <PlayersPanel />
    </div>
  );
}
