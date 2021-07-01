import { IPlayer, IPlayerColor } from "utils/types/players";
import {
  getDeadSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import cx from "classnames";
import { getColorValue } from "utils/colorConverter";
import { setPlayerUsedEmergencyButton } from "store/slices/PlayersSlice";
import useStyles from "./EmergencyButtonUsage.styles";

export interface IEmergencyButtonUsageProps {
  playerId: IPlayerColor;
  player: IPlayer;
}

export default function EmergencyButtonUsage(
  props: IEmergencyButtonUsageProps
): JSX.Element {
  const [unusedSectionId, deadSectionId] = [
    useSelector(getUnusedSectionId),
    useSelector(getDeadSectionId),
  ];

  const dispatch = useDispatch();

  const classes = useStyles();

  const isUnused = props.player.section === unusedSectionId;
  const isDead = props.player.section === deadSectionId;

  if (isUnused) {
    return <React.Fragment />;
  }

  return (
    <div
      className={classes.EmergencyButtonUsageContainer}
      role="button"
      onClick={() => {
        dispatch(
          setPlayerUsedEmergencyButton({
            player: props.playerId,
            usedEmergencyButton: !props.player.usedEmergencyButton,
          })
        );
      }}
    >
      <div
        className={cx(classes.EmergencyButtonUsage, {
          [classes.isAlive]: !isDead,
          [classes.isDead]: isDead,
        })}
      >
        <div className={classes.EmergencyButtonUsagePedestal}>
          <div
            className={classes.EmergencyButtonUsageButton}
            style={{
              backgroundColor: `rgb(${getColorValue(props.playerId)})`,
            }}
          />
        </div>
        {props.player.usedEmergencyButton && <UsedEmergencyButtonCross />}
      </div>
    </div>
  );
}

function UsedEmergencyButtonCross() {
  const classes = useStyles();

  return (
    <div className={classes.UsedEmergencyButtonCross}>
      <div className={classes.UsedEmergencyButtonCrossLine1} />
      <div className={classes.UsedEmergencyButtonCrossLine2} />
    </div>
  );
}
