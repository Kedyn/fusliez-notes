import { IPlayer } from "utils/types";
import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import colorNameToRGB from "utils/colorConverter";
import { useData } from "context";
import useStyles from "./Section.styles";

export interface ISectionProps {
  title: string;
  list: Array<IPlayer>;
  listName: string;
  setList: (value: IPlayer[]) => void;
  isMobile: boolean;
}

export default function Section(props: ISectionProps): JSX.Element {
  const { names } = useData()!; // eslint-disable-line
  const classes = useStyles({ names });

  const { title, list, setList } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h2>{title}</h2>

        <ReactSortable
          group="players"
          handle=".player-handle"
          delayOnTouchStart={props.isMobile}
          delay={props.isMobile ? 100 : 0}
          list={list}
          setList={setList}
          className={classes.players}
        >
          {list.map(({ id, color, name }, index) => (
            <Player
              key={id}
              id={id}
              // temporary solution for alternative colors for better contrast
              // if needed, we can move these colors to be part of the nested player object
              // and have the backgroundColor as one of the keys and use that to map it out
              backgroundColor={colorNameToRGB(
                color === "brown"
                  ? "saddlebrown"
                  : color === "blue"
                  ? "cornflowerblue"
                  : color === "purple"
                  ? "darkorchid"
                  : color === "red"
                  ? "scarlet"
                  : color
              )}
              color={color}
              name={name}
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
