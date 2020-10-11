import ColorsMenu from "components/ColorsMenu";
import { IPlayer } from "utils/types";
import React from "react";
import cx from "classnames";
import { useMobile } from "context/MobileContextProvider";
import usePlayerStyles from "./Player.styles";
import { useSettings } from "context/SettingsContextProvider";
import { useTranslation } from "react-i18next";

export interface IPlayerProps {
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
  const [longPressed, setLongPressed] = React.useState(false);

  const htmlElRef = React.useRef(null);

  const classes = usePlayerStyles({
    showNames,
    isMobile,
    orientation,
    longPressed,
    ...props,
  });

  const { color, playerName, list, setList, index } = props;

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

  // put this in for mobile only
  // so users know they are interacting with the object
  const useLongPress = (ms = 50) => {
    const [startLongPress, setStartLongPress] = React.useState(false);

    React.useEffect(() => {
      let timerId: number | undefined = undefined;
      if (startLongPress) {
        timerId = setTimeout(() => {
          window.navigator.vibrate(-1) && window.navigator.vibrate(200);
          setLongPressed(true);
        }, ms);
      } else {
        setLongPressed(false);
        clearTimeout(timerId);
      }

      return () => {
        clearTimeout(timerId);
      };
    }, [ms, startLongPress]);

    return {
      onMouseDown: () => setStartLongPress(true),
      onMouseUp: () => setStartLongPress(false),
      onMouseLeave: () => setStartLongPress(false),
      onTouchStart: () => setStartLongPress(true),
      onTouchEnd: () => setStartLongPress(false),
    };
  };

  const longPressEvents = useLongPress();

  return (
    <div
      className={`${classes.Player} player-handle`}
      id={color}
      {...longPressEvents}
    >
      <div className={classes.PlayerTile}>
        {isMenuShowing && !isMobile && (
          <ColorsMenu
            isMenuShowing={isMenuShowing}
            setIsMenuShowing={setIsMenuShowing}
            currentColor={color}
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
              placeholder={t(`main.${color}`)}
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
