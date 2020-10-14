import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";

import Button from "components/common/Button";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import { useSelector } from "react-redux";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const [map, setMap] = React.useState("skeld");
  const [resetState, setResetState] = React.useState(false);

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const players = [
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const classes = useStyles({
    map: map === "skeld" ? "TheSkeld" : map === "mira" ? "Mirahq" : "Polus",
    isMobile,
    orientation,
  });

  let currentMap = <TheSkeld />;

  if (map === "mira") {
    currentMap = <MiraHq />;
  } else if (map === "polus") {
    currentMap = <Polus />;
  }

  React.useEffect(() => {
    if (resetState) setResetState(false);
  }, [resetState]);

  return (
    <div id="maps" className={classes.MapsPanel}>
      <div className={classes.MapsHeader}>
        {!isMobile && <h2 className={classes.MapsTitle}>{t("maps.title")}</h2>}
        <div className={classes.MapsToggle}>
          <Button
            className={classes.MapsToggleButton}
            pressed={map === "skeld"}
            onClick={() => setMap("skeld")}
          >
            The Skeld
          </Button>
          <Button
            className={classes.MapsToggleButton}
            pressed={map === "mira"}
            onClick={() => setMap("mira")}
          >
            Mira HQ
          </Button>
          <Button
            className={classes.MapsToggleButton}
            pressed={map === "polus"}
            onClick={() => setMap("polus")}
          >
            Polus
          </Button>
        </div>
      </div>
      <div className={classes.MapContainer}>
        {currentMap}

        <div className={classes.DraggableHeader}>
          <h3>{t("maps.dragInstructions")}</h3>
          <Button onClick={() => setResetState(true)}>
            {t("maps.resetPlayers")}
          </Button>
        </div>

        {!resetState &&
          players.map((player) => (
            <Draggable key={player} bounds="parent">
              <img
                src={`assets/images/player-icons/${player}.png`}
                className={classes.MapPlayerIcon}
                onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                  event.stopPropagation()
                }
                draggable={false}
              />
            </Draggable>
          ))}
      </div>
    </div>
  );
}
