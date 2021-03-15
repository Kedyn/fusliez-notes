import {
  getDeadSectionId,
  getResetSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import AmongUsCanvas from "./AmongUsCanvas";
import AmongUsCanvasGlobals from "./AmongUsCanvas/CanvasGlobals";
import AmongUsCanvasInputHandler from "./AmongUsCanvas/InputHandler";
import { IMapName } from "utils/types/maps";
import { ITheme } from "utils/types/theme";
import React from "react";
import { getPlayers } from "store/slices/PlayersSlice";
import { useSelector } from "react-redux";
import useStyles from "./Map.styles";
import { useTheme } from "react-jss";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export interface IMapProps {
  currentMap: IMapName;
}

export default function Map(props: IMapProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme<ITheme>();

  const currentMap = props.currentMap;
  const players = useSelector(getPlayers);
  const resetSectionId = useSelector(getResetSectionId);
  const deadSectionId = useSelector(getDeadSectionId);
  const unusedSectionId = useSelector(getUnusedSectionId);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      if (context != null) {
        AmongUsCanvasGlobals.setDebug(true);
        AmongUsCanvasGlobals.setContext(context);
        AmongUsCanvasGlobals.setTheme(theme);
        AmongUsCanvas.init();

        return () => {
          cancelAnimationFrame(AmongUsCanvas.getAnimFrame());
        };
      }
    }
  }, []);

  React.useEffect(() => {
    AmongUsCanvasGlobals.setTheme(theme);
  }, [theme]);

  React.useEffect(() => {
    AmongUsCanvas.setCurrentMap(currentMap);
  }, [currentMap]);

  React.useEffect(() => {
    AmongUsCanvas.updatePlayers();
  }, [players, resetSectionId, deadSectionId, unusedSectionId]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className={classes.Map}
      onContextMenu={(evt) => evt.preventDefault()}
      onPointerMove={(evt) => AmongUsCanvasInputHandler.onPointerMove(evt)}
      onPointerDown={(evt) => AmongUsCanvasInputHandler.onPointerDown(evt)}
      onPointerUp={(evt) => AmongUsCanvasInputHandler.onPointerUp(evt)}
      onPointerEnter={(evt) => AmongUsCanvasInputHandler.onPointerEnter(evt)}
      onPointerLeave={(evt) => AmongUsCanvasInputHandler.onPointerLeave(evt)}
      onDoubleClick={(evt) => AmongUsCanvasInputHandler.onDoubleClick(evt)}
      onWheel={(evt) => AmongUsCanvasInputHandler.onWheel(evt)}
      onKeyDown={(evt) => AmongUsCanvasInputHandler.onKeyDown(evt)}
      onKeyUp={(evt) => AmongUsCanvasInputHandler.onKeyUp(evt)}
    >
      This section is not supported on your browser.
    </canvas>
  );
}
