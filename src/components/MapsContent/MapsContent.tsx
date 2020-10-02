import Button from "components/common/Button";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import useStyles from "./MapsContent.styles";
import { useTranslation } from "react-i18next";

export default function MapsContent({
  isMobile,
  orientation,
}: {
  isMobile: boolean;
  orientation: string;
}): JSX.Element {
  const { t } = useTranslation();
  const [map, setMap] = React.useState("skeld");
  const [resetState, setResetState] = React.useState(false);

  const players = [
    "blue",
    "brown",
    "gray",
    "green",
    "lightGreen",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "white",
    "yellow",
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
    <div id="maps" className={classes.root}>
      <div className={classes.mapNames}>
        <img
          src="assets/The_Skeld.png"
          alt="The Skeld"
          onClick={() => setMap("skeld")}
          className={`${classes.mapName} ${
            map === "skeld" ? classes.activeMap : ""
          }`}
        />
        <img
          src="assets/Mira_HQ.png"
          alt="Mira HQ"
          onClick={() => setMap("mira")}
          className={`${classes.mapName} ${
            map === "mira" ? classes.activeMap : ""
          }`}
        />
        <img
          src="assets/Polus_Map.png"
          alt="Polus"
          onClick={() => setMap("polus")}
          className={`${classes.mapName} ${
            map === "polus" ? classes.activeMap : ""
          }`}
        />
      </div>
      <div className={classes.wrapper}>
        {currentMap}

        {!resetState &&
          players.map((player) => (
            <Draggable key={player} bounds="parent">
              <img
                src={`assets/${player}.png`}
                className={classes.playerIcon}
                onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                  event.stopPropagation()
                }
                draggable={false}
              />
            </Draggable>
          ))}
      </div>
      <Button className={classes.button} onClick={() => setResetState(true)}>
        {t("maps.resetPlayers")}
      </Button>
    </div>
  );
}

MapsContent.defaultProps = {
  isMobile: false,
  orientation: "portrait",
};
