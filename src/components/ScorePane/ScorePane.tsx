import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { ITheme } from "utils/types/theme";
import React from "react";
import cx from "classnames";
import { hexToRGB } from "utils/colorConverter";
import useStyles from "./ScorePane.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export interface IScorePaneProps {
  title: string;
  wins: number;
  losses: number;
}

export default function ScorePane(props: IScorePaneProps): JSX.Element {
  const { title, wins, losses } = props;

  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const rate =
    wins + losses > 0 ? Math.floor((wins / (wins + losses)) * 100) : 100;

  const buildTrailColor = (color: string): string => {
    return `rgba(${hexToRGB(color)}, 0.3)`;
  };

  const color =
    title === "main.crewmate"
      ? theme.crewmateColorPrimary
      : title === "main.overall"
      ? theme.neutralColor
      : theme.impostorColorPrimary;

  return (
    <React.Fragment>
      <div className={classes.ScorePane}>
        <span
          className={cx({
            [classes.ScorePaneTitle]: true,
            [classes.ScorePaneTitleCrewmate]: title === "main.crewmate",
            [classes.ScorePaneTitleOverall]: title === "main.overall",
            [classes.ScorePaneTitleImpostor]: title === "main.impostor",
          })}
        >
          {t(title)}
        </span>

        <div
          className={cx({
            [classes.ScorePaneCircularProgressBarContainer]: true,
            [classes.ScorePanePrimary]: title === "main.overall",
            [classes.ScorePaneSecondary]: title !== "main.overall",
          })}
        >
          <CircularProgressbarWithChildren
            value={rate}
            className={classes.ScorePaneCircularProgressBar}
            counterClockwise={true}
            styles={{
              path: {
                stroke: color,
              },
              trail: {
                stroke: buildTrailColor(color),
              },
            }}
          >
            <span className={classes.ScorePanePercentage}>{`${rate}%`}</span>
            <span
              style={{ direction: i18n.dir() }}
              className={classes.ScorePaneScores}
            >{`${wins}${t("main.w")}-${losses}${t("main.l")}`}</span>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </React.Fragment>
  );
}
