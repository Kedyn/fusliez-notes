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
    setList: (key: string, value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    {
      title: "Innocent",
      list: innocentPlayers,
      setList: setPlayers,
      // setList: setPlayers("innocentPlayers", innocentPlayers),
    },
    {
      title: "Suspicious / Hit List",
      list: susPlayers,
      setList: setPlayers,
      // setList: setPlayers("susPlayers", susPlayers),
    },
    {
      title: "Evil",
      list: evilPlayers,
      setList: setPlayers,
      // setList: setPlayers("evilPlayers", evilPlayers),
    },
    {
      title: "Dead",
      list: deadPlayers,
      setList: setPlayers,
      // setList: setPlayers("deadPlayers", deadPlayers),
    },
    {
      title: "Unknown",
      list: unknownPlayers,
      setList: setPlayers,
      // setList: setPlayers("unknownPlayers", unknownPlayers),
    },
    {
      title: "Unused",
      list: unusedPlayers,
      // setList: setPlayers("unusedPlayers", unusedPlayers),
      setList: setPlayers,
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
