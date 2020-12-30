import { getIsColorBlind, getShowNames } from "store/slices/SettingsSlice";
import { getPlayer, setPlayerName } from "store/slices/PlayersSlice";
import { useDispatch, useSelector } from "react-redux";

import ColorsMenu from "components/ColorsMenu";
import { IPlayerColor } from "utils/types/players";
import { PLAYER_IMAGE } from "constants/players";
import React from "react";
import cx from "classnames";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getPlayerEditLock } from "store/slices/PlayerEditLockSlice";
import useStyles from "./Player.styles";
import { useTranslation } from "react-i18next";

export interface IPlayerProps {
  playerId: IPlayerColor;
}

export default function Player(props: IPlayerProps): JSX.Element {
  const { playerId } = props;
  const { name, color } = useSelector(getPlayer(playerId));
  const isMobile = useSelector(getIsMobile);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const isLocked = useSelector(getPlayerEditLock);

  const dispatch = useDispatch();

  const [isMenuShowing, setIsMenuShowing] = React.useState(false);

  const htmlElRef = React.useRef(null);

  const classes = useStyles({
    isMobile,
    showNames,
    isColorBlind,
    isLocked,
    color,
    name,
  });

  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setPlayerName({ player: playerId, newName: event.currentTarget.value })
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
        ></div>
        {showNames && (
          <div className={classes.PlayerName}>
            {!isLocked && (
              <input
                type="text"
                placeholder={t(`main.${color}`)}
                className={classes.PlayerInput}
                maxLength={10}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                onKeyPress={handleKeyPress}
                value={name}
                ref={htmlElRef}
              />
            )}
            {isLocked && <>{name !== "" ? name : t(`main.${color}`)}</>}
          </div>
        )}
      </div>
      {isColorBlind && (
        <div className={classes.PlayerHelpText}>{t(`main.${color}`)}</div>
      )}
    </div>
  );
}
