import CircularProgressBarScores from "./CircularProgressBarScores";
import React from "react";
import { useScores } from "context/ScoresContextProvider";
import useStyles from "./ScoresPanel.styles";

export default function ScoresPanels(): JSX.Element {
  const {
    crewmateWins,
    crewmateLosses,
    impostorWins,
    impostorLosses,
  } = useScores()!; // eslint-disable-line

  const classes = useStyles();

  const getRate = (wins: number, games: number): number => {
    return games > 0 ? Math.floor((wins / games) * 100) : 100;
  };

  const overallWins = crewmateWins + impostorWins;
  const overallLosses = crewmateLosses + impostorLosses;
  const overallGames = overallWins + overallLosses;
  const overallRate = getRate(overallWins, overallGames);
  const crewmateGames = crewmateWins + crewmateLosses;
  const crewmateRate = getRate(crewmateWins, crewmateGames);
  const impostorGames = impostorWins + impostorLosses;
  const impostorRate = getRate(impostorWins, impostorGames);

  return (
    <div className={classes.ScoresPanel}>
      <CircularProgressBarScores
        {...{
          overallRate,
          overallWins,
          overallLosses,
          crewmateRate,
          crewmateWins,
          crewmateLosses,
          impostorRate,
          impostorWins,
          impostorLosses,
        }}
      />
    </div>
  );
}
