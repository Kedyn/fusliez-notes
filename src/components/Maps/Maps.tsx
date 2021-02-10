import { getCurrentMap, setCurrentMap } from "store/slices/MapsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import Map from "components/Map";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./Maps.styles";
import { useTranslation } from "react-i18next";

export default function Maps(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const currentMap = useSelector(getCurrentMap);

  const dispatch = useDispatch();

  const classes = useStyles();

  const { t } = useTranslation();

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

      <div className={classes.MapsContainer}>
        <Map />
      </div>
    </div>
  );
}
