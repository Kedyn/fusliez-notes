import { IPlayer, IPlayersList } from "utils/types";
import { useDispatch, useSelector } from "react-redux";

import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getPlayerEditLock } from "store/slices/PlayerEditLockSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import { setPlayersFromList } from "store/slices/PlayersListsSlice";
import useStyles from "./PlayerSection.styles";
import { useTranslation } from "react-i18next";

export interface IPlayerSectionProps {
  list: IPlayersList;
}

export default function PlayerSection(props: IPlayerSectionProps): JSX.Element {
  const showNames = useSelector(getShowNames);
  const isMobile = useSelector(getIsMobile);

  const [isSorting, setIsSorting] = React.useState(false);

  const classes = useStyles({ showNames });

  const { list } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isMobile) {
      if (isSorting) {
        document.querySelector("body")!.classList.add("dragging"); // eslint-disable-line
      } else {
        document.querySelector("body")!.classList.remove("dragging"); // eslint-disable-line
      }
    }
  }, [isSorting]);

  return (
    <React.Fragment>
      <div className={classes.PlayerSection}>
        <h2 className={classes.PlayerSectionTitle}>{t(list.title)}</h2>

        <ReactSortable
          group="players"
          handle=".player-handle"
          delayOnTouchOnly={isMobile}
          // have to add filter and preventOnFilter
          // to enable input on mobile devices
          // but by doing so
          // limits the dragging by the icon only
          filter={isMobile ? "input" : ""}
          preventOnFilter={false}
          delay={isMobile ? 10 : 0}
          touchStartThreshold={3}
          list={list.players}
          setList={(newState) => {
            dispatch(
              setPlayersFromList({
                listId: list.id as number,
                players: newState,
              })
            );
          }}
          className={classes.PlayerSectionArea}
          forceFallback={true}
          onChoose={() => setIsSorting(true)}
          onUnchoose={() => setIsSorting(false)}
        >
          {list.players.map(({ color, playerName }, index) => (
            <Player
              key={index}
              color={color}
              playerName={playerName}
              list={list}
              index={index}
            />
          ))}
        </ReactSortable>
      </div>
    </React.Fragment>
  );
}
