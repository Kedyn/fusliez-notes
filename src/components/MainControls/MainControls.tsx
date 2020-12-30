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
  resetScoresState,
  setCrewmateLosses,
  setCrewmateWins,
  setImpostorLosses,
  setImpostorWins,
} from "store/slices/ScoresSlice";
import {
  resetPlayersNames,
  resetPlayersState,
} from "store/slices/PlayersSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Counter from "components/common/Counter";
import { ITheme } from "utils/types/theme";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import { movePlayersToResetSection } from "store/slices/SectionsSlice";
import useStyles from "./MainControls.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function MainControls(): JSX.Element {
  const crewmateWins = useSelector(getCrewmateWins);
  const crewmateLosses = useSelector(getCrewmateLosses);
  const impostorWins = useSelector(getImpostorWins);
  const impostorLosses = useSelector(getImpostorLosses);
  const isMobile = useSelector(getIsMobile);
  const showNames = useSelector(getShowNames);

  const dispatch = useDispatch();

  const classes = useStyles({ isMobile });

  const { t } = useTranslation();

  const theme = useTheme<ITheme>();

  const resetAll = () => {
    dispatch(resetScoresState());

    dispatch(movePlayersToResetSection());

    dispatch(resetPlayersState());

    // might need to add more stuff here
  };

  return (
    <div className={classes.MainControls}>
      <div className={classes.MainControlsScoresSection}>
        <div className={classes.MainControlsScoresTable}>
          <div className={classes.MainControlsScoresColumn}>
            <h4 className={classes.MainControlsScoresHeader}>&nbsp;</h4>
            <h4 className={classes.MainControlsScoresLabel}>
              {t("controls.crewmate")}
            </h4>
            <h4 className={classes.MainControlsScoresLabel}>
              {t("controls.impostor")}
            </h4>
          </div>

          <div className={classes.MainControlsScoresColumn}>
            <h4 className={classes.MainControlsScoresHeader}>
              {t("controls.wins")}
            </h4>

            <Counter
              value={crewmateWins}
              min={0}
              buttonsBackgroundColor={theme.crewmateColorPrimary}
              buttonsBackgroundHoverColor={theme.crewmateColorSecondary}
              decrement={() => dispatch(decrementCrewmateWins())}
              increment={() => dispatch(incrementCrewmateWins())}
              setValue={(value) => dispatch(setCrewmateWins(value))}
            />

            <Counter
              value={impostorWins}
              min={0}
              buttonsBackgroundColor={theme.impostorColorPrimary}
              buttonsBackgroundHoverColor={theme.impostorColorSecondary}
              decrement={() => dispatch(decrementImpostorWins())}
              increment={() => dispatch(incrementImpostorWins())}
              setValue={(value) => dispatch(setImpostorWins(value))}
            />
          </div>

          <div className={classes.MainControlsScoresColumn}>
            <h4 className={classes.MainControlsScoresHeader}>
              {t("controls.losses")}
            </h4>

            <Counter
              value={crewmateLosses}
              min={0}
              buttonsBackgroundColor={theme.crewmateColorPrimary}
              buttonsBackgroundHoverColor={theme.crewmateColorSecondary}
              decrement={() => dispatch(decrementCrewmateLosses())}
              increment={() => dispatch(incrementCrewmateLosses())}
              setValue={(value) => dispatch(setCrewmateLosses(value))}
            />

            <Counter
              value={impostorLosses}
              min={0}
              buttonsBackgroundColor={theme.impostorColorPrimary}
              buttonsBackgroundHoverColor={theme.impostorColorSecondary}
              decrement={() => dispatch(decrementImpostorLosses())}
              increment={() => dispatch(incrementImpostorLosses())}
              setValue={(value) => dispatch(setImpostorLosses(value))}
            />
          </div>
        </div>
      </div>

      <div className={classes.MainControlsResetSection}>
        <Button
          className={classes.MainControlsButton}
          onClick={() => dispatch(resetScoresState())}
        >
          {t("controls.resetScores")}
        </Button>

        {!isMobile && (
          <>
            <Button
              className={classes.MainControlsButton}
              onClick={() => dispatch(movePlayersToResetSection())}
            >
              {t("controls.resetSections")}
            </Button>

            {showNames && (
              <Button
                className={classes.MainControlsButton}
                onClick={() => dispatch(resetPlayersNames())}
              >
                {t("controls.resetNames")}
              </Button>
            )}

            <Button
              className={classes.MainControlsButton}
              danger
              onClick={() => resetAll()}
            >
              {t("controls.resetAll")}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
