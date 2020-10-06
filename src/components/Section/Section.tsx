import { IPlayer } from "utils/types";
import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./Section.styles";

export interface ISectionProps {
  title: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
  isMobile: boolean;
}

export default function Section(props: ISectionProps): JSX.Element {
  const { showNames } = useSettings()!; // eslint-disable-line

  const classes = useStyles({ showNames });

  const { isMobile, title, list, setList } = props;
  return (
    <React.Fragment>
      <div className={classes.Section}>
        <h2 className={classes.SectionTitle}>{title}</h2>

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
          className={classes.SectionArea}
        >
          {list.map(({ id, color, playerName }, index) => (
            <Player
              key={id}
              id={id}
              color={color}
              playerName={playerName}
              list={list}
              setList={setList}
              index={index}
            />
          ))}
        </ReactSortable>
      </div>
    </React.Fragment>
  );
}
