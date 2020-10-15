import { ILanguage } from "utils/types";
import RadioButton from "components/common/RadioButton";
import React from "react";
import Switch from "components/common/Switch";
import i18next from "i18next";
import { useMobile } from "context/MobileContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./SettingsPanel.styles";
import { useTranslation } from "react-i18next";

export default function SettingsPanel(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile } = useMobile()!; // eslint-disable-line
  const {
    showNames,
    setShowNames,
    isColorBlind,
    setIsColorBlind,
  } = useSettings()!; // eslint-disable-line

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
  ];

  return (
    <div className={classes.SettingsPanel}>
      {isMobile && (
        <h2 className={classes.SettingsPanelTitle}>{t("settings.title")}</h2>
      )}
      <div className={classes.SettingsContent}>
        <h4>{t("settings.playerTiles")}</h4>
        <div className={classes.SettingsPane}>
          <Switch
            label={t("settings.usePlayerNames")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setShowNames(event.currentTarget.checked);
            }}
            checked={showNames}
          />
          <Switch
            label={t("settings.colorBlindMode")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setIsColorBlind(event.currentTarget.checked);
            }}
            checked={isColorBlind}
          />
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
