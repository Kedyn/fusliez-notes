import { IPlayer } from "utils/types";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useData } from "context";
import useStyles from "./PlayersSection.styles";

export interface IPlayersSectionProps {}

export default function PlayersSection(
  props: IPlayersSectionProps
): JSX.Element {
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
            >
              {lists[section][0].map(({ id, color, name }, index) => (
                <div>
                  <img
                    src={`assets/${color}.png`}
                    alt={color}
                    className={`player-handle ${names ? "player-img" : ""} ${
                      name != "" ? "" : "not-active"
                    }`}
                  />
                  xd
                </div>
              ))}
            </ReactSortable>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
