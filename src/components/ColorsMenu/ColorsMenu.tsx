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
      const newPlayersSections = [
        ...playersSections.map((list) => ({
          ...list,

          players: [
            ...list.players.map((player) => ({
              ...player,

              color:
                player.color === currentPlayerColor
                  ? targetPlayerColor
                  : player.color === targetPlayerColor
                  ? currentPlayerColor
                  : player.color,
            })),
          ],
        })),
      ];

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
