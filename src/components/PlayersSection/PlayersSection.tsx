import React from "react";
import Section from "components/Section";
import { useData } from "context";
import { IPlayer } from "utils/types";
import useStyles from "./PlayersSection.styles";
import { MobileContext } from "components/App";

export default function PlayersSection(): JSX.Element {
  const {
    innocentPlayers,
    susPlayers,
    evilPlayers,
    deadPlayers,
    unknownPlayers,
    unusedPlayers,
    setInnocentPlayers,
    setSusPlayers,
    setEvilPlayers,
    setDeadPlayers,
    setUnknownPlayers,
    setUnusedPlayers,
  } = useData()!; // eslint-disable-line

  const classes = useStyles();
  const isMobile = React.useContext(MobileContext);

  interface Section {
    title: string;
    list: Array<IPlayer>;
    // listName: string;
    setList: (value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    {
      title: "Innocent",
      list: innocentPlayers,
      // listName: "innocentPlayers",
      setList: setInnocentPlayers,
    },
    {
      title: "Suspicious / Hit List",
      list: susPlayers,
      // listName: "susPlayers",
      setList: setSusPlayers,
    },
    {
      title: "Evil",
      list: evilPlayers,
      // listName: "evilPlayers",
      setList: setEvilPlayers,
    },
    {
      title: "Dead",
      list: deadPlayers,
      // listName: "deadPlayers",
      setList: setDeadPlayers,
    },
    {
      title: "Unknown",
      list: unknownPlayers,
      // listName: "unknownPlayers",
      setList: setUnknownPlayers,
    },
    {
      title: "Unused",
      list: unusedPlayers,
      // listName: "unusedPlayers",
      setList: setUnusedPlayers,
    },
  ];

  return (
    <div className={classes.root}>
      {sections.map(({ title, list, setList }) => (
        <Section
          key={title}
          title={title}
          list={list}
          setList={setList}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
