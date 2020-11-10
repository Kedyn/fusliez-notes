import ChangelogPanel from "./ChangelogPanel";
import Modal from "components/common/Modal";
import React from "react";
import { VERSION } from "constants/main";

export interface IChangelogProps {
  show: boolean;
  onClose: () => void;
}

export default function Changelog(props: IChangelogProps): JSX.Element {
  return (
    <Modal title={`fusliez notes v${VERSION} notes`} {...props}>
      <ChangelogPanel />
    </Modal>
  );
}
