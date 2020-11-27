import {
  decrementCrewmateLosses,
  decrementCrewmateWins,
  decrementImpostorLosses,
  decrementImpostorWins,
  getCrewmateLosses,
  getCrewmateWins,
  getImpostorLosses,
  getImpostorWins,
  incrementCrewmateLosses,
  incrementCrewmateWins,
  incrementImpostorLosses,
  incrementImpostorWins,
  resetScores,
  setCrewmateLosses,
  setCrewmateWins,
  setImpostorLosses,
  setImpostorWins,
} from "store/slices/ScoresSlice";
import {
  resetPlayersSections,
  resetPlayersSectionsPositions,
} from "store/slices/PlayersSectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { ITheme } from "utils/types";
import React from "react";
import WinsLossesButton from "./WinsLossesButton";
import { getIsMobile } from "store/slices/DeviceSlice";
import { resetCharacters } from "store/slices/MapsSlice";
import { resetLock } from "store/slices/PlayerEditLockSlice";
import useStyles from "./ScoreControls.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function ScoreControls(): JSX.Element {
  const { t } = useTranslation();

  const theme = useTheme<ITheme>();

  const crewmateWins = useSelector(getCrewmateWins);
  const crewmateLosses = useSelector(getCrewmateLosses);
  const impostorWins = useSelector(getImpostorWins);
  const impostorLosses = useSelector(getImpostorLosses);

  const isMobile = useSelector(getIsMobile);

  const classes = useStyles({ isMobile });

  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(resetScores());

    dispatch(resetPlayersSections());

    dispatch(resetCharacters());

    dispatch(resetLock());
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
            buttonBackgroundColor={theme.crewmateColorPrimary}
            buttonBackgroundColorHover={theme.crewmateColorSecondary}
            decrement={() => dispatch(decrementCrewmateWins())}
            increment={() => dispatch(incrementCrewmateWins())}
            score={crewmateWins}
            setScore={(value: number) => dispatch(setCrewmateWins(value))}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.imposterColorPrimary}
            buttonBackgroundColorHover={theme.imposterColorSecondary}
            decrement={() => dispatch(decrementImpostorWins())}
            increment={() => dispatch(incrementImpostorWins())}
            score={impostorWins}
            setScore={(value: number) => dispatch(setImpostorWins(value))}
          />
        </div>

        <div className={classes.ScoreButtonsColumn}>
          <h4 className={classes.ScoreButtonsHeader}>{t("controls.losses")}</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.crewmateColorPrimary}
            buttonBackgroundColorHover={theme.crewmateColorSecondary}
            decrement={() => dispatch(decrementCrewmateLosses())}
            increment={() => dispatch(incrementCrewmateLosses())}
            score={crewmateLosses}
            setScore={(value: number) => dispatch(setCrewmateLosses(value))}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.imposterColorPrimary}
            buttonBackgroundColorHover={theme.imposterColorSecondary}
            decrement={() => dispatch(decrementImpostorLosses())}
            increment={() => dispatch(incrementImpostorLosses())}
            score={impostorLosses}
            setScore={(value: number) => dispatch(setImpostorLosses(value))}
          />
        </div>
      </div>
      <div className={classes.ScoreOptions}>
        <Button
          className={classes.ScoreOptionButton}
          onClick={() => dispatch(resetScores())}
        >
          {t("controls.resetScores")}
        </Button>
        {!isMobile && (
          <Button
            className={classes.ScoreOptionButton}
            onClick={() => dispatch(resetPlayersSectionsPositions())}
          >
            {t("controls.resetPositions")}
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
