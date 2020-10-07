import Button from "components/common/Button";
import { ITheme } from "utils/types";
import React from "react";
import WinsLossesButton from "../WinsLossesButton";
import { useMobile } from "context/MobileContextProvider";
import { usePlayers } from "context/PlayersContextProvider";
import { useScores } from "context/ScoresContextProvider";
import useStyles from "./ScoreControls.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import cx from "classnames";

export default function ScoreControls(): JSX.Element {
  const { t } = useTranslation();
  const theme = useTheme<ITheme>();
  const {
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,

    setImpostorWins,
    setImpostorLosses,
    setInnocentWins,
    setInnocentLosses,

    resetScores,
  } = useScores()!; // eslint-disable-line
  const { isMobile } = useMobile()!; // eslint-disable-line
  const { resetPlayersPositions } = usePlayers()!; // eslint-disable-line

  const classes = useStyles({ isMobile });

  const resetAll = () => {
    resetScores();
    resetPlayersPositions();
  };

  return (
    <div className={classes.ScoreControls}>
      <div className={classes.ScoreButtonsLayout}>
        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsLabel}>&nbsp;</h4>
          <h4 className={classes.ScoreButtonsLabel}>
            {t("controls.innocent")}
          </h4>
          <h4 className={classes.ScoreButtonsLabel}>
            {t("controls.impostor")}
          </h4>
        </div>

        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsHeader}>{t("controls.wins")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentColor}
            buttonBackgroundColorHover={theme.innocentColorHover}
            decrement={() =>
              setInnocentWins(innocentWins ? innocentWins - 1 : 0)
            }
            increment={() => setInnocentWins(innocentWins + 1)}
            score={innocentWins}
            setScore={(value: number) => setInnocentWins(value)}
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
            buttonBackgroundColor={theme.innocentColor}
            buttonBackgroundColorHover={theme.innocentColorHover}
            decrement={() =>
              setInnocentLosses(innocentLosses ? innocentLosses - 1 : 0)
            }
            increment={() => setInnocentLosses(innocentLosses + 1)}
            score={innocentLosses}
            setScore={(value: number) => setInnocentLosses(value)}
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
          classNames={classes.ScoreOptionButton}
          onClick={() => resetScores()}
        >
          {t("controls.resetScores")}
        </Button>
        {!isMobile && (
          <Button
            classNames={classes.ScoreOptionButton}
            onClick={() => resetPlayersPositions()}
          >
            {t("controls.resetRound")}
          </Button>
        )}
        {!isMobile && (
          <Button
            classNames={cx(
              classes.ScoreOptionButton,
              classes.ScoreOptionButtonDanger
            )}
            onClick={() => resetAll()}
          >
            {t("controls.resetAll")}
          </Button>
        )}
      </div>
    </div>
  );
}
