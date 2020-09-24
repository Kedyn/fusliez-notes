import React from "react";
import useStyles from "./Modal.styles";

export interface IModalProps {
  show: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;

  onClose(): void;
}

export default function Modal(props: IModalProps): JSX.Element {
  const { show, title, footer, children, onClose } = props;

  if (show) {
    const classes = useStyles();

    return (
      <div className={classes.root} onClick={() => onClose()}>
        <div
          className={classes.content}
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            event.stopPropagation()
          }
        >
          <div className={classes.header}>
            <div className={classes.title}>{title}</div>
            <div className={classes.close} onClick={() => onClose()}>
              x
            </div>
          </div>
          <div className={classes.body}>{children}</div>
          {footer !== undefined && (
            <div className={classes.footer}>{footer}</div>
          )}
        </div>
      </div>
    );
  }

  return <React.Fragment></React.Fragment>;
}
