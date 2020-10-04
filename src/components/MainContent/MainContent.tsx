import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./MainContent.styles";

export default function MainContent(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile });

  return (
    <div id="main" className={classes.root}>
      {!isMobile && <Scores />}
      <PlayersSection />
    </div>
  );
}
