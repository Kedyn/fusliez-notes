import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import { useData } from "context";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function Scores(): JSX.Element {
  const theme = useTheme<ITheme>();
  const { t } = useTranslation();
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
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>{t("main.overall")}</span>
          <span>
            {overallWins}
            {t("main.w")} - {overallLosses}
            {t("main.l")}
          </span>
        </div>
        <ProgressBar
          progress={overallRate}
          backgroundColor={theme.neutralBackgroundColor}
          progressColor={theme.neutralTextColor}
          className={classes.progress}
        />

        <div className={classes.title}>
          <span>{t("main.innocent")}</span>
          <span>
            {innocentWins}
            {t("main.w")} - {innocentLosses}
            {t("main.l")}
          </span>
        </div>
        <ProgressBar
          progress={innocentRate}
          backgroundColor={theme.innocentBackgroundColor}
          progressColor={theme.innocentTextColor}
          className={classes.progress}
        />

        <div className={classes.title}>
          <span>{t("main.impostor")}</span>
          <span>
            {impostorWins}
            {t("main.w")} - {impostorLosses}
            {t("main.l")}
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
