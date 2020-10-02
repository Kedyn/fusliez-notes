import CircularProgressBar from "components/common/CircularProgressBar";
import { ITheme } from "utils/types";
import React from "react";
import { useData } from "context";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";

export default function Scores(): JSX.Element {
  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
  } = useData()!; // eslint-disable-line

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
    <div className={classes.root}>
      <div className={classes.progressBarContainer}>
        <span className={classes.title}>Overall</span>

        <CircularProgressBar
          progress={overallRate}
          backgroundColor={theme.neutralBackgroundColor}
          progressColor={theme.neutralTextColor}
          className={classes.progress}
          wins={overallWins}
          losses={overallLosses}
        >
          <span>{`${overallRate}%`}</span>
          <span
            className={classes.scores}
          >{`${overallWins}W-${overallLosses}L`}</span>
        </CircularProgressBar>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>Innocent</span>
        <CircularProgressBar
          progress={innocentRate}
          backgroundColor={theme.innocentBackgroundColor}
          progressColor={theme.innocentTextColor}
          className={classes.progress}
          wins={innocentWins}
          losses={innocentLosses}
        >
          <span>{`${innocentRate}%`}</span>
          <span
            className={classes.scores}
          >{`${innocentWins}W-${innocentLosses}L`}</span>
        </CircularProgressBar>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>Impostor</span>

        <CircularProgressBar
          progress={impostorRate}
          backgroundColor={theme.impostorBackgroundColor}
          progressColor={theme.impostorTextColor}
          className={classes.progress}
          wins={impostorWins}
          losses={impostorLosses}
        >
          <span>{`${impostorRate}%`}</span>
          <span
            className={classes.scores}
          >{`${impostorWins}W-${impostorLosses}L`}</span>
        </CircularProgressBar>
      </div>
    </div>
  );
}
