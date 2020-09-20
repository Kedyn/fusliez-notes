import Header from "components/Header";
import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import useStyles from "./MainContent.styles";

export default function MainContent({
  isMobile,
}: {
  isMobile: boolean;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      {!isMobile && <Scores isMobile={isMobile} />}

      <PlayersSection />
    </div>
  );
}
