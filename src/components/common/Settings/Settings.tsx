import Button from "../Button";
import Modal from "../Modal";
import React from "react";
import SettingsContent from "./SettingsContent";
import useStyles from "./Settings.styles";

export interface ISettingsProps {
  show: boolean;
  onClose: () => void;
}

export default function Settings(props: ISettingsProps): JSX.Element {
  const { show, onClose } = props;

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Settings"
      footer={<Button onClick={() => onClose()}>Close</Button>}
    >
      <SettingsContent />
    </Modal>
  );
}
