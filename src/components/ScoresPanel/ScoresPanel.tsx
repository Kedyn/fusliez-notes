import CircularProgressBarScores from "./CircularProgressBarScores";
import React from "react";
import { useScores } from "context/ScoresContextProvider";
import useStyles from "./ScoresPanel.styles";

export default function ScoresPanels(): JSX.Element {
  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
  } = useScores()!; // eslint-disable-line

  const classes = useStyles();

  const getRate = (wins: number, games: number): number => {
    return games > 0 ? Math.floor((wins / games) * 100) : 100;
  };

  const overallWins = innocentWins + impostorWins;
  const overallLosses = innocentLosses + impostorLosses;
  const overallGames = overallWins + overallLosses;
  const overallRate = getRate(overallWins, overallGames);
  const innocentGames = innocentWins + innocentLosses;
  const innocentRate = getRate(innocentWins, innocentGames);
  const impostorGames = impostorWins + impostorLosses;
  const impostorRate = getRate(impostorWins, impostorGames);

  return (
    <div className={classes.ScoresPanel}>
      <CircularProgressBarScores
        {...{
          overallRate,
          overallWins,
          overallLosses,
          innocentRate,
          innocentWins,
          innocentLosses,
          impostorRate,
          impostorWins,
          impostorLosses,
        }}
      />
    </div>
  );
}
