import {
  getDeadSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import AUMT from "utils/AUMT";
import { ITheme } from "utils/types/theme";
import React from "react";
import { getMapPlayersScale } from "store/slices/SettingsSlice";
import { getPlayers } from "store/slices/PlayersSlice";
import { useSelector } from "react-redux";
import useStyles from "./Maps.styles";
import { useTheme } from "theming";
import { useTranslation } from "react-i18next";

interface IMapsProps {
  testing?: boolean;
}

export default function Maps(props: IMapsProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme<ITheme>();
  const { i18n } = useTranslation();

  const { testing } = props;

  const players = useSelector(getPlayers);
  const deadSectionId = useSelector(getDeadSectionId);
  const unusedSectionId = useSelector(getUnusedSectionId);
  const mapPlayersScale = useSelector(getMapPlayersScale);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      if (context !== null) {
        AUMT.Config.setI18n(i18n);
        AUMT.Config.setDebug(false);
        AUMT.Config.setContext(context);
        AUMT.Config.setTheme(theme);

        AUMT.Main.init();

        return () => {
          cancelAnimationFrame(AUMT.Main.getAnimFrame());
        };
      }
    }

    const changeScenesLanguage = () => {
      AUMT.SceneManager.changeLanguage();
    };

    i18n.on("languageChanged", changeScenesLanguage);

    return () => {
      i18n.off("languageChanged", changeScenesLanguage);
    };
  }, []);

  React.useEffect(() => {
    AUMT.Config.setTheme(theme);
  }, [theme]);

  React.useEffect(() => {
    AUMT.Config.updatePlayers(
      players,
      deadSectionId,
      unusedSectionId,
      mapPlayersScale
    );
  }, [players, deadSectionId, unusedSectionId, mapPlayersScale]);

  return (
    <div className={classes.Maps}>
      {!testing && (
        <canvas
          data-testid="map-canvas"
          tabIndex={1}
          ref={canvasRef}
          width={1920}
          height={1080}
          className={classes.MapsCanvas}
          onContextMenu={(evt) => evt.preventDefault()}
          onPointerMove={(evt) => AUMT.InputHandler.onPointerMove(evt)}
          onPointerDown={(evt) => AUMT.InputHandler.onPointerDown(evt)}
          onPointerUp={(evt) => AUMT.InputHandler.onPointerUp(evt)}
          onPointerEnter={(evt) => AUMT.InputHandler.onPointerEnter(evt)}
          onPointerLeave={(evt) => AUMT.InputHandler.onPointerLeave(evt)}
          onDoubleClick={(evt) => AUMT.InputHandler.onDoubleClick(evt)}
          onWheel={(evt) => AUMT.InputHandler.onWheel(evt)}
          onKeyDown={(evt) => AUMT.InputHandler.onKeyDown(evt)}
          onKeyUp={(evt) => AUMT.InputHandler.onKeyUp(evt)}
        >
          This section is not supported on your browser.
        </canvas>
      )}
    </div>
  );
}
