import {
  getCharacters,
  getCurrentMap,
  resetCharacters,
  setCharacterPosition,
  setCurrentMap,
} from "store/slices/MapsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const players = useSelector(getCharacters);
  const map = useSelector(getCurrentMap);

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

        <div className={classes.MapsPanelMapPlayerIcons}>
          {players.map((player) => (
            <Draggable
              key={player.id}
              bounds="#MapsContainer"
              position={{ x: player.x, y: player.y }}
              onStop={(event, data) => {
                dispatch(
                  setCharacterPosition({
                    id: player.id,
                    x: data.lastX,
                    y: data.lastY,
                  })
                );
              }}
            >
              <img
                src={`assets/images/playerIcons/${player.id}.png`}
                className={classes.MapsPanelMapPlayerIcon}
                onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                  event.stopPropagation()
                }
                draggable={false}
              />
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
}
