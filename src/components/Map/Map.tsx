import { ICoordinates } from "utils/types/shared";
import { IMapContext } from "utils/types/maps";
import { ITheme } from "utils/types/theme";
import MapPlayers from "components/MapPlayers";
import React from "react";
import { getCurrentMap } from "store/slices/MapsSlice";
import { useSelector } from "react-redux";
import useStyles from "./Map.styles";
import { useTheme } from "react-jss";

const MapContext = React.createContext<IMapContext | null>(null);
const FrameContext = React.createContext<number>(0);

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default function Map(): JSX.Element {
  const currentMap = useSelector(getCurrentMap);

  const theme = useTheme<ITheme>();

  const classes = useStyles();

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const miraHQRef = React.useRef<HTMLImageElement>(null);
  const polusRef = React.useRef<HTMLImageElement>(null);
  const theSkeldRef = React.useRef<HTMLImageElement>(null);
  const playersRef = React.useRef<HTMLImageElement>(null);

  const [frameCount, setFrameCount] = React.useState<number>(0);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(
    null
  );
  const [mouseDown, setMouseDown] = React.useState<boolean>(false);
  const [mousePos, setMousePos] = React.useState<ICoordinates>({ x: 0, y: 0 });
  const [loading, setLoading] = React.useState<number>(0);

  React.useEffect(() => {
    const animFrame = requestAnimationFrame(() => {
      setFrameCount(frameCount + 1);
    });

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [frameCount]);

  React.useEffect(() => {
    if (canvasRef.current !== null) {
      const canvasContext = canvasRef.current.getContext("2d");

      if (canvasContext !== null) {
        setContext(canvasContext as CanvasRenderingContext2D);
      }
    }
  }, []);

  if (context !== null) {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (loading === 1) {
      let map = miraHQRef;

      switch (currentMap) {
        case "Polus":
          map = polusRef;

          break;

        case "TheSkeld":
          map = theSkeldRef;

          break;

        default:
          map = miraHQRef;
      }

      if (map.current !== null) {
        context.drawImage(
          map.current,
          0,
          0,
          map.current.width,
          map.current.height,
          0,
          0,
          CANVAS_WIDTH,
          CANVAS_HEIGHT - 200
        );
      }
    } else {
      context.fillStyle = theme.textColorPrimary;
      context.font = "40px impact";

      context.fillText(
        "Loading...",
        CANVAS_WIDTH / 2 - 50,
        CANVAS_HEIGHT / 2 - 10
      );
    }
  }

  const setMousePosition = (evt: React.TouchEvent) => {
    const rect = evt.currentTarget.getBoundingClientRect();

    setMousePos({
      x: (evt.touches[0].clientX - rect.left) * (CANVAS_WIDTH / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (CANVAS_HEIGHT / rect.height),
    });
  };

  return (
    <MapContext.Provider
      value={{
        canvasContext: context,
        miraHQ: miraHQRef.current,
        polus: polusRef.current,
        theSkeld: theSkeldRef.current,
        players: playersRef.current,
        mousePos,
        mouseDown,
      }}
    >
      <FrameContext.Provider value={frameCount}>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className={classes.Map}
          onContextMenu={(evt) => evt.preventDefault()}
          onMouseMove={(evt) => {
            const rect = evt.currentTarget.getBoundingClientRect();

            setMousePos({
              x: (evt.clientX - rect.left) * (CANVAS_WIDTH / rect.width),
              y: (evt.clientY - rect.top) * (CANVAS_HEIGHT / rect.height),
            });
          }}
          onMouseDown={(evt) => {
            evt.preventDefault();
            setMouseDown(true);
          }}
          onMouseUp={(evt) => {
            evt.preventDefault();
            setMouseDown(false);
          }}
          onMouseLeave={(evt) => setMouseDown(false)}
          onTouchStart={(evt) => {
            evt.preventDefault();
            setMousePosition(evt);
            setMouseDown(true);
          }}
          onTouchEnd={(evt) => {
            evt.preventDefault();
            setMouseDown(false);
          }}
          onTouchCancel={(evt) => {
            evt.preventDefault();
            setMouseDown(false);
          }}
          onTouchMove={(evt) => {
            evt.preventDefault();

            setMousePosition(evt);
          }}
        >
          This section is not supported on your browser.
        </canvas>
        <img
          ref={miraHQRef}
          src="assets/images/MiraHQ.png"
          alt="MiraHQ Map"
          className={classes.MapImage}
          onLoad={() => setLoading(loading + 0.25)}
        />
        <img
          ref={polusRef}
          src="assets/images/Polus.png"
          alt="Polus Map"
          className={classes.MapImage}
          onLoad={() => setLoading(loading + 0.25)}
        />
        <img
          ref={theSkeldRef}
          src="assets/images/TheSkeld.png"
          alt="TheSkeld Map"
          className={classes.MapImage}
          onLoad={() => setLoading(loading + 0.25)}
        />
        <img
          ref={playersRef}
          src="assets/images/players.png"
          alt="Map players"
          className={classes.MapImage}
          onLoad={() => setLoading(loading + 0.25)}
        />

        {loading === 1 && <MapPlayers />}
      </FrameContext.Provider>
    </MapContext.Provider>
  );
}

export const useMapContext = (): IMapContext => {
  React.useContext(FrameContext);
  return React.useContext(MapContext)!;
};

export const useMapFrame = (): number => React.useContext(FrameContext);
