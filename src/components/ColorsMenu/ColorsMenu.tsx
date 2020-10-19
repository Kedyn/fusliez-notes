import {
  getPlayersFromList,
  setPlayersFromList,
} from "store/slices/PlayersListsSlice";
import { useDispatch, useSelector } from "react-redux";

import ColorSwatch from "./ColorSwatch";
import { IPlayer } from "utils/types";
import React from "react";
import useStyles from "./ColorsMenu.styles";

interface IPlayerData {
  player: IPlayer;
  list: Array<IPlayer>;
  modifier: (value: Array<IPlayer>) => void;
}

export interface IColorsMenuProps {
  isMenuShowing: boolean;
  setIsMenuShowing: (state: boolean) => void;
  currentColor: string;
}

export default function ColorsMenu(props: IColorsMenuProps): JSX.Element {
  const { isMenuShowing, setIsMenuShowing, currentColor } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const innocentPlayers = useSelector(getPlayersFromList("innocentPlayers"));
  const susPlayers = useSelector(getPlayersFromList("susPlayers"));
  const evilPlayers = useSelector(getPlayersFromList("evilPlayers"));
  const deadPlayers = useSelector(getPlayersFromList("deadPlayers"));
  const unknownPlayers = useSelector(getPlayersFromList("unknownPlayers"));

  const dispatch = useDispatch();

  const colors = [
    { color: "brown" },
    { color: "red" },
    { color: "orange" },
    { color: "yellow" },
    { color: "lime" },
    { color: "green" },
    { color: "cyan" },
    { color: "blue" },
    { color: "purple" },
    { color: "pink" },
    { color: "white" },
    { color: "black" },
  ];

  const swapPlayersColors = (
    currentPlayerColor: string,
    targetPlayerColor: string
  ) => {
    if (currentPlayerColor !== targetPlayerColor) {
      const allPlayers = [
        {
          players: unknownPlayers,
          modifier: (value: Array<IPlayer>) =>
            dispatch(
              setPlayersFromList({
                listName: "unknownPlayers",
                players: value,
              })
            ),
        },
        {
          players: innocentPlayers,
          modifier: (value: Array<IPlayer>) =>
            dispatch(
              setPlayersFromList({
                listName: "innocentPlayers",
                players: value,
              })
            ),
        },
        {
          players: susPlayers,
          modifier: (value: Array<IPlayer>) =>
            dispatch(
              setPlayersFromList({
                listName: "susPlayers",
                players: value,
              })
            ),
        },
        {
          players: evilPlayers,
          modifier: (value: Array<IPlayer>) =>
            dispatch(
              setPlayersFromList({
                listName: "evilPlayers",
                players: value,
              })
            ),
        },
        {
          players: deadPlayers,
          modifier: (value: Array<IPlayer>) =>
            dispatch(
              setPlayersFromList({
                listName: "deadPlayers",
                players: value,
              })
            ),
        },
      ];

      let currentPlayerData: IPlayerData | null = null;
      let targetPlayerData: IPlayerData | null = null;

      for (const list of allPlayers) {
        for (const player of list.players) {
          if (player.color === currentPlayerColor) {
            currentPlayerData = {
              player: player,
              list: list.players,
              modifier: list.modifier,
            };
          } else if (player.color === targetPlayerColor) {
            targetPlayerData = {
              player: player,
              list: list.players,
              modifier: list.modifier,
            };
          }

          if (currentPlayerData !== null && targetPlayerData !== null) break;
        }
        if (currentPlayerData !== null && targetPlayerData !== null) break;
      }

      if (currentPlayerData !== null && targetPlayerData !== null) {
        // the previous check will make sure both data are never null, we can use disable-line

        if (currentPlayerData.modifier === targetPlayerData.modifier) {
          currentPlayerData.modifier([
            ...currentPlayerData.list.map((player) => {
              if (player.color === currentPlayerColor) {
                return {
                  ...targetPlayerData!.player, // eslint-disable-line
                  playerName: currentPlayerData!.player.playerName, // eslint-disable-line
                };
              } else if (player.color === targetPlayerColor) {
                return {
                  // the following will never be null
                  ...currentPlayerData!.player, // eslint-disable-line
                  playerName: targetPlayerData!.player.playerName, // eslint-disable-line
                };
              }

              return player;
            }),
          ]);
        } else {
          currentPlayerData.modifier([
            ...currentPlayerData.list.map((player) => {
              if (player.color === currentPlayerColor) {
                return {
                  ...targetPlayerData!.player, // eslint-disable-line
                  playerName: currentPlayerData!.player.playerName, // eslint-disable-line
                };
              }

              return player;
            }),
          ]);
          targetPlayerData.modifier([
            ...targetPlayerData.list.map((player) => {
              if (player.color === targetPlayerColor) {
                return {
                  ...currentPlayerData!.player, // eslint-disable-line
                  playerName: targetPlayerData!.player.playerName, // eslint-disable-line
                };
              }

              return player;
            }),
          ]);
        }
      }
    }

    setIsMenuShowing(false);
  };

  React.useEffect(() => {
    function handleHideMenu(event: Event) {
      if (ref.current && !ref?.current?.contains(event.target as Node)) {
        setIsMenuShowing(false);
      }
    }

    document.addEventListener("click", handleHideMenu, true);
    document.addEventListener("drag", handleHideMenu, true);

    return () => {
      document.removeEventListener("click", handleHideMenu, true);
      document.removeEventListener("drag", handleHideMenu, true);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`${classes.ColorMenu} ${
        isMenuShowing ? "" : classes.isHidden
      }`}
    >
      {colors.map(({ color }) => (
        <ColorSwatch
          targetColor={color}
          key={color}
          swapPlayersColors={() => swapPlayersColors(currentColor, color)}
        />
      ))}
    </div>
  );
}
