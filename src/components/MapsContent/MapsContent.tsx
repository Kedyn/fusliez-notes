import Draggable from "react-draggable";
import React from "react";
import useStyles from "./MapsContent.styles";

export default function MapsContent(): JSX.Element {
  const [map, setMap] = React.useState("skeld");

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
    map: map == "skeld" ? "TheSkeld" : map == "mira" ? "Mirahq" : "Polus",
  });

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.mapNames}>
          <img
            src="assets/The_Skeld.png"
            alt="The Skeld"
            onClick={() => setMap("skeld")}
            className={`${classes.mapName} ${
              map == "skeld" ? classes.activeMap : ""
            }`}
          />
          <img
            src="assets/Mira_HQ.png"
            alt="Mira HQ"
            onClick={() => setMap("mira")}
            className={`${classes.mapName} ${
              map == "mira" ? classes.activeMap : ""
            }`}
          />
          <img
            src="assets/Polus_Map.png"
            alt="Polus"
            onClick={() => setMap("polus")}
            className={`${classes.mapName} ${
              map == "polus" ? classes.activeMap : ""
            }`}
          />
        </div>
        <div className={classes.wrapper}>
          <img
            id="map"
            src={`assets/${
              map == "skeld" ? "TheSkeld" : map == "mira" ? "Mirahq" : "Polus"
            }.png`}
            className={classes.map}
            draggable={false}
          />

          {players.map((player) => (
            <Draggable key={player} bounds="parent">
              <img
                className="player-handle"
                src={`assets/${player}.png`}
                draggable={false}
              />
            </Draggable>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
