import React from "react";
import useStyles from "./Input.styles";

export interface IInputProps {
  placeholder: string;
  className?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Input(props: IInputProps): JSX.Element {
  const classes = useStyles();

  const { placeholder, className, ...other } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className ? className : ""} ${classes.root}`}
      {...other}
    />
  );
}
