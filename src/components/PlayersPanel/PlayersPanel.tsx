import {
  getPlayerEditLock,
  togglePlayerEditLock,
} from "store/slices/PlayerEditLockSlice";
import {
  getPlayersLists,
  resetPlayersListsPositions,
} from "store/slices/PlayersListsSlice";
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
  const lists = useSelector(getPlayersLists);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const classes = useStyles({ isMobile });

  return (
    <div className={classes.PlayersPanel}>
      {lists.map((list) => (
        <PlayerSection list={list} key={list.id} />
      ))}

      <div className={classes.PlayersControls}>
        {showNames && (
          <Button onClick={() => dispatch(togglePlayerEditLock())}>
            {isLocked ? t("controls.unlockPlayers") : t("controls.lockPlayers")}
          </Button>
        )}

        {isMobile && (
          <Button onClick={() => dispatch(resetPlayersListsPositions())}>
            {t("controls.resetAll")}
          </Button>
        )}
      </div>
    </div>
  );
}
