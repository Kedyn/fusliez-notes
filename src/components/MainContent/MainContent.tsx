import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import useStyles from "./MainContent.styles";

export default function MainContent(): JSX.Element {
  const classes = useStyles();

  return (
    <div id="main" className={classes.root}>
      <Scores />

      <PlayersSection />
    </div>
  );
}
