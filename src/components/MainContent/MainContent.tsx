import Header from "components/Header";
import PlayersSection from "components/PlayersSection";
import React from "react";
import Scores from "components/Scores";
import useStyles from "./MainContent.styles";

export interface IMainContentProps {}

export default function MainContent(props: IMainContentProps): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />

        <Scores />

        <PlayersSection />
      </div>
    </React.Fragment>
  );
}
