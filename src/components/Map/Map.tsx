import {
  getDeadSectionId,
  getResetSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import AmongUsCanvas from "./AmongUsCanvas";
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
        AmongUsCanvas.setDebug(true);
        AmongUsCanvas.setContext(context);
        AmongUsCanvas.setTheme(theme);
        AmongUsCanvas.init();

        return () => {
          cancelAnimationFrame(AmongUsCanvas.getAnimFrame());
        };
      }
    }
  }, []);

  React.useEffect(() => {
    AmongUsCanvas.setTheme(theme);
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
      onMouseMove={(evt) => AmongUsCanvasInputHandler.onMouseMove(evt)}
      onMouseDown={(evt) => AmongUsCanvasInputHandler.onMouseDown(evt)}
      onMouseUp={(evt) => AmongUsCanvasInputHandler.onMouseUp(evt)}
      onMouseLeave={(evt) => AmongUsCanvasInputHandler.onMouseLeave(evt)}
      onDoubleClick={(evt) => AmongUsCanvasInputHandler.onDoubleClick(evt)}
      onTouchMove={(evt) => AmongUsCanvasInputHandler.onTouchMove(evt)}
      onTouchStart={(evt) => AmongUsCanvasInputHandler.onTouchStart(evt)}
      onTouchEnd={(evt) => AmongUsCanvasInputHandler.onTouchEnd(evt)}
      onTouchCancel={(evt) => AmongUsCanvasInputHandler.onTouchCancel(evt)}
      onWheel={(evt) => AmongUsCanvasInputHandler.onWheel(evt)}
      onKeyDown={(evt) => AmongUsCanvasInputHandler.onKeyDown(evt)}
      onKeyUp={(evt) => AmongUsCanvasInputHandler.onKeyUp(evt)}
    >
      This section is not supported on your browser.
    </canvas>
  );
}
