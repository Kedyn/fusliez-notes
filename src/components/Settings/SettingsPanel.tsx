import React from "react";
import Switch from "components/common/Switch";
import i18next from "i18next";
import { useMobile } from "context/MobileContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./SettingsPanel.styles";
import { useTranslation } from "react-i18next";
import RadioButton from "components/common/RadioButton";
import { ILanguage } from "utils/types";

export default function SettingsPanel(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile } = useMobile()!; // eslint-disable-line
  const { showNames, setShowNames } = useSettings()!; // eslint-disable-line

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
    console.log(language);
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
  ];

  return (
    <div className={classes.SettingsPanel}>
      {isMobile && (
        <h2 className={classes.SettingsPanelTitle}>{t("settings.title")}</h2>
      )}
      <div className={classes.SettingsContent}>
        <div className={classes.SettingsPane}>
          <Switch
            label={t("settings.usePlayerNames")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setShowNames(event.currentTarget.checked);
            }}
            checked={showNames}
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
