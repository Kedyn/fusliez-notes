import React from "react";
import useStyles from "./Button.styles";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  danger?: boolean;
  fullWidth?: boolean;
  pressed?: boolean;
  onClick?(): void;
}

export default function Button(props: IButtonProps): JSX.Element {
  const classes = useStyles();
  const {
    className,
    children,
    fullWidth,
    danger,
    pressed,
    onClick,
    ...others
  } = props;

  return (
    <button
      onClick={onClick}
      className={cx(
        {
          [classes.Button]: true,
          [classes.danger]: danger,
          [classes.pressed]: pressed,
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
}

export interface ICloseButtonProps {
  onClick(): void;
}

export function CloseButton(props: ICloseButtonProps): JSX.Element {
  const classes = useStyles();
  const { onClick, ...others } = props;

  return (
    <Button onClick={onClick} className={classes.CloseButton} {...others}>
      <FontAwesomeIcon icon={faTimes} />
    </Button>
  );
}
