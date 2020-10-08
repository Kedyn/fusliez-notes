import React from "react";
import Switch from "../Switch";
import i18next from "i18next";
import { useMobile } from "context/MobileContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./SettingsPanel.styles";
import { useTranslation } from "react-i18next";
import RadioButton from "components/common/RadioButton";

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
  };

  return (
    <div className={classes.SettingsPanel}>
      <h4>{t("settings.uiSettings")}</h4>
      <div className={classes.SettingsContent}>
        <Switch
          label={t("settings.usePlayerNames")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setShowNames(event.currentTarget.checked);
          }}
          checked={showNames}
        />
        <hr />
        {t("settings.language")}:{" "}
        <RadioButton
          label="English (US)"
          name="appLanguage"
          id="en-US"
          value="en-US"
          onChange={handleSwitchLanguage}
          checked={language === "en-US"}
        ></RadioButton>
        <RadioButton
          label="Spanish (MX)"
          name="appLanguage"
          id="es-MX"
          value="en-US"
          onChange={handleSwitchLanguage}
          checked={language === "es-MX"}
        ></RadioButton>
        <RadioButton
          label="Russian (RU)"
          name="appLanguage"
          id="es-MX"
          value="en-US"
          onChange={handleSwitchLanguage}
          checked={language === "es-MX"}
        ></RadioButton>
      </div>
    </div>
  );
}
