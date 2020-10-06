import CircularProgressBarScores from "./CircularProgressBarScores";
import React from "react";
import { useScores } from "context/ScoresContextProvider";

export default function ScoresPanels(): JSX.Element {
  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
  } = useScores()!; // eslint-disable-line

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
  );
}
