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
    setPlayers,
  } = useData()!; // eslint-disable-line

  const classes = useStyles();
  const isMobile = React.useContext(MobileContext);

  interface Section {
    title: string;
    list: Array<IPlayer>;
    listName: string;
    // setList: (key: string, value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    {
      title: "Innocent",
      list: innocentPlayers,
      listName: "innocentPlayers",
      // setList: setPlayers("innocentPlayers", innocentPlayers),
    },
    {
      title: "Suspicious / Hit List",
      list: susPlayers,
      listName: "susPlayers",
      // setList: setPlayers("susPlayers", susPlayers),
    },
    {
      title: "Evil",
      list: evilPlayers,
      listName: "evilPlayers",
      // setList: setPlayers("evilPlayers", evilPlayers),
    },
    {
      title: "Dead",
      list: deadPlayers,
      listName: "deadPlayers",
      // setList: setPlayers("deadPlayers", deadPlayers),
    },
    {
      title: "Unknown",
      list: unknownPlayers,
      listName: "unknownPlayers",
      // setList: setPlayers("unknownPlayers", unknownPlayers),
    },
    {
      title: "Unused",
      list: unusedPlayers,
      listName: "unusedPlayers",
      // setList: setPlayers("unusedPlayers", unusedPlayers),
    },
  ];

  return (
    <div className={classes.root}>
      {sections.map(({ title, list, listName }) => (
        <Section
          key={title}
          title={title}
          list={list}
          listName={listName}
          setList={() => setPlayers(listName, list)}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
