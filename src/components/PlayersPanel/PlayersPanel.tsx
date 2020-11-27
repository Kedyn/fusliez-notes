import {
  getPlayerEditLock,
  togglePlayerEditLock,
} from "store/slices/PlayerEditLockSlice";
import {
  getPlayersSections,
  resetPlayersSectionsPositions,
} from "store/slices/PlayersSectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import PlayerSection from "components/PlayerSection";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import useStyles from "./PlayersPanel.styles";
import { useTranslation } from "react-i18next";

export default function PlayersPanel(): JSX.Element {
  const showNames = useSelector(getShowNames);
  const isLocked = useSelector(getPlayerEditLock);
  const isMobile = useSelector(getIsMobile);
  const sections = useSelector(getPlayersSections);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const classes = useStyles({ isMobile });

  return (
    <div className={classes.PlayersPanel}>
      {sections.map((section) => (
        <PlayerSection section={section} key={section.id} />
      ))}

      <div className={classes.PlayersControls}>
        {showNames && (
          <Button onClick={() => dispatch(togglePlayerEditLock())}>
            {isLocked ? t("controls.unlockEditing") : t("controls.lockEditing")}
          </Button>
        )}

        {isMobile && (
          <Button onClick={() => dispatch(resetPlayersSectionsPositions())}>
            {t("controls.resetPositions")}
          </Button>
        )}
      </div>
    </div>
  );
}
