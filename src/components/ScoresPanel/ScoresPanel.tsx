import {
  getCrewmateLosses,
  getCrewmateWins,
  getImpostorLosses,
  getImpostorWins,
} from "store/slices/ScoresSlice";

import CircularProgressBarScores from "./CircularProgressBarScores";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./ScoresPanel.styles";

export default function ScoresPanels(): JSX.Element {
  const crewmateWins = useSelector(getCrewmateWins);
  const crewmateLosses = useSelector(getCrewmateLosses);
  const impostorWins = useSelector(getImpostorWins);
  const impostorLosses = useSelector(getImpostorLosses);

  const classes = useStyles();

  const getRate = (wins: number, games: number): number => {
    return games > 0 ? Math.floor((wins / games) * 100) : 100;
  };

  const crewmateWinsNumber = crewmateWins ? crewmateWins : 0;
  const crewmateLossesNumber = crewmateLosses ? crewmateLosses : 0;
  const impostorWinsNumber = impostorWins ? impostorWins : 0;
  const impostorLossesNumber = impostorLosses ? impostorLosses : 0;

  const overallWins = crewmateWinsNumber + impostorWinsNumber;
  const overallLosses = crewmateLossesNumber + impostorLossesNumber;
  const overallGames = overallWins + overallLosses;
  const overallRate = getRate(overallWins, overallGames);
  const crewmateGames = crewmateWinsNumber + crewmateLossesNumber;
  const crewmateRate = getRate(crewmateWinsNumber, crewmateGames);
  const impostorGames = impostorWinsNumber + impostorLossesNumber;
  const impostorRate = getRate(impostorWinsNumber, impostorGames);

  return (
    <div className={classes.ScoresPanel}>
      <CircularProgressBarScores
        {...{
          overallRate,
          overallWins,
          overallLosses,
          crewmateRate,
          crewmateWins: crewmateWinsNumber,
          crewmateLosses: crewmateLossesNumber,
          impostorRate,
          impostorWins: impostorWinsNumber,
          impostorLosses: impostorLossesNumber,
        }}
      />
    </div>
  );
}
