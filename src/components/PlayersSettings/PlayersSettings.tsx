import {
  getInitMapWithAllPlayers,
  getIsColorBlind,
  getMapPlayersScale,
  getShowNames,
  getTrackEmergencyButtonUsages,
  setInitMapWithAllPlayers,
  setIsColorBlind,
  setMapPlayersScale,
  setShowNames,
  setTrackEmergencyButtonUsages,
} from "store/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";

import Input from "components/common/Input";
import React from "react";
import Switch from "components/common/Switch";
import useStyles from "./PlayersSettings.styles";
import { useTranslation } from "react-i18next";

export default function PlayersSettings(): JSX.Element {
  const { t } = useTranslation();

  const showNames = useSelector(getShowNames);
  const trackEmergencyButtonUsages = useSelector(getTrackEmergencyButtonUsages);
  const isColorBlind = useSelector(getIsColorBlind);
  const initMapWithAllPlayers = useSelector(getInitMapWithAllPlayers);
  const mapPlayerScale = useSelector(getMapPlayersScale);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.PlayersSettings}>
      <Switch
        label={t("settings.usePlayerNames")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setShowNames(event.currentTarget.checked));
        }}
        checked={showNames}
      />
      <Switch
        label={t("settings.trackEmergencyButtonUsages")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setTrackEmergencyButtonUsages(event.currentTarget.checked));
        }}
        checked={trackEmergencyButtonUsages}
      />
      <Switch
        label={t("settings.colorBlindMode")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setIsColorBlind(event.currentTarget.checked));
        }}
        checked={isColorBlind}
      />
      <Switch
        label={t("settings.initMapWithAllPlayers")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setInitMapWithAllPlayers(event.currentTarget.checked));
        }}
        checked={initMapWithAllPlayers}
      />
      <Input
        label={t("settings.mapPlayerScale")}
        type="number"
        min="0"
        step="0.1"
        defaultValue={mapPlayerScale}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setMapPlayersScale(parseFloat(event.currentTarget.value)));
        }}
      />
    </div>
  );
}
