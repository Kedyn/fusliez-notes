import { IPlayer } from "utils/types";
import Input from "components/common/Input";
import React from "react";
import { useData } from "context";
import useStyles from "./Player.styles";

export interface IPlayerProps {
  id: string | number;
  color: string;
  name: string;
  section: string;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const classes = useStyles();

  const {
    names,
    innocent_players,
    sus_players,
    evil_players,
    dead_players,
    unknown_players,
    setInnocentPlayers,
    setSusPlayers,
    setEvilPlayers,
    setDeadPlayers,
    setUnknownPlayers,
  } = useData()!;

  const { id, color, name, section, index } = props;

  let container_classs = classes.container;
  let player_class = "player-handle";

  if (names) {
    player_class += ` ${classes.player}`;

    if (name != "") {
      container_classs += ` ${color}`;
    }
  }

  const handleChange = (
    list: string,
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let players: Array<IPlayer> = [];
    let setState: (value: IPlayer[]) => void = setInnocentPlayers;

    switch (list) {
      case "innocent":
        players = [...innocent_players];
        setState = setInnocentPlayers;
        break;
      case "sus":
        players = [...sus_players];
        setState = setSusPlayers;
        break;
      case "evil":
        players = [...evil_players];
        setState = setEvilPlayers;
        break;
      case "dead":
        players = [...dead_players];
        setState = setDeadPlayers;
        break;
      case "unknown":
        players = [...unknown_players];
        setState = setUnknownPlayers;
        break;
    }

    players[player].name = event.currentTarget.value;

    setState(players);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={container_classs}>
          <img
            src={`assets/${color}.png`}
            alt={color}
            className={player_class}
          />
          {names && (
            <div className={classes.name}>
              <Input
                placeholder="Player name"
                classNames={classes.input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(section, index, event)
                }
                value={name}
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
