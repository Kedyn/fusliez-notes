import {
  getCrewmateLosses,
  getCrewmateWins,
  getImpostorLosses,
  getImpostorWins,
} from "store/slices/ScoresSlice";

import React from "react";
import ScorePane from "components/ScorePane";
import { useSelector } from "react-redux";
import useStyles from "./ScoresPanel.styles";

export default function ScoresPanel(): JSX.Element {
  const classes = useStyles();

  const crewmateWins = useSelector(getCrewmateWins);
  const crewmateLosses = useSelector(getCrewmateLosses);
  const impostorWins = useSelector(getImpostorWins);
  const impostorLosses = useSelector(getImpostorLosses);

  const crewmateWinsNumber = crewmateWins ? crewmateWins : 0;
  const crewmateLossesNumber = crewmateLosses ? crewmateLosses : 0;
  const impostorWinsNumber = impostorWins ? impostorWins : 0;
  const impostorLossesNumber = impostorLosses ? impostorLosses : 0;

  const overallWins = crewmateWinsNumber + impostorWinsNumber;
  const overallLosses = crewmateLossesNumber + impostorLossesNumber;

  const scorePanes = [
    {
      title: "main.crewmate",
      wins: crewmateWinsNumber,
      losses: crewmateLossesNumber,
    },
    {
      title: "main.overall",
      wins: overallWins,
      losses: overallLosses,
    },
    {
      title: "main.impostor",
      wins: impostorWinsNumber,
      losses: impostorLossesNumber,
    },
  ];

  return (
    <React.Fragment>
      <div className={classes.ScoresPanel}>
        {scorePanes.map((scorePane, index) => (
          <ScorePane key={index} {...scorePane} />
        ))}
      </div>
    </React.Fragment>
  );
}
