import Button from "../Button";
import Modal from "../Modal";
import React from "react";
import SettingsContent from "./SettingsContent";
import { useTranslation } from "react-i18next";

export interface ISettingsProps {
  show: boolean;
  onClose: () => void;
}

export default function Settings(props: ISettingsProps): JSX.Element {
  const { show, onClose } = props;
  const { t } = useTranslation();

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={t("settings.title")}
      footer={<Button onClick={() => onClose()}>{t("settings.close")}</Button>}
    >
      <SettingsContent />
    </Modal>
  );
}
