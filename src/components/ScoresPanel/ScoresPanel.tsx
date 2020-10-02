import Button from "components/common/Button";
import React from "react";
import WinsLossesButton from "../WinsLossesButton";
import { useData } from "context";
import useStyles from "./ScoresPanel.styles";
import { useTranslation } from "react-i18next";

export default function ScoresPanel({
  isMobile,
}: {
  isMobile: boolean;
}): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles({ isMobile });

  const {
    theme,
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
    resetPlayersPositions,
    resetAll,
    setImpostorWins,
    setImpostorLosses,
    setInnocentWins,
    setInnocentLosses,
  } = useData()!; // eslint-disable-line

  function resetScores() {
    setInnocentWins(0);
    setInnocentLosses(0);
    setImpostorWins(0);
    setImpostorLosses(0);
  }

  return (
    <div className={classes.root}>
      <div className={classes.scoreButtons}>
        <div className={classes.scoreButtonsSection}>
          <h4 className={classes.title} />
          <h4 className={classes.title}>{t("controls.innocent")}</h4>
          <h4 className={classes.title}>{t("controls.impostor")}</h4>
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4 className={classes.title}>{t("controls.wins")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentWins(innocentWins - 1)}
            increment={() => setInnocentWins(innocentWins + 1)}
            score={innocentWins}
            setScore={(value: number) => setInnocentWins(value)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.impostorTextColor}
            decrement={() => setImpostorWins(impostorWins - 1)}
            increment={() => setImpostorWins(impostorWins + 1)}
            score={impostorWins}
            setScore={(value: number) => setImpostorWins(value)}
          />
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4 className={classes.title}>{t("controls.losses")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentLosses(innocentLosses - 1)}
            increment={() => setInnocentLosses(innocentLosses + 1)}
            score={innocentLosses}
            setScore={(value: number) => setInnocentLosses(value)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.impostorTextColor}
            decrement={() => setImpostorLosses(impostorLosses - 1)}
            increment={() => setImpostorLosses(impostorLosses + 1)}
            score={impostorLosses}
            setScore={(value: number) => setImpostorLosses(value)}
          />
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button classNames={classes.reset} onClick={() => resetScores()}>
          {t("controls.resetScores")}
        </Button>
        {!isMobile && (
          <Button
            classNames={classes.reset}
            onClick={() => resetPlayersPositions()}
          >
            {t("controls.resetRound")}
          </Button>
        )}
      </div>
      {!isMobile && (
        <div className={classes.buttonContainer}>
          <Button
            classNames={`${classes.reset} ${classes.dangerButton}`}
            onClick={() => resetAll()}
          >
            {t("controls.resetAll")}
          </Button>
        </div>
      )}
    </div>
  );
}

ScoresPanel.defaultProps = {
  isMobile: false,
};
