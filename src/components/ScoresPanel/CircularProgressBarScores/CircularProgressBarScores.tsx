import CircularProgressBar from "components/common/CircularProgressBar";
import { ITheme } from "utils/types";
import React from "react";
import cx from "classnames";
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
    <React.Fragment>
      <div className={classes.ProgressBar}>
        <span
          className={cx(
            classes.ProgressBarTitle,
            classes.ProgressBarTitleInnocent
          )}
        >
          {t("main.innocent")}
        </span>

        <div className={classes.CircleSecondary}>
          <CircularProgressBar
            progress={innocentRate}
            color={theme.innocentColor}
            className={classes.progress}
          >
            <span
              className={classes.CirclePercentage}
            >{`${innocentRate}%`}</span>
            <span className={classes.CircleScores}>{`${innocentWins}${t(
              "main.w"
            )}-${innocentLosses}${t("main.l")}`}</span>
          </CircularProgressBar>
        </div>
      </div>

      <div className={classes.ProgressBar}>
        <span
          className={cx(
            classes.ProgressBarTitle,
            classes.ProgressBarTitleOverall
          )}
        >
          {t("main.overall")}
        </span>

        <div className={classes.CirclePrimary}>
          <CircularProgressBar
            progress={overallRate}
            color={theme.neutralColor}
            className={classes.progress}
          >
            <span
              className={cx(
                classes.CirclePercentage,
                classes.CirclePercentagePrimary
              )}
            >{`${overallRate}%`}</span>
            <span
              className={cx(classes.CircleScores, classes.CircleScoresPrimary)}
            >{`${overallWins}${t("main.w")}-${overallLosses}${t(
              "main.l"
            )}`}</span>
          </CircularProgressBar>
        </div>
      </div>

      <div className={classes.ProgressBar}>
        <span
          className={cx(
            classes.ProgressBarTitle,
            classes.ProgressBarTitleImpostor
          )}
        >
          {t("main.impostor")}
        </span>

        <div className={classes.CircleSecondary}>
          <CircularProgressBar
            progress={impostorRate}
            color={theme.imposterColor}
            className={classes.progress}
          >
            <span
              className={classes.CirclePercentage}
            >{`${impostorRate}%`}</span>
            <span className={classes.CircleScores}>{`${impostorWins}${t(
              "main.w"
            )}-${impostorLosses}${t("main.l")}`}</span>
          </CircularProgressBar>
        </div>
      </div>
    </React.Fragment>
  );
}
