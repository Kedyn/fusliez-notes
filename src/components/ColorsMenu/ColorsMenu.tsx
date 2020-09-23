import useStyles, { useColorSwatchStyles } from "./ColorsMenu.styles";

import { IPlayer } from "utils/types";
import React from "react";
import { useData } from "context";

// renders each individual color
function ColorSwatch({
  targetColor,
  swapPlayersColors,
}: {
  targetColor: string;
  swapPlayersColors: () => void;
}): JSX.Element {
  const classes = useColorSwatchStyles({ targetColor });

  return (
    <button
      className={classes.playerColorChangeMenuIcon}
      onClick={() => swapPlayersColors()}
    />
  );
}

export default function ColorsMenu({
  isMenuShowing,
  setIsMenuShowing,
  currentColor,
}: {
  isMenuShowing: boolean;
  setIsMenuShowing: (state: boolean) => void;
  currentColor: string | number;
}): JSX.Element {
  const classes = useStyles();
  const ref = React.useRef(null);
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
  } = useData()!; // eslint-disable-line

  const colors = [
    { id: "brown", color: "saddlebrown" },
    { id: "red", color: "red" },
    { id: "pink", color: "hotpink" },
    { id: "orange", color: "orange" },
    { id: "yellow", color: "yellow" },
    { id: "lightGreen", color: "chartreuse" },
    { id: "green", color: "green" },
    { id: "teal", color: "cyan" },
    { id: "blue", color: "blue" },
    { id: "purple", color: "purple" },
    { id: "gray", color: "dimgray" },
    { id: "white", color: "white" },
  ];

  const allPlayers = React.useMemo(
    () => [
      { innocentPlayers },
      { susPlayers },
      { evilPlayers },
      { deadPlayers },
      { unknownPlayers },
    ],
    [innocentPlayers, susPlayers, evilPlayers, deadPlayers, unknownPlayers]
  );

  function swapPlayersColors(
    currentPlayerColor: string,
    targetPlayerColor: string
  ) {
    // dont need to do anything
    // if the ids/colors are the same
    if (currentPlayerColor === targetPlayerColor) {
      setIsMenuShowing(false);
      return;
    }

    // [list_name, player_object]
    const currentPlayer = ["", {}];
    const targetPlayer = ["", {}];

    // find current target player list
    // VERY VERY unoptimal solution
    // to find which list the target color is located
    for (const list of allPlayers) {
      for (const [listName, listPlayers] of Object.entries(list)) {
        for (const player of listPlayers) {
          if (player.id === currentPlayerColor) {
            currentPlayer[0] = listName;
            currentPlayer[1] = player;
          }

          if (player.id === targetPlayerColor) {
            targetPlayer[0] = listName;
            targetPlayer[1] = player;
          }

          if (targetPlayer[0] && currentPlayer[0]) break;
        }
        if (targetPlayer[0] && currentPlayer[0]) break;
      }
      if (targetPlayer[0] && currentPlayer[0]) break;
    }

    // filter out the current and target player from their lists
    let [currentPlayerList] = allPlayers
      .filter((list) => {
        if (Object.keys(list)[0] == currentPlayer[0]) {
          return true;
        } else return false;
      })
      .map((list) => Object.values(list)[0]);

    currentPlayerList = currentPlayerList.map((player: IPlayer) => {
      if (
        player.name === currentPlayer[1].name &&
        currentPlayer[1].color === player.color
      ) {
        // this creates a new object
        // that inherits the player, but replaces the id/color
        // then return that object
        player = {
          ...player,
          id: targetPlayerColor,
          color: targetPlayerColor,
        };
      } else if (
        player.name === targetPlayer[1].name &&
        targetPlayer[1].color === player.color
      ) {
        // see above
        player = {
          ...player,
          id: currentPlayerColor,
          color: currentPlayerColor,
        };
      }
      return player;
    });

    _updatePlayersList(currentPlayer[0], currentPlayerList);

    // if the players are not in the same list
    if (currentPlayer[0] !== targetPlayer[0]) {
      let [targetPlayerList] = allPlayers
        .filter((list) => {
          if (Object.keys(list)[0] == targetPlayer[0]) {
            return true;
          } else return false;
        })
        .map((list) => Object.values(list)[0]);

      targetPlayerList = targetPlayerList.map((player: IPlayer) => {
        if (
          player.name === targetPlayer[1].name &&
          targetPlayer[1].id === player.id
        ) {
          player = {
            ...player,
            id: currentPlayerColor,
            color: currentPlayerColor,
          };
        }
        return player;
      });

      _updatePlayersList(targetPlayer[0], targetPlayerList);
    }

    // function that performs setState
    // based on the player list name (i.e. innocentPlayers)
    function _updatePlayersList(listName: string, updatedList: Array<IPlayer>) {
      switch (listName) {
        case "innocentPlayers":
          setInnocentPlayers(updatedList);
          break;
        case "susPlayers":
          setSusPlayers(updatedList);
          break;
        case "evilPlayers":
          setEvilPlayers(updatedList);
          break;
        case "deadPlayers":
          setDeadPlayers(updatedList);
          break;
        case "unknownPlayers":
          setUnknownPlayers(updatedList);
          break;
        default:
          break;
      }
    }

    setIsMenuShowing(false);
  }

  React.useEffect(() => {
    function handleHideMenu(event: React.SyntheticEvent<EventTarget>) {
      if (ref.current && !ref?.current?.contains(event.target)) {
        setIsMenuShowing(false);
      }
    }

    document.addEventListener("click", handleHideMenu, true);
    document.addEventListener("drag", handleHideMenu, true);

    return () => {
      document.removeEventListener("click", handleHideMenu, true);
      document.addEventListener("drag", handleHideMenu, true);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`${classes.playerColorChangeMenu} ${
        isMenuShowing ? "" : classes.playerColorChangeMenuHidden
      }`}
    >
      {colors.map(({ id, color }) => (
        <ColorSwatch
          targetColor={color}
          key={id}
          swapPlayersColors={() => swapPlayersColors(currentColor, id)}
        />
      ))}
    </div>
  );
}
