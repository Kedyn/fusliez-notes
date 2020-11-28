import AboutPanel from "./AboutPanel";
import Modal from "components/common/Modal";
import React from "react";
import { useTranslation } from "react-i18next";

export interface IAboutProps {
  show: boolean;
  onClose: () => void;
}

export default function About(props: IAboutProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Modal title={t("menu.about")} {...props}>
      <AboutPanel />
    </Modal>
  );
}
