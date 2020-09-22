import { IPlayer } from "utils/types";
import Input from "components/common/Input";
import React from "react";
import { useData } from "context";
import useStyles, { ColorSwatchUseStyles } from "./Player.styles";

export interface IPlayerProps {
  id: string | number;
  color: string;
  name: string;
  list: Array<IPlayer>;
  listName: string;
  setList: (value: IPlayer[]) => void;
  index: number;
}

function ColorSwatch({ color }: { color: string }) {
  const classes = ColorSwatchUseStyles({ color });
  return <span className={classes.playerColorChangeMenuIcon} />;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const [isMenuShowing, setIsMenuShowing] = React.useState(false);
  const ref = React.useRef(null);

  const classes = useStyles(props);
  const { names } = useData()!; // eslint-disable-line

  const { color, name, list, setList, index } = props;

  const playerClass = "player-handle";

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = [...list];

    players[player].name = event.currentTarget.value;

    setList(players);
  };

  function ColorMenu(): JSX.Element {
    const colors = [
      { id: "orange", color: "orange" },
      { id: "blue", color: "blue" },
      { id: "brown", color: "saddlebrown" },
      { id: "gray", color: "gray" },
      { id: "green", color: "green" },
      { id: "lightGreen", color: "lightGreen" },
      { id: "pink", color: "hotpink" },
      { id: "purple", color: "purple" },
      { id: "red", color: "red" },
      { id: "teal", color: "cyan" },
      { id: "white", color: "white" },
      { id: "yellow", color: "yellow" },
    ];

    return (
      <div
        className={`${classes.playerColorChangeMenu} ${
          isMenuShowing ? "" : classes.playerColorChangeMenuHidden
        }`}
      >
        {colors.map(({ id, color }) => (
          <ColorSwatch key={id} color={color} />
        ))}
      </div>
    );
  }

  React.useEffect(() => {
    function handleHideMenu(event: React.SyntheticEvent<EventTarget>) {
      if (ref.current && !ref?.current?.contains(event.target)) {
        setIsMenuShowing(false);
      }
    }

    document.addEventListener("click", handleHideMenu, true);

    return () => {
      document.removeEventListener("click", handleHideMenu, true);
    };
  }, [ref]);

  return (
    <div ref={ref} className={`${classes.container} ${playerClass}`}>
      <ColorMenu />
      <img
        onClick={() => setIsMenuShowing((state) => !state)}
        src={`assets/${color}.png`}
        alt={color}
        className={`${playerClass} ${classes.icon}`}
      />
      {names && (
        <div className={classes.name}>
          <Input
            placeholder="Player Name"
            className={classes.input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(index, event)
            }
            value={name}
          />
        </div>
      )}
    </div>
  );
}
