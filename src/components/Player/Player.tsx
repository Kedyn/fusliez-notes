import ColorsMenu from "../ColorsMenu";
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
  const [isMenuShowing, setIsMenuShowing] = React.useState(false);

  const classes = useStyles(props);
  const { names } = useData()!; // eslint-disable-line

  const { id, color, name, list, setList, index } = props;

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = [...list];

    players[player].name = event.currentTarget.value;

    setList(players);
  };

  return (
    <div className={`${classes.container} player-handle`}>
      {isMenuShowing && (
        <ColorsMenu
          isMenuShowing={isMenuShowing}
          setIsMenuShowing={setIsMenuShowing}
          currentColor={id}
        />
      )}
      <div className={classes.icon}>
        <img
          onClick={() => setIsMenuShowing(!isMenuShowing)}
          src={`assets/${color}.png`}
          alt={color}
          className="player-handle"
        />
      </div>
      {names && (
        <div className={classes.name}>
          <Input
            placeholder="Player"
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
