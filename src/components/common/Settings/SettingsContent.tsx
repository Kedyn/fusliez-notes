import React from "react";
import Switch from "../Switch";
import i18next from "i18next";
import { useData } from "context";
import useStyles from "./SettingsContent.styles";
import { useTranslation } from "react-i18next";

export default function SettingsContent(): JSX.Element {
  const [language, setLanguage] = React.useState("en-US");
  const { t } = useTranslation();
  const classes = useStyles();
  const { names, setNames } = useData()!; // eslint-disable-line

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <div className={classes.container}>
      <Switch
        label={t("settings.usePlayerNames")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNames(event.currentTarget.checked);
        }}
        checked={names}
      />
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
      </select>
    </div>
  );
}
