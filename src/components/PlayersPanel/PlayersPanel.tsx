import { IPlayer } from "utils/types";
import React from "react";
import PlayerSection from "components/PlayerSection";
import { useMobile } from "context/MobileContextProvider";
import { usePlayers } from "context/PlayersContextProvider";
import useStyles from "./PlayersPanel.styles";
import { useTranslation } from "react-i18next";

export default function PlayersPanel(): JSX.Element {
  const { t } = useTranslation();
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

    resetPlayersPositions,
  } = usePlayers()!; // eslint-disable-line

  const { isMobile } = useMobile()!; // eslint-disable-line

  const classes = useStyles({ isMobile });

  interface Section {
    title: string;
    list: Array<IPlayer>;
    setList: (value: Array<IPlayer>) => void;
  }

  const sections: Array<Section> = [
    {
      title: t("main.lists.innocent"),
      list: innocentPlayers,
      setList: setInnocentPlayers,
    },
    {
      title: t("main.lists.suspicious"),
      list: susPlayers,
      setList: setSusPlayers,
    },
    {
      title: `${t("main.lists.evil")} / ${t("main.lists.hitList")}`,
      list: evilPlayers,
      setList: setEvilPlayers,
    },
    {
      title: t("main.lists.dead"),
      list: deadPlayers,
      setList: setDeadPlayers,
    },
    {
      title: t("main.lists.unknown"),
      list: unknownPlayers,
      setList: setUnknownPlayers,
    },
  ];

  return (
    <div className={classes.PlayersPanel}>
      {sections.map(({ title, list, setList }) => (
        <PlayerSection
          key={title}
          title={title}
          list={list}
          setList={setList}
          isMobile={isMobile}
        />
      ))}

      {isMobile && (
        <button
          className={classes.PlayersPanelReset}
          onClick={() => resetPlayersPositions()}
        >
          Reset Positions
        </button>
      )}
    </div>
  );
}
