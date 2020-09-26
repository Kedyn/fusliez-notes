import { IPlayer } from "utils/types";
import React from "react";
import Section from "components/Section";
import { useData } from "context";
import useStyles from "./PlayersSection.styles";

export default function PlayersSection(): JSX.Element {
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

  const classes = useStyles();

  interface Section {
    title: string;
    list: Array<IPlayer>;
    setList: (value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    {
      title: "Innocent",
      list: innocentPlayers,
      setList: setInnocentPlayers,
    },
    {
      title: "Suspicious",
      list: susPlayers,
      setList: setSusPlayers,
    },
    {
      title: "Evil / Hit List",
      list: evilPlayers,
      setList: setEvilPlayers,
    },
    {
      title: "Dead",
      list: deadPlayers,
      setList: setDeadPlayers,
    },
    {
      title: "Unknown",
      list: unknownPlayers,
      setList: setUnknownPlayers,
    },
  ];

  // function swapPlayersColors(
  //   currentPlayerColor: string,
  //   targetPlayerColor: string,
  //   currentPlayerList: Array<IPlayer>
  // ) {
  //   // const currentPlayer = currentPlayerList.filter()
  //   console.log(currentPlayerList);
  // }

  return (
    <div className={classes.root}>
      {sections.map(({ title, list, setList }) => (
        <Section key={title} title={title} list={list} setList={setList} />
      ))}
    </div>
  );
}
