import { getPlayers, setPlayersState } from "store/slices/PlayersSlice";
import { getSections, setSections } from "store/slices/SectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import ColorSwatch from "./ColorSwatch";
import { IPlayerColor } from "utils/types/players";
import React from "react";
import { getNewPlayersState } from "store/shared/players";
import useStyles from "./ColorsMenu.styles";

export interface IColorsMenuProps {
  isMenuShowing: boolean;
  setIsMenuShowing: (state: boolean) => void;
  currentColor: IPlayerColor;
}

export default function ColorsMenu(props: IColorsMenuProps): JSX.Element {
  const { isMenuShowing, setIsMenuShowing, currentColor } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const players = useSelector(getPlayers);
  const sections = useSelector(getSections);

  const dispatch = useDispatch();

  const colors: Array<IPlayerColor> = [
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const swapPlayersColors = (
    currentPlayerColor: IPlayerColor,
    targetPlayerColor: IPlayerColor
  ) => {
    if (currentPlayerColor !== targetPlayerColor) {
      const newPlayers = getNewPlayersState((player: IPlayerColor) => ({
        ...players[player],
        position: { ...players[player].position },
      }));
      const tempName = newPlayers[currentPlayerColor].name;
      const tempSection = newPlayers[currentPlayerColor].section;

      newPlayers[currentPlayerColor].name = newPlayers[targetPlayerColor].name;
      newPlayers[currentPlayerColor].section =
        newPlayers[targetPlayerColor].section;
      newPlayers[targetPlayerColor].name = tempName;
      newPlayers[targetPlayerColor].section = tempSection;

      const newSections = [
        ...sections.map((section) => ({
          id: section.id,
          title: section.title,
          players: [
            ...section.players.map((player) => {
              if (player.id === currentPlayerColor) {
                return {
                  id: targetPlayerColor,
                };
              } else if (player.id === targetPlayerColor) {
                return {
                  id: currentPlayerColor,
                };
              } else {
                return { id: player.id };
              }
            }),
          ],
        })),
      ];

      dispatch(setPlayersState(newPlayers));
      dispatch(setSections(newSections));
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
      {colors.map((color) => (
        <ColorSwatch
          targetColor={color}
          key={color}
          swapPlayersColors={() => swapPlayersColors(currentColor, color)}
        />
      ))}
    </div>
  );
}
