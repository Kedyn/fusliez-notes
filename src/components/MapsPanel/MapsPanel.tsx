import {
  getCharacters,
  getCurrentMap,
  resetCharacters,
  setCharacterPosition,
  setCurrentMap,
} from "store/slices/MapsSlice";
import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import { getAllPlayers } from "store/slices/PlayersSectionsSlice";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const allPlayers = useSelector(getAllPlayers);
  const players = useSelector(getCharacters);
  const map = useSelector(getCurrentMap);

  // this maps the coordinates to the player
  const allPlayersWithCoordinates = allPlayers.map((player) => {
    for (const { id, x, y } of players) {
      if (player.color === id) {
        return { ...player, x, y };
      }
    }
  });

  const dispatch = useDispatch();

  const classes = useStyles({
    map: map,
    isMobile,
    orientation,
  });

  let currentMap = <TheSkeld className={classes.MapsPanelMap} />;

  if (map === "MiraHq") {
    currentMap = <MiraHq className={classes.MapsPanelMap} />;
  } else if (map === "Polus") {
    currentMap = <Polus className={classes.MapsPanelMap} />;
  }

  return (
    <div className={classes.MapsPanel}>
      <div className={classes.MapsPanelMapsHeader}>
        {!isMobile && (
          <h2 className={classes.MapsPanelMapsTitle}>{t("maps.title")}</h2>
        )}

        <div className={classes.MapsPanelMapsToggle}>
          <Button
            className={classes.MapsPanelMapsToggleButton}
            pressed={map === "TheSkeld"}
            onClick={() => dispatch(setCurrentMap("TheSkeld"))}
          >
            The Skeld
          </Button>
          <Button
            className={classes.MapsPanelMapsToggleButton}
            pressed={map === "MiraHq"}
            onClick={() => dispatch(setCurrentMap("MiraHq"))}
          >
            Mira HQ
          </Button>
          <Button
            className={classes.MapsPanelMapsToggleButton}
            pressed={map === "Polus"}
            onClick={() => dispatch(setCurrentMap("Polus"))}
          >
            Polus
          </Button>
        </div>
      </div>

      <div className={classes.MapsPanelMainContainer} id="MapsContainer">
        <div className={classes.MapsPanelMapContainer}>{currentMap}</div>

        <div className={classes.MapsPanelDraggableHeader}>
          <h3>{t("maps.dragInstructions")}</h3>
          <Button onClick={() => dispatch(resetCharacters())}>
            {t("maps.removePlayers")}
          </Button>
        </div>

        <div>
          {/* 
          kind of a weird way to write it
          but wasn't sure on how to address
          some of the TS errors 
        */}
          {allPlayersWithCoordinates.length &&
            allPlayersWithCoordinates.map((player) =>
              player ? (
                <Draggable
                  key={player?.color}
                  bounds="#MapsContainer"
                  position={{ x: player?.x, y: player?.y }}
                  onStop={(event, data) => {
                    dispatch(
                      setCharacterPosition({
                        id: player?.color,
                        x: data.lastX,
                        y: data.lastY,
                      })
                    );
                  }}
                >
                  <span className={classes.MapPlayerIconContainer}>
                    {showNames && (
                      <p className={classes.MapPlayerName}>
                        {player?.playerName}
                      </p>
                    )}
                    <img
                      src={`assets/images/playerIcons/${player?.color}.png`}
                      className={classes.MapsPanelMapPlayerIcon}
                      onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                        event.stopPropagation()
                      }
                      draggable={false}
                    />
                    {isColorBlind && (
                      <p className={classes.MapPlayerName}>{player?.color}</p>
                    )}
                  </span>
                </Draggable>
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}
