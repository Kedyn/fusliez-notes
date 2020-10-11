import ColorSwatch from "./ColorSwatch";
import { IPlayer } from "utils/types";
import React from "react";
import { usePlayers } from "context/PlayersContextProvider";
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

  const {
    innocentPlayers,
    susPlayers,
    evilPlayers,
    deadPlayers,
    unknownPlayers,

    setInnocentPlayers,
    setSusPlayers,
    setEvilPlayers,
    setDeadPlayers,
    setUnknownPlayers,
  } = usePlayers()!; // eslint-disable-line

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
        { players: unknownPlayers, modifier: setUnknownPlayers },
        { players: innocentPlayers, modifier: setInnocentPlayers },
        { players: susPlayers, modifier: setSusPlayers },
        { players: evilPlayers, modifier: setEvilPlayers },
        { players: deadPlayers, modifier: setDeadPlayers },
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
