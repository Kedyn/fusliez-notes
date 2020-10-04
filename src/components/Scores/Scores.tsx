import CircularProgressBar from "components/common/CircularProgressBar";
import { ITheme } from "utils/types";
import React from "react";
import { useScores } from "context/ScoresContextProvider";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function Scores(): JSX.Element {
  const { t } = useTranslation();
  const theme = useTheme<ITheme>();
  const classes = useStyles();

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
    <div className={classes.root}>
      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.overall")}</span>

        <CircularProgressBar
          progress={overallRate}
          backgroundColor={theme.neutralBackgroundColor}
          progressColor={theme.neutralTextColor}
          className={classes.progress}
        >
          <span>{`${overallRate}%`}</span>
          <span className={classes.scores}>{`${overallWins}${t(
            "main.w"
          )}-${overallLosses}${t("main.l")}`}</span>
        </CircularProgressBar>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.innocent")}</span>
        <CircularProgressBar
          progress={innocentRate}
          backgroundColor={theme.innocentBackgroundColor}
          progressColor={theme.innocentTextColor}
          className={classes.progress}
        >
          <span>{`${innocentRate}%`}</span>
          <span className={classes.scores}>{`${innocentWins}${t(
            "main.w"
          )}-${innocentLosses}${t("main.l")}`}</span>
        </CircularProgressBar>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.impostor")}</span>

        <CircularProgressBar
          progress={impostorRate}
          backgroundColor={theme.impostorBackgroundColor}
          progressColor={theme.impostorTextColor}
          className={classes.progress}
        >
          <span>{`${impostorRate}%`}</span>
          <span className={classes.scores}>{`${impostorWins}${t(
            "main.w"
          )}-${impostorLosses}${t("main.l")}`}</span>
        </CircularProgressBar>
      </div>
    </div>
  );
}
