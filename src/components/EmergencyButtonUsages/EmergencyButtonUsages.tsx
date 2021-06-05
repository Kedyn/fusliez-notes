import { IPlayer, IPlayerColor } from "utils/types/players";
import {
  getDeadSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";
import {
  getPlayers,
  resetPlayersUsedEmergencyButton,
} from "store/slices/PlayersSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import EmergencyButtonUsage from "components/EmergencyButtonUsage";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getTrackEmergencyButtonUsages } from "store/slices/SettingsSlice";
import useStyles from "./EmergencyButtonUsages.styles";
import { useTranslation } from "react-i18next";

export default function EmergencyButtonUsages(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isMobile = useSelector(getIsMobile);
  const trackEmergencyButtonUsages = useSelector(getTrackEmergencyButtonUsages);
  const players = useSelector(getPlayers);
  const [unusedSectionId, deadSectionId] = [
    useSelector(getUnusedSectionId),
    useSelector(getDeadSectionId),
  ];

  const classes = useStyles({ isMobile });

  if (!trackEmergencyButtonUsages) {
    return <React.Fragment />;
  }

  const playerEntries = Object.entries(players) as [IPlayerColor, IPlayer][];
  const emergencyButtonLeftSum = playerEntries.reduce(
    (sum, [, player]) =>
      ![unusedSectionId, deadSectionId].includes(player.section) &&
      !player.usedEmergencyButton
        ? sum + 1
        : sum,
    0
  );

  return (
    <div className={classes.EmergencyButtonUsages}>
      <h2 className={classes.EmergencyButtonUsagesTitle}>
        {t("main.emergencyButtonUsages")}
      </h2>
      <div>
        {t("main.emergencyButtonLeftSum")}: {emergencyButtonLeftSum}
      </div>
      <div className={classes.EmergencyButtonUsagesArea}>
        {playerEntries.map(([playerId, player]) => (
          <EmergencyButtonUsage
            key={player.color}
            playerId={playerId}
            player={player}
          />
        ))}
      </div>
      {isMobile && (
        <Button onClick={() => dispatch(resetPlayersUsedEmergencyButton())}>
          {t("controls.resetEmergencyButtonUsages")}
        </Button>
      )}
    </div>
  );
}
