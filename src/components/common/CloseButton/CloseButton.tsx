import React from "react";
import useStyles from "./CloseButton.styles";
import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface ICloseButtonProps {
  onClick(): void;
}

export default function CloseButton(props: ICloseButtonProps): JSX.Element {
  const classes = useStyles();
  const { onClick, ...others } = props;

  return (
    <Button onClick={onClick} className={classes.CloseButton} {...others}>
      <FontAwesomeIcon icon={faTimes} />
    </Button>
  );
}
