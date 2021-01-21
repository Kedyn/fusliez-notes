import {
  getCharacters,
  getCurrentMap,
  resetCharacters,
  setCharacterPosition,
  setCurrentMap,
} from "store/slices/MapsSlice";
import {
  getDeadSectionId,
  getPlayersAsCharacter,
  getPlayersSections,
  getResetSectionId,
  getUnusedSectionId,
  setPlayersSections,
} from "store/slices/PlayersSectionsSlice";
import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Draggable from "react-draggable";
import { IMapsCharacter } from "utils/types";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import cx from "classnames";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const players = useSelector(getPlayersAsCharacter);
  const charactersWithCoo = useSelector(getCharacters);
  const map = useSelector(getCurrentMap);
  const resetSectionId = useSelector(getResetSectionId);
  const deadSectionId = useSelector(getDeadSectionId);
  const unusedSectionId = useSelector(getUnusedSectionId);
  const sections = useSelector(getPlayersSections);

  const dispatch = useDispatch();

  const classes = useStyles({
    map: map,
    isMobile,
    orientation,
  });

  const characters = React.useMemo(() => {
    const newCharacters: Array<IMapsCharacter> = [];
    const playersHash: { [key: string]: IMapsCharacter } = {};

    for (const player of players) {
      playersHash[player.id] = player;
    }

    for (const character of charactersWithCoo) {
      newCharacters.push({
        ...playersHash[character.id],
        x: character.x,
        y: character.y,
      });
    }

    return newCharacters;
  }, [players]);

  let currentMap = <TheSkeld className={classes.MapsPanelMap} />;

  if (map === "MiraHq") {
    currentMap = <MiraHq className={classes.MapsPanelMap} />;
  } else if (map === "Polus") {
    currentMap = <Polus className={classes.MapsPanelMap} />;
  }

  const changeCharacterState = (character: IMapsCharacter) => {
    if (character.section === deadSectionId) {
      dispatch(
        setPlayersSections(
          sections.map((section) => ({
            ...section,
            players:
              section.id === deadSectionId
                ? [
                    ...section.players.filter(
                      (player) => player.color !== character.id
                    ),
                  ]
                : section.id === resetSectionId
                ? [
                    ...section.players,
                    {
                      id:
                        character.id.charAt(0).toUpperCase() +
                        character.id.slice(1),
                      playerName: character.playerName,
                      color: character.id,
                    },
                  ]
                : [...section.players],
          }))
        )
      );
    } else {
      dispatch(
        setPlayersSections(
          sections.map((section) => ({
            ...section,
            players:
              section.id !== deadSectionId
                ? [
                    ...section.players.filter(
                      (player) => player.color !== character.id
                    ),
                  ]
                : [
                    ...section.players,
                    {
                      id:
                        character.id.charAt(0).toUpperCase() +
                        character.id.slice(1),
                      playerName: character.playerName,
                      color: character.id,
                    },
                  ],
          }))
        )
      );
    }
  };

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
          {characters.map((character, index) => (
            <Draggable
              key={index}
              bounds="#MapsContainer"
              position={{ x: character.x, y: character.y }}
              onStop={(event, data) => {
                dispatch(
                  setCharacterPosition({
                    ...character,
                    x: data.lastX,
                    y: data.lastY,
                  })
                );
              }}
              disabled={character.section === unusedSectionId}
            >
              <span className={classes.MapPlayerIconContainer}>
                {showNames && (
                  <p className={classes.MapPlayerName}>
                    {character.playerName}
                  </p>
                )}
                <img
                  alt={`${character.id} character icon`}
                  src={`assets/images/playerIcons/${
                    character.section === deadSectionId
                      ? `${character.id}-dead`
                      : `${character.id}`
                  }.png`}
                  className={cx(
                    {
                      [classes.MapsPanelMapPlayerIconNonVisible]:
                        character.section === unusedSectionId,
                    },
                    classes.MapsPanelMapPlayerIcon
                  )}
                  onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                    event.stopPropagation()
                  }
                  draggable={false}
                  onDoubleClick={() => changeCharacterState(character)}
                  title="Double-click to mark dead/alive"
                />
                {isColorBlind && (
                  <p className={classes.MapPlayerName}>
                    {t(`main.${character.id}`)}
                  </p>
                )}
              </span>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
}
