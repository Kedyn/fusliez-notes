import Button from "../common/Button";
import Modal from "../common/Modal";
import React from "react";
import Switch from "../common/Switch";
import i18next from "i18next";
import { useData } from "context";
import useStyles from "./Settings.styles";
import { useTranslation } from "react-i18next";

export interface ISettingsProps {
  show: boolean;
  onClose: () => void;
}

export default function Settings(props: ISettingsProps): JSX.Element {
  const [language, setLanguage] = React.useState("en-US");
  const { t } = useTranslation();
  const classes = useStyles();
  const { show, onClose } = props;
  const { names, setNames } = useData()!; // eslint-disable-line

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={t("settings.title")}
      footer={<Button onClick={() => onClose()}>Close</Button>}
    >
      <div className={classes.container}>
        <Switch
          label={t("settings.usePlayerNames")}
          onChange={() => {
            setNames(!names);
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
          <option value="es-MX">Español (MX)</option>
        </select>
      </div>
    </Modal>
  );
}
