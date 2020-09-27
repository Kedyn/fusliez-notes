import ColorsMenu from "../ColorsMenu";
import { IPlayer } from "utils/types";
import React from "react";
import { useData } from "context";
import usePlayerStyles from "./Player.styles";
import useInputStyles from "../common/Input/Input.styles";

export interface IPlayerProps {
  id: string | number;
  color: string;
  name: string;
  list: Array<IPlayer>;
  listName: string;
  setList: (value: IPlayer[]) => void;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const [isMenuShowing, setIsMenuShowing] = React.useState(false);
  const htmlElRef = React.useRef(null);

  const { names } = useData()!; // eslint-disable-line
  const playerStyles = usePlayerStyles({ names, ...props });
  const inputStyles = useInputStyles();

  const { id, color, name, list, setList, index } = props;

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = [...list];
    players[player].name = event.currentTarget.value;
    setList(players);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const currentInput = (htmlElRef.current as unknown) as HTMLInputElement;
      const nextParent =
        currentInput.parentElement?.parentElement?.nextElementSibling ??
        currentInput.parentElement?.parentElement?.parentElement
          ?.firstElementChild;
      const nextInput = nextParent?.lastChild?.firstChild as HTMLInputElement;
      nextInput?.select();
    }
  };

  return (
    <div className={`${playerStyles.container} player-handle`}>
      {isMenuShowing && (
        <ColorsMenu
          isMenuShowing={isMenuShowing}
          setIsMenuShowing={setIsMenuShowing}
          currentColor={id}
        />
      )}
      <div className={playerStyles.icon}>
        <img
          onClick={() => {
            if (names) {
              setIsMenuShowing(!isMenuShowing);
            }
          }}
          src={`assets/${color}.png`}
          alt={color}
          className="player-handle"
        />
      </div>
      {names && (
        <div className={playerStyles.name}>
          <input
            type="text"
            placeholder="Player"
            className={`${playerStyles.input} ${inputStyles.root}`}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(index, event)
            }
            onKeyPress={handleKeyPress}
            value={name}
            ref={htmlElRef}
          />
        </div>
      )}
    </div>
  );
}
