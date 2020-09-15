import { IPlayer } from "utils/types";
import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { useData } from "context";
import useStyles from "./Section.styles";

export interface ISectionProps {
  title: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
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
          list={list}
          setList={setList}
          className={classes.players}
        >
          {list.map(({ id, color, name }, index) => (
            <Player
              key={id}
              id={id}
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
