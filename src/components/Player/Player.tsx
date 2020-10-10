import ColorsMenu from "components/ColorsMenu";
import { IPlayer } from "utils/types";
import React from "react";
import cx from "classnames";
import { useMobile } from "context/MobileContextProvider";
import usePlayerStyles from "./Player.styles";
import { useSettings } from "context/SettingsContextProvider";
import { useTranslation } from "react-i18next";

export interface IPlayerProps {
  id: string | number;
  color: string;
  playerName: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const { t } = useTranslation();
  const { isMobile, orientation } = useMobile()!; // eslint-disable-line
  const { showNames } = useSettings()!; // eslint-disable-line

  const [isMenuShowing, setIsMenuShowing] = React.useState(false);

  const htmlElRef = React.useRef(null);

  const classes = usePlayerStyles({
    showNames,
    isMobile,
    orientation,
    ...props,
  });

  const { id, color, playerName, list, setList, index } = props;

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = [...list];
    players[player].playerName = event.currentTarget.value;
    setList(players);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const currentInput = (htmlElRef.current as unknown) as HTMLInputElement;
      const nextParent =
        currentInput.parentElement?.parentElement?.parentElement
          ?.nextElementSibling ??
        currentInput.parentElement?.parentElement?.parentElement?.parentElement
          ?.firstElementChild;
      const nextInput = nextParent?.lastChild?.lastChild
        ?.firstChild as HTMLInputElement;
      nextInput?.select();
    }
  };

  return (
    <div className={`${classes.Player} player-handle`} id={color}>
      <div className={classes.PlayerTile}>
        {isMenuShowing && !isMobile && (
          <ColorsMenu
            isMenuShowing={isMenuShowing}
            setIsMenuShowing={setIsMenuShowing}
            currentColor={id}
          />
        )}
        <div
          className={cx(classes.PlayerIcon, "player-handle")}
          onClick={() => {
            if (showNames && !isMobile) {
              setIsMenuShowing(!isMenuShowing);
            }
          }}
          style={{
            backgroundImage: `url(assets/images/player-icons/${color}.png)`,
          }}
        ></div>
        {showNames && (
          <div className={classes.PlayerName}>
            <input
              type="text"
              placeholder={color}
              className={classes.PlayerInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(index, event)
              }
              onKeyPress={handleKeyPress}
              value={playerName}
              ref={htmlElRef}
            />
          </div>
        )}
      </div>
    </div>
  );
}
