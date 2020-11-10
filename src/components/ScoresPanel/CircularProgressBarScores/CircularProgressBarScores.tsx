import CircularProgressBar from "./CircularProgressBar";
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
  crewmateRate: number;
  crewmateWins: number;
  crewmateLosses: number;
  impostorRate: number;
  impostorWins: number;
  impostorLosses: number;
}

export default function CircularProgressBarScores(
  props: ICircularProgressBarScoresProps
): JSX.Element {
  const { t, i18n } = useTranslation();

  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const {
    overallRate,
    overallWins,
    overallLosses,
    crewmateRate,
    crewmateWins,
    crewmateLosses,
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
            classes.ProgressBarTitleCrewmate
          )}
        >
          {t("main.crewmate")}
        </span>

        <div className={classes.CircleSecondary}>
          <CircularProgressBar
            progress={crewmateRate}
            color={theme.crewmateColorPrimary}
            className={classes.progress}
          >
            <span
              className={classes.CirclePercentage}
            >{`${crewmateRate}%`}</span>
            <span
              style={{ direction: i18n.dir() }}
              className={classes.CircleScores}
            >{`${crewmateWins}${t("main.w")}-${crewmateLosses}${t(
              "main.l"
            )}`}</span>
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
              style={{ direction: i18n.dir() }}
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
            color={theme.imposterColorPrimary}
            className={classes.progress}
          >
            <span
              className={classes.CirclePercentage}
            >{`${impostorRate}%`}</span>
            <span
              style={{ direction: i18n.dir() }}
              className={classes.CircleScores}
            >{`${impostorWins}${t("main.w")}-${impostorLosses}${t(
              "main.l"
            )}`}</span>
          </CircularProgressBar>
        </div>
      </div>
    </React.Fragment>
  );
}
