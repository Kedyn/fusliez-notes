import { IPlayer } from "utils/types";
import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useLocking } from "context/LockingContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./PlayerSection.styles";

export interface IPlayerSectionProps {
  title: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
  isMobile: boolean;
}

export default function PlayerSection(props: IPlayerSectionProps): JSX.Element {
  const { showNames } = useSettings()!; // eslint-disable-line
  const { isLocked } = useLocking()!; // eslint-disable-line

  console.log(isLocked);

  const classes = useStyles({ showNames });

  const { isMobile, title, list, setList } = props;

  return (
    <React.Fragment>
      <div className={classes.PlayerSection}>
        <h2 className={classes.PlayerSectionTitle}>{title}</h2>

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
          list={list}
          setList={setList}
          className={classes.PlayerSectionArea}
        >
          {list.map(({ color, playerName }, index) => (
            <Player
              key={index}
              color={color}
              playerName={playerName}
              list={list}
              setList={setList}
              index={index}
              isReadOnly={isLocked}
            />
          ))}
        </ReactSortable>
      </div>
    </React.Fragment>
  );
}
