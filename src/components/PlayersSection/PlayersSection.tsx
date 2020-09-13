import { IPlayer } from "utils/types";
import Player from "components/Player/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useData } from "context";
import useStyles from "./PlayersSection.styles";

export interface IPlayersSectionProps {}

export default function PlayersSection(
  props: IPlayersSectionProps
): JSX.Element {
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

  const classes = useStyles({ names });

  const sections = ["innocent", "sus", "evil", "dead", "unknown"];

  const lists: {
    [key: string]: [Array<IPlayer>, (value: IPlayer[]) => void];
  } = {
    innocent: [innocent_players, setInnocentPlayers],
    sus: [sus_players, setSusPlayers],
    evil: [evil_players, setEvilPlayers],
    dead: [dead_players, setDeadPlayers],
    unknown: [unknown_players, setUnknownPlayers],
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        {sections.map((section) => (
          <div key={section}>
            <h2>{section != "evil" ? section : "evil / hit list"}</h2>

            <ReactSortable
              group="players"
              list={lists[section][0]}
              setList={lists[section][1]}
              handle=".player-handle"
              className={classes.players}
            >
              {lists[section][0].map(({ id, color, name }, index) => (
                <Player
                  key={id}
                  id={id}
                  color={color}
                  name={name}
                  section={section}
                  index={index}
                />
              ))}
            </ReactSortable>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
