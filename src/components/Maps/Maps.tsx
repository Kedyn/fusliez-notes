import { getCurrentMap, setCurrentMap } from "store/slices/MapsSlice";
import { useDispatch, useSelector } from "react-redux";

import { AmongUsMapsInstance } from "./AmongUsMaps";
import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import { ITheme } from "utils/types/theme";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./Maps.styles";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";

export default function Maps(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const currentMap = useSelector(getCurrentMap);

  const dispatch = useDispatch();

  const classes = useStyles();

  const theme = useTheme<ITheme>();

  const { t } = useTranslation();

  const canvasContainerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        AmongUsMapsInstance.setContext(context);
        AmongUsMapsInstance.setTheme(theme);

        AmongUsMapsInstance.changeCurrentMap(currentMap);

        AmongUsMapsInstance.init();
      }
    }

    return () => {
      window.cancelAnimationFrame(AmongUsMapsInstance.getAnimFrame());
    };
  }, []);

  React.useEffect(() => {
    AmongUsMapsInstance.changeCurrentMap(currentMap);
  }, [currentMap]);

  return (
    <div className={classes.Maps}>
      <div className={classes.MapsHeader}>
        {!isMobile && <h2 className={classes.MapsTitle}>{t("maps.title")}</h2>}

        <ButtonGroup inline={!isMobile}>
          <Button
            pressed={currentMap === "TheSkeld"}
            onClick={() => dispatch(setCurrentMap("TheSkeld"))}
          >
            The Skeld
          </Button>
          <Button
            pressed={currentMap === "MiraHQ"}
            onClick={() => dispatch(setCurrentMap("MiraHQ"))}
          >
            Mira HQ
          </Button>
          <Button
            pressed={currentMap === "Polus"}
            onClick={() => dispatch(setCurrentMap("Polus"))}
          >
            Polus
          </Button>
        </ButtonGroup>
      </div>

      <div ref={canvasContainerRef} className={classes.MapsContainer}>
        <canvas
          ref={canvasRef}
          width="1920"
          height="1080"
          className={classes.MapsCanvas}
          onContextMenu={(evt) => evt.preventDefault()}
          onMouseDown={(evt) => AmongUsMapsInstance.handleMouseDown(evt)}
          onMouseUp={(evt) => AmongUsMapsInstance.handleMouseUp(evt)}
          onMouseMove={(evt) => AmongUsMapsInstance.handleMouseMove(evt)}
        >
          This section is not supported on your browser.
        </canvas>
      </div>
    </div>
  );
}
