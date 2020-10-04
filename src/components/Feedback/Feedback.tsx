import FeedbackContent from "./FeedbackContent";
import Modal from "components/common/Modal";
import React from "react";

export interface IFeedbackProps {
  show: boolean;
  onClose: () => void;
}

export default function Feedback(props: IFeedbackProps): JSX.Element {
  const { show, onClose } = props;

  return (
    <Modal title="Feedback" show={show} onClose={onClose}>
      <FeedbackContent />
    </Modal>
  );
}
