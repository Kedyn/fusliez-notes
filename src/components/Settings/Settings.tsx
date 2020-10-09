import Modal from "components/common/Modal";
import React from "react";
import SettingsPanel from "./SettingsPanel";
import { useTranslation } from "react-i18next";

export interface ISettingsProps {
  show: boolean;
  onClose: () => void;
}

export default function Settings(props: ISettingsProps): JSX.Element {
  const { show, onClose } = props;
  const { t } = useTranslation();

  return (
    <Modal show={show} onClose={onClose} title={t("settings.title")}>
      <SettingsPanel />
    </Modal>
  );
}
