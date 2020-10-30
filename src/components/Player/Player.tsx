import { IPlayer, IPlayersList } from "utils/types";
import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import ColorsMenu from "components/ColorsMenu";
import React from "react";
import cx from "classnames";
import { getPlayerEditLock } from "store/slices/PlayerEditLockSlice";
import { setPlayersFromList } from "store/slices/PlayersListsSlice";
import usePlayerStyles from "./Player.styles";
import { useTranslation } from "react-i18next";

export interface IPlayerProps {
  color: string;
  playerName: string;
  list: IPlayersList;
  index: number;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const isLocked = useSelector(getPlayerEditLock);

  const [isMenuShowing, setIsMenuShowing] = React.useState(false);

  const dispatch = useDispatch();

  const htmlElRef = React.useRef(null);

  const classes = usePlayerStyles({
    showNames,
    isMobile,
    isColorBlind,
    orientation,
    ...props,
  });

  const { color, playerName, list, index } = props;

  const handleChange = (
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players: Array<IPlayer> = list.players.map((value) => ({ ...value }));

    players[player].playerName = event.currentTarget.value;

    dispatch(
      setPlayersFromList({
        listId: list.id as number,
        players: players,
      })
    );
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
        {isMenuShowing && !isMobile && !isLocked && (
          <ColorsMenu
            isMenuShowing={isMenuShowing}
            setIsMenuShowing={setIsMenuShowing}
            currentColor={color}
          />
        )}
        <div
          className={cx(classes.PlayerIcon, "player-handle")}
          onClick={() => {
            if (isLocked) {
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
            {!isLocked && (
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
            {isLocked && (
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
