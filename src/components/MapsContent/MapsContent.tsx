import Draggable from "react-draggable";
import React from "react";
import useStyles from "./MapsContent.styles";

export interface IMapsContentProps {}

export default function MapsContent(props: IMapsContentProps): JSX.Element {
  const classes = useStyles();

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

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <img
            src="assets/The_Skeld.png"
            alt="The Skeld"
            onClick={() => setMap("skeld")}
          />
          <img
            src="assets/Mira_HQ.png"
            alt="Mira HQ"
            onClick={() => setMap("mira")}
          />
          <img
            src="assets/Polus_Map.png"
            alt="Polus"
            onClick={() => setMap("polus")}
          />
        </div>
        <div className={classes.wrapper}>
          <img
            src={`assets/${
              map == "skeld" ? "TheSkeld" : map == "mira" ? "Mirahq" : "Polus"
            }.png`}
          />

          {players.map((player) => (
            <Draggable key={player} bounds="parent">
              <img className="player-handle" src={`assets/${player}.png`} />
            </Draggable>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
