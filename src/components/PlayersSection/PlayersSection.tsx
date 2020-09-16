import React from "react";
import Section from "components/Section";
import { useData } from "context";
import { IPlayer } from "utils/types";
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

  interface Section {
    title: string;
    list: Array<IPlayer>;
    setList: (value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    { title: "Innocent", list: innocent_players, setList: setInnocentPlayers },
    { title: "Suspicious", list: sus_players, setList: setSusPlayers },
    { title: "Evil / Hit List", list: evil_players, setList: setEvilPlayers },
    { title: "Dead", list: dead_players, setList: setDeadPlayers },
    { title: "Unknown", list: unknown_players, setList: setUnknownPlayers },
  ];

  return (
    <div className={classes.root}>
      {sections.map(({ title, list, setList }) => (
        <Section key={title} title={title} list={list} setList={setList} />
      ))}
    </div>
  );
}
