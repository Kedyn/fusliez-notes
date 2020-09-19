import Header from "components/Header";
import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import useStyles from "./MainContent.styles";

export default function MainContent(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Scores />

      <PlayersSection />
    </div>
  );
}
