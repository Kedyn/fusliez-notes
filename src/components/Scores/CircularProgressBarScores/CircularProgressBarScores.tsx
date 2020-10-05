import CircularProgressBar from "components/common/CircularProgressBar";
import { ITheme } from "utils/types";
import React from "react";
import useStyles from "./CircularProgressBarScores.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export interface ICircularProgressBarScoresProps {
  overallRate: number;
  overallWins: number;
  overallLosses: number;
  innocentRate: number;
  innocentWins: number;
  innocentLosses: number;
  impostorRate: number;
  impostorWins: number;
  impostorLosses: number;
}

export default function CircularProgressBarScores(
  props: ICircularProgressBarScoresProps
): JSX.Element {
  const { t } = useTranslation();

  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const {
    overallRate,
    overallWins,
    overallLosses,
    innocentRate,
    innocentWins,
    innocentLosses,
    impostorRate,
    impostorWins,
    impostorLosses,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.innocent")}</span>

        <div className={classes.smallCircle}>
          <CircularProgressBar
            progress={innocentRate}
            backgroundColor={theme.innocentBackgroundColor}
            progressColor={theme.innocentTextColor}
            className={classes.progress}
          >
            <span className={classes.percentage}>{`${innocentRate}%`}</span>
            <span className={classes.scores}>{`${innocentWins}${t(
              "main.w"
            )}-${innocentLosses}${t("main.l")}`}</span>
          </CircularProgressBar>
        </div>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.overall")}</span>

        <div className={classes.bigCircle}>
          <CircularProgressBar
            progress={overallRate}
            backgroundColor={theme.neutralBackgroundColor}
            progressColor={theme.neutralTextColor}
            className={classes.progress}
          >
            <span className={classes.bigPercentage}>{`${overallRate}%`}</span>
            <span className={classes.bigScores}>{`${overallWins}${t(
              "main.w"
            )}-${overallLosses}${t("main.l")}`}</span>
          </CircularProgressBar>
        </div>
      </div>

      <div className={classes.progressBarContainer}>
        <span className={classes.title}>{t("main.impostor")}</span>

        <div className={classes.smallCircle}>
          <CircularProgressBar
            progress={impostorRate}
            backgroundColor={theme.impostorBackgroundColor}
            progressColor={theme.impostorTextColor}
            className={classes.progress}
          >
            <span className={classes.percentage}>{`${impostorRate}%`}</span>
            <span className={classes.scores}>{`${impostorWins}${t(
              "main.w"
            )}-${impostorLosses}${t("main.l")}`}</span>
          </CircularProgressBar>
        </div>
      </div>
    </div>
  );
}
