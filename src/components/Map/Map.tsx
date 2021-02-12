import AmongUsCanvas from "./AmongUsCanvas";
import { ITheme } from "utils/types/theme";
import React from "react";
import useStyles from "./Map.styles";
import { useTheme } from "react-jss";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default function Map(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme<ITheme>();

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");

      if (context != null) {
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

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className={classes.Map}
      onContextMenu={(evt) => evt.preventDefault()}
      onMouseMove={(evt) => AmongUsCanvas.handleMouseMove(evt)}
      onMouseDown={(evt) => AmongUsCanvas.handleMouseDown(evt)}
      onMouseUp={(evt) => AmongUsCanvas.handleMouseUp(evt)}
      onMouseLeave={(evt) => AmongUsCanvas.handleMouseLeave(evt)}
      onDoubleClick={(evt) => AmongUsCanvas.handleDoubleClick(evt)}
      onTouchStart={(evt) => AmongUsCanvas.handleTouchStart(evt)}
      onTouchEnd={(evt) => AmongUsCanvas.handleTouchEnd(evt)}
      onTouchCancel={(evt) => AmongUsCanvas.handleTouchCancel(evt)}
      onTouchMove={(evt) => AmongUsCanvas.handleTouchMove(evt)}
    >
      This section is not supported on your browser.
    </canvas>
  );
}
