import { getCurrentMap, setCurrentMap } from "store/slices/MapsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import React from "react";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./Maps.styles";
import { useTranslation } from "react-i18next";

export default function Maps(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const map = useSelector(getCurrentMap);

  const dispatch = useDispatch();

  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <div className={classes.Maps}>
      <div className={classes.MapsHeader}>
        {!isMobile && <h2 className={classes.MapsTitle}>{t("maps.title")}</h2>}

        <ButtonGroup inline={!isMobile}>
          <Button
            pressed={map === "TheSkeld"}
            onClick={() => dispatch(setCurrentMap("TheSkeld"))}
          >
            The Skeld
          </Button>
          <Button
            pressed={map === "MiraHq"}
            onClick={() => dispatch(setCurrentMap("MiraHq"))}
          >
            Mira HQ
          </Button>
          <Button
            pressed={map === "Polus"}
            onClick={() => dispatch(setCurrentMap("Polus"))}
          >
            Polus
          </Button>
        </ButtonGroup>
      </div>

      <div className={classes.MapsContainer}>Under reconstruction...</div>
    </div>
  );
}
