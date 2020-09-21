import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import { useData } from "context";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";

export default function Scores(): JSX.Element {
  const theme = useTheme<ITheme>();
  const classes = useStyles();

  // eslint-disable-next-line
  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
    setInnocentWins,
    setInnocentLosses,
    setImpostorWins,
    setImpostorLosses,
  } = useData()!;

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
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>Overall</span>
          <span>
            {overallGames}W - {overallLosses}L
          </span>
        </div>
        <ProgressBar
          progress={overallRate}
          backgroundColor={theme.neutralBackgroundColor}
          progressColor={theme.neutralTextColor}
          className={classes.progress}
        />

        <div className={classes.title}>
          <span>Innocent</span>
          <span>
            {innocentWins}W - {innocentGames - innocentWins}L
          </span>
        </div>
        <ProgressBar
          progress={innocentRate}
          backgroundColor={theme.innocentBackgroundColor}
          progressColor={theme.innocentTextColor}
          className={classes.progress}
        />

        <div className={classes.title}>
          <span>Impostor</span>
          <span>
            {impostorWins}W - {impostorGames - impostorWins}L
          </span>
        </div>
        <ProgressBar
          progress={impostorRate}
          backgroundColor={theme.impostorBackgroundColor}
          progressColor={theme.impostorTextColor}
          className={classes.progress}
        />
      </div>
    </React.Fragment>
  );
}
