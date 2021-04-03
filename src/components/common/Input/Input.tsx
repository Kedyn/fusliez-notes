import React from "react";
import useStyles from "./Input.styles";

export interface ITextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput(props: ITextInputProps): JSX.Element {
  const classes = useStyles();

  const { label, ...other } = props;

  return (
    <div className={classes.Input}>
      <label className={classes.InputLabel}>{label}</label>
      <input className={classes.InputBox} {...other} />
    </div>
  );
}
