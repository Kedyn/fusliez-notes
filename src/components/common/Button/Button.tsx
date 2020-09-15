import React from "react";
import useStyles from "./Button.styles";

export interface IButtonProps {
  children: React.ReactNode;
  classNames?: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Button(props: IButtonProps): JSX.Element {
  const classes = useStyles();
  const { classNames, ...other } = props;

  return (
    <React.Fragment>
      <button
        className={`${classNames ? classNames : ""} ${classes.root}`}
        {...other}
      ></button>
    </React.Fragment>
  );
}
