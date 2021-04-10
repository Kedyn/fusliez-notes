import { AVAILABLE_LANGUAGES } from "constants/settings";
import React from "react";
import i18next from "i18next";
import useStyles from "./InterfaceSettings.styles";
import { useTranslation } from "react-i18next";

export default function InterfaceSettings(): JSX.Element {
  const classes = useStyles();

  const { t } = useTranslation();

  const [language, setLanguage] = React.useState<string>("en-US");

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const handleSwitchLanguage = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = evt.currentTarget.value;

    i18next.changeLanguage(newLanguage);

    setLanguage(newLanguage);
  };

  return (
    <div className={classes.InterfaceSettings}>
      <h4>{t("settings.language")}</h4>

      <select
        value={language}
        onChange={handleSwitchLanguage}
        data-testid="language-options"
      >
        {AVAILABLE_LANGUAGES.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
