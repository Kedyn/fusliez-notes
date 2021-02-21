import AmongUsCanvas from "components/Map/AmongUsCanvas";
import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import { IMapName } from "utils/types/maps";
import Map from "components/Map";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./Maps.styles";
import { useTranslation } from "react-i18next";

export default function Maps(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const [currentMap, setCurrentMap] = React.useState<IMapName>(
    AmongUsCanvas.getCurrentMap()
  );

  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <div className={classes.Maps}>
      <div className={classes.MapsHeader}>
        {!isMobile && <h2 className={classes.MapsTitle}>{t("maps.title")}</h2>}

        <ButtonGroup inline={!isMobile}>
          <Button
            pressed={currentMap === "MiraHQ"}
            onClick={() => setCurrentMap("MiraHQ")}
          >
            Mira HQ
          </Button>
          <Button
            pressed={currentMap === "Polus"}
            onClick={() => setCurrentMap("Polus")}
          >
            Polus
          </Button>
          <Button
            pressed={currentMap === "TheSkeld"}
            onClick={() => setCurrentMap("TheSkeld")}
          >
            The Skeld
          </Button>
        </ButtonGroup>
      </div>

      <div className={classes.MapsContainer}>
        <Map currentMap={currentMap} />
      </div>
    </div>
  );
}
