import Button from "components/common/Button";
import React from "react";
import Settings from "components/Settings";
import WinsLossesButton from "../WinsLossesButton";
import { useData } from "context";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);
  const {
    theme,
    notes,
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
    setNotes,
  } = useData()!; // eslint-disable-line

  function resetScores() {
    setInnocentWins(0);
    setInnocentLosses(0);
    setImpostorWins(0);
    setImpostorLosses(0);
  }

  return (
    <div id="controls" className={classes.root}>
      <div className={classes.scoreButtons}>
        <div className={classes.titleContainer}>
          <h4 className={classes.title} />
          <h4 className={classes.title}>{t("controls.wins")}</h4>
          <h4 className={classes.title}>{t("controls.losses")}</h4>
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4>{t("controls.innocent")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentWins(innocentWins - 1)}
            increment={() => setInnocentWins(innocentWins + 1)}
            score={innocentWins}
            setScore={(value: number) => setInnocentWins(value)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentLosses(innocentLosses - 1)}
            increment={() => setInnocentLosses(innocentLosses + 1)}
            score={innocentLosses}
            setScore={(value: number) => setInnocentLosses(value)}
          />
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4>{t("controls.impostor")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.impostorTextColor}
            decrement={() => setImpostorWins(impostorWins - 1)}
            increment={() => setImpostorWins(impostorWins + 1)}
            score={impostorWins}
            setScore={(value: number) => setImpostorWins(value)}
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
        <Button
          classNames={classes.reset}
          onClick={() => resetPlayersPositions()}
        >
          {t("controls.resetRound")}
        </Button>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          classNames={`${classes.reset} ${classes.dangerButton}`}
          onClick={() => resetAll()}
        >
          {t("controls.resetAll")}
        </Button>
      </div>
      <h2>{t("controls.notes")}</h2>
      <div className={classes.notesContainer}>
        <textarea
          className={classes.notes}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNotes(event.currentTarget.value)
          }
          value={notes}
        />
      </div>
      <Button classNames={`${classes.resetNotes}`} onClick={() => setNotes("")}>
        {t("controls.resetNotes")}
      </Button>
      <Button
        classNames={`${classes.dangerButton}`}
        onClick={() => setShowSettings(true)}
      >
        {t("controls.settings")}
      </Button>

      <Settings show={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}
