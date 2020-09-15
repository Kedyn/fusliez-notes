import React from "react";
import Section from "components/Section";
import { useData } from "context";
import useStyles from "./PlayersSection.styles";

export default function PlayersSection(): JSX.Element {
  const {
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
  } = useData()!; // eslint-disable-line

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Section
          title="Innocent"
          list={innocent_players}
          setList={setInnocentPlayers}
        />
        <Section
          title="Suspicious"
          list={sus_players}
          setList={setSusPlayers}
        />
        <Section
          title="Evil / Hit list"
          list={evil_players}
          setList={setEvilPlayers}
        />
        <Section title="Dead" list={dead_players} setList={setDeadPlayers} />
        <Section
          title="Unknown"
          list={unknown_players}
          setList={setUnknownPlayers}
        />
      </div>
    </React.Fragment>
  );
}
