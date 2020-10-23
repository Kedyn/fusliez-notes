import {
  getPlayerEditLock,
  togglePlayerEditLock,
} from "store/slices/PlayerEditLockSlice";
import {
  getPlayersFromList,
  resetPlayersListsPositions,
  setPlayersFromList,
} from "store/slices/PlayersListsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { IPlayer } from "utils/types";
import PlayerSection from "components/PlayerSection";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import useStyles from "./PlayersPanel.styles";
import { useTranslation } from "react-i18next";

export default function PlayersPanel(): JSX.Element {
  const innocentPlayers = useSelector(getPlayersFromList("innocentPlayers"));
  const susPlayers = useSelector(getPlayersFromList("susPlayers"));
  const evilPlayers = useSelector(getPlayersFromList("evilPlayers"));
  const deadPlayers = useSelector(getPlayersFromList("deadPlayers"));
  const unknownPlayers = useSelector(getPlayersFromList("unknownPlayers"));

  const showNames = useSelector(getShowNames);

  const isLocked = useSelector(getPlayerEditLock);

  const isMobile = useSelector(getIsMobile);

  const dispatch = useDispatch();

  const { t } = useTranslation();

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
      setList: (value) =>
        dispatch(
          setPlayersFromList({ listName: "innocentPlayers", players: value })
        ),
    },
    {
      title: t("main.lists.suspicious"),
      list: susPlayers,
      setList: (value) =>
        dispatch(
          setPlayersFromList({ listName: "susPlayers", players: value })
        ),
    },
    {
      title: `${t("main.lists.evil")} / ${t("main.lists.hitList")}`,
      list: evilPlayers,
      setList: (value) =>
        dispatch(
          setPlayersFromList({ listName: "evilPlayers", players: value })
        ),
    },
    {
      title: t("main.lists.dead"),
      list: deadPlayers,
      setList: (value) =>
        dispatch(
          setPlayersFromList({ listName: "deadPlayers", players: value })
        ),
    },
    {
      title: t("main.lists.unknown"),
      list: unknownPlayers,
      setList: (value) =>
        dispatch(
          setPlayersFromList({ listName: "unknownPlayers", players: value })
        ),
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

      <div className={classes.PlayersControls}>
        {showNames && (
          <Button onClick={() => dispatch(togglePlayerEditLock())}>
            {isLocked ? t("controls.unlockPlayers") : t("controls.lockPlayers")}
          </Button>
        )}

        {isMobile && (
          <Button onClick={() => dispatch(resetPlayersListsPositions())}>
            {t("controls.resetAll")}
          </Button>
        )}
      </div>
    </div>
  );
}
