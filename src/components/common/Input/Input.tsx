import React from "react";
import useStyles from "./Input.styles";

export interface IInputProps {
  placeholder: string;
  classNames?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Input(props: IInputProps): JSX.Element {
  const classes = useStyles();

  const { placeholder, classNames, ...other } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${classNames ? classNames : ""} ${classes.root}`}
      {...other}
    />
  );
}
