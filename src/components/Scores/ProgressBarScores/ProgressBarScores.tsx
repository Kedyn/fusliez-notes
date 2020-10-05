import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import useStyles from "./ProgressBarScores.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export interface IProgressBarScoresProps {
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

export default function ProgressBarScores(
  props: IProgressBarScoresProps
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
      <div className={classes.title}>
        <span>{t("main.overall")}</span>
        <span>
          {`${overallWins}${t("main.w")}-${overallLosses}${t("main.l")}`}
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
          {`${innocentWins}${t("main.w")}-${innocentLosses}${t("main.l")}`}
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
          {`${impostorWins}${t("main.w")}-${impostorLosses}${t("main.l")}`}
        </span>
      </div>
      <ProgressBar
        progress={impostorRate}
        backgroundColor={theme.impostorBackgroundColor}
        progressColor={theme.impostorTextColor}
        className={classes.progress}
      />
    </div>
  );
}
