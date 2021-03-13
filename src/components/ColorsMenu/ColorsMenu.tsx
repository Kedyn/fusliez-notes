import { IPlayerColor, IPlayersState } from "utils/types/players";
import { getPlayers, setPlayersState } from "store/slices/PlayersSlice";
import { getSections, setSections } from "store/slices/SectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import { COLOR_LIBRARY } from "constants/theme";
import { CirclePicker } from "react-color";
import { ISection } from "utils/types/sections";
import React from "react";
import cx from "classnames";
import { getNewPlayersState } from "store/shared/players";
import useStyles from "./ColorsMenu.styles";

export interface IColorsMenuProps {
  isMenuShowing: boolean;
  setIsMenuShowing: (state: boolean) => void;
  currentColor: IPlayerColor;
}

interface ISwapPlayersColorsRes {
  newPlayers: IPlayersState;
  newSections: Array<ISection>;
}

export const swapPlayersColors = (
  currentPlayerColor: IPlayerColor,
  targetPlayerColor: IPlayerColor,
  players: IPlayersState,
  sections: Array<ISection>
): ISwapPlayersColorsRes | undefined => {
  if (currentPlayerColor !== targetPlayerColor) {
    const newPlayers = getNewPlayersState((player: IPlayerColor) => ({
      ...players[player],
    }));

    const tempName = newPlayers[currentPlayerColor].name;
    const tempSection = newPlayers[currentPlayerColor].section;

    newPlayers[currentPlayerColor].name = newPlayers[targetPlayerColor].name;
    newPlayers[currentPlayerColor].section =
      newPlayers[targetPlayerColor].section;
    newPlayers[targetPlayerColor].name = tempName;
    newPlayers[targetPlayerColor].section = tempSection;

    const newSections = sections.map(({ id, title, players }) => ({
      id: id,
      title: title,
      players: players.map(({ id }) => {
        if (id === currentPlayerColor) {
          return {
            id: targetPlayerColor,
          };
        } else if (id === targetPlayerColor) {
          return {
            id: currentPlayerColor,
          };
        } else {
          return { id };
        }
      }),
    }));

    return { newPlayers, newSections };
  }
};

const colors = [
  COLOR_LIBRARY["black"].base,
  COLOR_LIBRARY["blue"].base,
  COLOR_LIBRARY["brown"].base,
  COLOR_LIBRARY["cyan"].base,
  COLOR_LIBRARY["green"].base,
  COLOR_LIBRARY["lime"].base,
  COLOR_LIBRARY["orange"].base,
  COLOR_LIBRARY["pink"].base,
  COLOR_LIBRARY["purple"].base,
  COLOR_LIBRARY["red"].base,
  COLOR_LIBRARY["white"].base,
  COLOR_LIBRARY["yellow"].base,
];

export default function ColorsMenu(props: IColorsMenuProps): JSX.Element {
  const { isMenuShowing, setIsMenuShowing, currentColor } = props;

  console.log(currentColor);

  const ref = React.useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const players = useSelector(getPlayers);
  const sections = useSelector(getSections);

  const dispatch = useDispatch();

  const hexToPlayerColor = (hex: string): IPlayerColor => {
    const playerColors: Array<IPlayerColor> = [
      "black",
      "blue",
      "brown",
      "cyan",
      "green",
      "lime",
      "orange",
      "pink",
      "purple",
      "red",
      "white",
      "yellow",
    ];

    return playerColors[colors.indexOf(hex.toUpperCase())];
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
      data-testid="colors-menu"
      ref={ref}
      className={cx(classes.ColorMenu, { [classes.isHidden]: !isMenuShowing })}
    >
      <CirclePicker
        colors={colors}
        color={COLOR_LIBRARY[currentColor].base}
        onChange={(color) => {
          console.log({ color });
          const res = swapPlayersColors(
            currentColor,
            hexToPlayerColor(color.hex),
            players,
            sections
          );
          if (res?.newPlayers && res?.newSections) {
            dispatch(setPlayersState(res?.newPlayers));
            dispatch(setSections(res?.newSections));
          }

          setIsMenuShowing(false);
        }}
      />
    </div>
  );
}
