import Button from "components/common/Button";
import { ITheme } from "utils/types";
import React from "react";
import WinsLossesButton from "./WinsLossesButton";
import { useMobile } from "context/MobileContextProvider";
import { usePlayers } from "context/PlayersContextProvider";
import { useScores } from "context/ScoresContextProvider";
import useStyles from "./ScoreControls.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function ScoreControls(): JSX.Element {
  const { t } = useTranslation();
  const theme = useTheme<ITheme>();
  const {
    crewmateWins,
    crewmateLosses,
    impostorWins,
    impostorLosses,

    setImpostorWins,
    setImpostorLosses,
    setCrewmateWins,
    setCrewmateLosses,

    resetScores,
  } = useScores()!; // eslint-disable-line
  const { isMobile } = useMobile()!; // eslint-disable-line
  const { resetPlayersPositions, resetPlayers } = usePlayers()!; // eslint-disable-line

  const classes = useStyles({ isMobile });

  const resetAll = () => {
    resetScores();

    resetPlayers();
  };

  return (
    <div className={classes.ScoreControls}>
      <div className={classes.ScoreButtonsLayout}>
        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsLabel}>&nbsp;</h4>
          <h4 className={classes.ScoreButtonsLabel}>
            {t("controls.crewmate")}
          </h4>
          <h4 className={classes.ScoreButtonsLabel}>
            {t("controls.impostor")}
          </h4>
        </div>

        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsHeader}>{t("controls.wins")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.crewmateColor}
            buttonBackgroundColorHover={theme.crewmateColorHover}
            decrement={() =>
              setCrewmateWins(crewmateWins ? crewmateWins - 1 : 0)
            }
            increment={() => setCrewmateWins(crewmateWins + 1)}
            score={crewmateWins}
            setScore={(value: number) => setCrewmateWins(value)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.imposterColor}
            buttonBackgroundColorHover={theme.imposterColorHover}
            decrement={() =>
              setImpostorWins(impostorWins ? impostorWins - 1 : 0)
            }
            increment={() => setImpostorWins(impostorWins + 1)}
            score={impostorWins}
            setScore={(value: number) => setImpostorWins(value)}
          />
        </div>

        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsHeader}>{t("controls.losses")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.crewmateColor}
            buttonBackgroundColorHover={theme.crewmateColorHover}
            decrement={() =>
              setCrewmateLosses(crewmateLosses ? crewmateLosses - 1 : 0)
            }
            increment={() => setCrewmateLosses(crewmateLosses + 1)}
            score={crewmateLosses}
            setScore={(value: number) => setCrewmateLosses(value)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.imposterColor}
            buttonBackgroundColorHover={theme.imposterColorHover}
            decrement={() =>
              setImpostorLosses(impostorLosses ? impostorLosses - 1 : 0)
            }
            increment={() => setImpostorLosses(impostorLosses + 1)}
            score={impostorLosses}
            setScore={(value: number) => setImpostorLosses(value)}
          />
        </div>
      </div>
      <div className={classes.ScoreOptions}>
        <Button
          className={classes.ScoreOptionButton}
          onClick={() => resetScores()}
        >
          {t("controls.resetScores")}
        </Button>
        {!isMobile && (
          <Button
            className={classes.ScoreOptionButton}
            onClick={() => resetPlayersPositions()}
          >
            {t("controls.resetRound")}
          </Button>
        )}
        {!isMobile && (
          <Button
            className={classes.ScoreOptionButton}
            danger
            onClick={() => resetAll()}
          >
            {t("controls.resetAll")}
          </Button>
        )}
      </div>
    </div>
  );
}
