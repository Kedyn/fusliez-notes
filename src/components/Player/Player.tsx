import { IPlayer } from "utils/types";
import Input from "components/common/Input";
import React from "react";
import { useData } from "context";
import useStyles from "./Player.styles";

export interface IPlayerProps {
  id: string | number;
  color: string;
  name: string;
  list: Array<IPlayer>;
  listName: string;
  setList: (value: IPlayer[]) => void;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
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

  return (
    <div className={`${classes.container} ${playerClass}`}>
      <img
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
