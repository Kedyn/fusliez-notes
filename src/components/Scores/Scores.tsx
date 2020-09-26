import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
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

        <ProgressBar
          progress={overallRate}
          backgroundColor={theme.neutralBackgroundColor}
          progressColor={theme.neutralTextColor}
          className={classes.progress}
          wins={overallWins}
          losses={overallLosses}
        />
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>Innocent</span>
        <ProgressBar
          progress={innocentRate}
          backgroundColor={theme.innocentBackgroundColor}
          progressColor={theme.innocentTextColor}
          className={classes.progress}
          wins={innocentWins}
          losses={innocentLosses}
        />
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>Impostor</span>

        <ProgressBar
          progress={impostorRate}
          backgroundColor={theme.impostorBackgroundColor}
          progressColor={theme.impostorTextColor}
          className={classes.progress}
          wins={impostorWins}
          losses={impostorLosses}
        />
      </div>
    </div>
  );
}
