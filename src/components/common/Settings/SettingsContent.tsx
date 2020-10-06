import React from "react";
import Switch from "../Switch";
import i18next from "i18next";
import { useMobile } from "context/MobileContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./SettingsContent.styles";
import { useTranslation } from "react-i18next";

export default function SettingsContent(): JSX.Element {
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

  return (
    <div className={classes.root}>
      <div className={classes.uiContainer}>
        <h4>{t("settings.uiSettings")}</h4>
        <div className={classes.content}>
          <Switch
            label={t("settings.usePlayerNames")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setShowNames(event.currentTarget.checked);
            }}
            checked={showNames}
          />
          <hr />
          {t("settings.language")}:{" "}
          <select
            value={language}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const newLanguage = event.currentTarget.value;

              i18next.changeLanguage(newLanguage);

              setLanguage(newLanguage);
            }}
          >
            <option value="en-US">English (US)</option>
            <option value="es-MX">Spanish (MX)</option>
            <option value="ru-RU">Russian (RU)</option>
            <option value="pt-BR">Portuguese (BR)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
