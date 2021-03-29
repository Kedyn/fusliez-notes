import { CloseButton } from "components/common/Button";
import React from "react";
import cx from "classnames";
import useStyles from "./Modal.styles";

export interface IModalProps {
  show: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;

  onClose(): void;
}

export default function Modal(props: IModalProps): JSX.Element {
  const { show, title, footer, children, className, onClose } = props;

  if (show) {
    const classes = useStyles();

    return (
      <div
        data-testid={`${title}-modal`}
        className={classes.ModalBackdrop}
        onClick={() => onClose()}
      >
        <div
          className={cx(classes.Modal, className)}
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            event.stopPropagation()
          }
        >
          <div className={classes.ModalContent}>
            <div className={classes.ModalHeader}>
              <h2 className={classes.ModalTitle}>{title}</h2>
              <CloseButton onClick={() => onClose()} />
            </div>
            <div className={classes.ModalBody}>{children}</div>
            {footer !== undefined && (
              <div className={classes.ModalFooter}>{footer}</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <React.Fragment></React.Fragment>;
}
