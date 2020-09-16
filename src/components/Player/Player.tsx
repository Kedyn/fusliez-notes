import { IPlayer } from "utils/types";
// import colorNameToRGB from "utils/colorConverter";
import Input from "components/common/Input";
import React from "react";
import { useData } from "context";
import useStyles from "./Player.styles";

export interface IPlayerProps {
  id: string | number;
  color: string;
  name: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const classes = useStyles();

  const { names } = useData()!; // eslint-disable-line

  const { color, name, list, setList, index } = props;

  let container_class = classes.container;
  let player_class = "player-handle";

  if (names) {
    player_class += ` ${classes.player}`;

    if (name != "") {
      container_class += ` ${color}`;
    } else {
      container_class += ` ${classes.nonActive}`;
    }
  } else {
    container_class += ` ${color}`;
  }

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = [...list];

    players[player].name = event.currentTarget.value;

    setList(players);
  };

  return (
    <div className={container_class}>
      <img src={`assets/${color}.png`} alt={color} className={player_class} />
      {names && (
        <div className={classes.name}>
          <Input
            placeholder="Player name"
            classNames={classes.input}
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
