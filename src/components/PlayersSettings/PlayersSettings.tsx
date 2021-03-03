import {
  getIsColorBlind,
  getShowNames,
  setIsColorBlind,
  setShowNames,
} from "store/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import Switch from "components/common/Switch";
import useStyles from "./PlayersSettings.styles";
import { useTranslation } from "react-i18next";

export default function PlayersSettings(): JSX.Element {
  const { t } = useTranslation();

  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);

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
        label={t("settings.colorBlindMode")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setIsColorBlind(event.currentTarget.checked));
        }}
        checked={isColorBlind}
      />
    </div>
  );
}
