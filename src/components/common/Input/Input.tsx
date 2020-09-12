import React from "react";
import useStyles from "./Input.styles";

export interface IInputProps {
  placeholder: string;
  classNames?: string;
  [unknown: string]: any;
}

export default function Input(props: IInputProps): JSX.Element {
  const classes = useStyles();

  const { placeholder, classNames, ...other } = props;

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={placeholder}
        className={`${classNames ? classNames : ""} ${classes.root}`}
        {...other}
      />
    </React.Fragment>
  );
}
