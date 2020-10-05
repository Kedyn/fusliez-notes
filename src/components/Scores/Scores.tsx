import CircularProgressBarScores from "./CircularProgressBarScores";
import ProgressBarScores from "./ProgressBarScores";
import React from "react";
import { useScores } from "context/ScoresContextProvider";
import { useSettings } from "context/SettingsContextProvider";

export default function Scores(): JSX.Element {
  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
  } = useScores()!; // eslint-disable-line
  const { scoresStyle } = useSettings()!; // eslint-disable-line

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

  if (scoresStyle === "circles") {
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

  return (
    <ProgressBarScores
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
