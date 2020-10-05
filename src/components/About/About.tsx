import AboutContent from "./AboutContent";
import Modal from "components/common/Modal";
import React from "react";

export interface IAboutProps {
  show: boolean;
  onClose: () => void;
}

export default function About(props: IAboutProps): JSX.Element {
  return (
    <Modal title="About" {...props}>
      <AboutContent />
    </Modal>
  );
}
