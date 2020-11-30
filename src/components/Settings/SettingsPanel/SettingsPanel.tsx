import {
  getIsColorBlind,
  getShowNames,
  setIsColorBlind,
  setShowNames,
} from "store/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";

import { ILanguage } from "utils/types";
import RadioButton from "components/common/RadioButton";
import React from "react";
import SettingsPlayersSections from "./SettingsPlayersSections";
import Switch from "components/common/Switch";
import { getIsMobile } from "store/slices/DeviceSlice";
import i18next from "i18next";
import useStyles from "./SettingsPanel.styles";
import { useTranslation } from "react-i18next";

export default function SettingsPanel(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [language, setLanguage] = React.useState<string>("en-US");

  const classes = useStyles({ isMobile });

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const handleSwitchLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.currentTarget.value;

    i18next.changeLanguage(newLanguage);

    setLanguage(newLanguage);
  };

  const languages: Array<ILanguage> = [
    {
      id: "en-US",
      label: "English (US)",
    },
    {
      id: "es-MX",
      label: "Spanish (MX)",
    },
    {
      id: "pt-BR",
      label: "Portuguese (BR)",
    },
    {
      id: "ru-RU",
      label: "Russian (RU)",
    },
    {
      id: "de-DE",
      label: "German (DE)",
    },
    {
      id: "fa-IR",
      label: "Persian (IR)",
    },
    {
      id: "pl-PL",
      label: "Polish (PL)",
    },
    {
      id: "fr-FR",
      label: "French (FR)",
    },
    {
      id: "cs-CZ",
      label: "Czech (CZ)",
    },
    {
      id: "he-IL",
      label: "Hebrew (IL)",
    },
    {
      id: "mg-MG",
      label: "Malagasy (MG)",
    },
  ];

  return (
    <div className={classes.SettingsPanel}>
      {isMobile && (
        <h2 className={classes.SettingsPanelTitle}>{t("settings.title")}</h2>
      )}
      <div className={classes.SettingsContent}>
        <div className={classes.SettingsPane}>
          <h4>{t("settings.playerTiles")}</h4>
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

          <div className={classes.SettingsContentDivider} />

          <SettingsPlayersSections />
        </div>

        <div className={classes.SettingsPane}>
          <h4>{t("settings.language")}</h4>
          {languages.map((option, index) => (
            <RadioButton
              key={index}
              label={option.label}
              name="appLanguage"
              id={option.id}
              value={option.id}
              onChange={handleSwitchLanguage}
              checked={language === option.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
