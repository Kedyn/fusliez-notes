import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";

import ColorsMenu from "components/ColorsMenu";
import { IPlayer } from "utils/types";
import React from "react";
import cx from "classnames";
import usePlayerStyles from "./Player.styles";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export interface IPlayerProps {
  color: string;
  playerName: string;
  list: Array<IPlayer>;
  setList: (value: IPlayer[]) => void;
  index: number;
  isReadOnly: boolean;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);

  const [isMenuShowing, setIsMenuShowing] = React.useState(false);

  const htmlElRef = React.useRef(null);

  const classes = usePlayerStyles({
    showNames,
    isMobile,
    isColorBlind,
    orientation,
    ...props,
  });

  const { color, playerName, list, setList, index, isReadOnly } = props;

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = list.map((value) => ({ ...value }));
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
    <div className={classes.Player} id={color} title={color}>
      <div className={`${classes.PlayerTile} player-handle`}>
        {isMenuShowing && !isMobile && !isReadOnly && (
          <ColorsMenu
            isMenuShowing={isMenuShowing}
            setIsMenuShowing={setIsMenuShowing}
            currentColor={color}
          />
        )}
        <div
          className={cx(classes.PlayerIcon, "player-handle")}
          onClick={() => {
            if (isReadOnly) {
              return;
            }

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
            {!isReadOnly && (
              <input
                type="text"
                placeholder={t(`main.${color}`)}
                className={classes.PlayerInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, event)
                }
                onKeyPress={handleKeyPress}
                value={playerName}
                ref={htmlElRef}
              />
            )}
            {isReadOnly && (
              <>{playerName !== "" ? playerName : t(`main.${color}`)}</>
            )}
          </div>
        )}
      </div>
      {isColorBlind && (
        <div className={classes.PlayerHelpText}>{t(`main.${color}`)}</div>
      )}
    </div>
  );
}
