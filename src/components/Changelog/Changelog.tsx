import Modal from "components/common/Modal";
import React from "react";
import { VERSION } from "utils/constants";
import ChangelogPanel from "./ChangelogPanel";

export interface IChangelogProps {
  show: boolean;
  onClose: () => void;
}

export default function VersionNotes(props: IChangelogProps): JSX.Element {
  return (
    <Modal title={`fusliez notes v${VERSION} notes`} {...props}>
      <ChangelogPanel />
    </Modal>
  );
}
