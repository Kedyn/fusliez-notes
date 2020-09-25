import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import useStyles from "./MapsContent.styles";

// export interface IMapsContentProps {
//   isMobile: boolean;
// }props: IMapsContentProps

export default function MapsContent(): JSX.Element {
  const [map, setMap] = React.useState("skeld");

  const classes = useStyles({
    map: map === "skeld" ? "TheSkeld" : map === "mira" ? "Mirahq" : "Polus",
  });

  let currentMap = <TheSkeld />;

  if (map === "mira") {
    currentMap = <MiraHq />;
  } else if (map === "polus") {
    currentMap = <Polus />;
  }

  return (
    <div className={classes.root}>
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
      <div className={classes.wrapper}>{currentMap}</div>
    </div>
  );
}
