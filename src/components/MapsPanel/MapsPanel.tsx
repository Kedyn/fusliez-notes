import { IPlayer, IPlayersSection } from "utils/types";
import {
  getCharacters,
  getCurrentMap,
  resetCharacters,
  setCharacterPosition,
  setCurrentMap,
} from "store/slices/MapsSlice";
import {
  getDeadPlayersSection,
  getDefaultPlayersSection,
  getPlayersSections,
  setPlayersFromSection,
} from "store/slices/PlayersSectionsSlice";
import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { Dispatch } from "redux";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import { getAllPlayers } from "store/slices/PlayersSectionsSlice";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

interface IPlayerFound {
  sectionId: number;
  listName: string;
  player: IPlayer;
}

// finds which list the target color belongs to
export function findCurrentList(
  playersSections: Array<IPlayersSection>,
  playerColor: string
): IPlayerFound {
  let target: IPlayerFound = {
    sectionId: 0,
    listName: "",
    player: { color: "", playerName: "", id: "" },
  };

  for (const { id, title, players } of playersSections) {
    const player = players.filter(
      ({ color }: { color: string }) => color === playerColor
    );

    if (player.length) {
      target = {
        sectionId: id as number,
        listName: title,
        player: player[0],
      };
      break;
    }
  }

  return target;
}

export function reassignPlayers(
  playersSections: Array<IPlayersSection>,
  color: string,
  defaultPlayersSection: IPlayersSection,
  deadPlayersSection: IPlayersSection,
  dispatch: Dispatch
): void {
  // if already dead, set to unknown/default
  // else set to dead
  const { sectionId, listName, player } = findCurrentList(
    playersSections,
    color
  );

  let newDeadPlayers;

  if (listName === "main.lists.dead") {
    // if player is already in "Dead"
    // remove player from Dead
    // put player back to default section
    newDeadPlayers = deadPlayersSection.players.filter(
      (deadPlayer) => deadPlayer.color !== player.color
    );

    dispatch(
      setPlayersFromSection({
        sectionId: defaultPlayersSection.id as number,
        players: [...defaultPlayersSection.players, player],
      })
    );
  } else {
    // add player to dead players
    newDeadPlayers = [...deadPlayersSection.players, player];

    // get current player's section
    const currentPlayerSection = playersSections.find(
      (playersSection) => playersSection.id === sectionId
    );
    if (currentPlayerSection) {
      // remove player from original section
      const newCurrentPlayers = currentPlayerSection?.players.filter(
        (sectionPlayer: IPlayer) => sectionPlayer.id !== player.id
      );

      dispatch(
        setPlayersFromSection({
          sectionId: currentPlayerSection.id as number,
          players: newCurrentPlayers,
        })
      );
    }
  }

  dispatch(
    setPlayersFromSection({
      sectionId: deadPlayersSection.id as number,
      players: newDeadPlayers,
    })
  );
}

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const allPlayers = useSelector(getAllPlayers);
  const players = useSelector(getCharacters);
  const map = useSelector(getCurrentMap);
  const playersSections = useSelector(getPlayersSections);
  const deadPlayersSection = useSelector(getDeadPlayersSection);
  const defaultPlayersSection = useSelector(getDefaultPlayersSection);

  // this maps the coordinates to the player
  const allPlayersWithCoordinates = allPlayers.map((player) => {
    for (const { id, x, y } of players) {
      if (player.color === id) {
        return { ...player, x, y };
      }
    }
  });

  console.log(deadPlayersSection);

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

        {/* {players.map((player) => (
          <Draggable
            key={player.id}
            bounds="parent"
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
              alt={`${player.id} player icon`}
              src={`assets/images/playerIcons/${
                deadPlayersSection?.players
                  .map((deadPlayer) => deadPlayer.color)
                  .find((id) => id === player.id)
                  ? `${player.id}-dead`
                  : `${player.id}`
              }.png`}
              className={classes.MapsPanelMapPlayerIcon}
              onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                event.stopPropagation()
              }
              draggable={false}
              onDoubleClick={() =>
                reassignPlayers(
                  playersSections,
                  player.id,
                  defaultPlayersSection,
                  deadPlayersSection,
                  dispatch
                )
              }
              title="Double-click to mark dead/alive"
            />
          </Draggable>
        ))} */}
        <div>
          {/* 
          kind of a weird way to write it
          but wasn't sure on how to address
          some of the TS errors 
        */}
          {allPlayersWithCoordinates.length &&
            allPlayersWithCoordinates.map((player) => {
              console.log(player);
              return player ? (
                <Draggable
                  key={player?.id}
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
                      alt={`${player.id} player icon`}
                      src={`assets/images/playerIcons/${
                        deadPlayersSection?.players
                          .map((deadPlayer) => deadPlayer.color)
                          .find((id) => id === player.id)
                          ? `${player.color}-dead`
                          : `${player.color}`
                      }.png`}
                      className={classes.MapsPanelMapPlayerIcon}
                      onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                        event.stopPropagation()
                      }
                      draggable={false}
                      onDoubleClick={() =>
                        reassignPlayers(
                          playersSections,
                          player.id as string,
                          defaultPlayersSection,
                          deadPlayersSection,
                          dispatch
                        )
                      }
                      title="Double-click to mark dead/alive"
                    />
                    {isColorBlind && (
                      <p className={classes.MapPlayerName}>{player?.color}</p>
                    )}
                  </span>
                </Draggable>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}
