import {
  getPlayersSections,
  setPlayersSections,
} from "store/slices/PlayersSectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import ColorSwatch from "./ColorSwatch";
import React from "react";
import useStyles from "./ColorsMenu.styles";

export interface IColorsMenuProps {
  isMenuShowing: boolean;
  setIsMenuShowing: (state: boolean) => void;
  currentColor: string;
}

export default function ColorsMenu(props: IColorsMenuProps): JSX.Element {
  const { isMenuShowing, setIsMenuShowing, currentColor } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const playersSections = useSelector(getPlayersSections);

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
      const currentPlayerData = {
        index: -1,
        list: playersSections[0],
      };

      const targetPlayerData = {
        index: -1,
        list: playersSections[0],
      };

      for (const list of playersSections) {
        for (const [playerIndex, player] of list.players.entries()) {
          if (player.color === currentPlayerColor) {
            currentPlayerData.index = playerIndex;
            currentPlayerData.list = list;
          } else if (player.color === targetPlayerColor) {
            targetPlayerData.index = playerIndex;
            targetPlayerData.list = list;
          }

          if (currentPlayerData.index !== -1 && targetPlayerData.index !== -1) {
            break;
          }
        }
        if (currentPlayerData.index !== -1 && targetPlayerData.index !== -1) {
          break;
        }
      }

      const newPlayersSections = [
        ...playersSections.map((list) => ({ ...list })),
      ];

      let listIndex = -1;

      if (currentPlayerData.list.id === targetPlayerData.list.id) {
        listIndex = currentPlayerData.list.id as number;

        newPlayersSections[listIndex].players = playersSections[
          listIndex
        ].players.map((player, index) => {
          if (index === currentPlayerData.index) {
            return {
              ...player,

              color: targetPlayerColor,
            };
          } else if (index === targetPlayerData.index) {
            return {
              ...player,

              color: currentPlayerColor,
            };
          }

          return player;
        });
      } else {
        listIndex = currentPlayerData.list.id as number;

        newPlayersSections[listIndex].players = playersSections[
          listIndex
        ].players.map((player, index) => {
          if (index === currentPlayerData.index) {
            return {
              ...player,

              color: targetPlayerColor,
            };
          }

          return player;
        });

        listIndex = targetPlayerData.list.id as number;

        newPlayersSections[listIndex].players = playersSections[
          listIndex
        ].players.map((player, index) => {
          if (index === targetPlayerData.index) {
            return {
              ...player,

              color: currentPlayerColor,
            };
          }

          return player;
        });
      }

      dispatch(setPlayersSections(newPlayersSections));
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
