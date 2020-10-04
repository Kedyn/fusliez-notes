import Modal from "components/common/Modal";
import React from "react";
import useStyles from "./Feedback.styles";

export interface IFeedbackProps {
  show: boolean;
  onClose: () => void;
}

export default function Feedback(props: IFeedbackProps): JSX.Element {
  const classes = useStyles();
  const { show, onClose } = props;

  return (
    <Modal title="Feedback" show={show} onClose={onClose}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform?embedded=true"
        className={classes.form}
        frameBorder="0"
      >
        Loading…
      </iframe>
    </Modal>
  );
}
