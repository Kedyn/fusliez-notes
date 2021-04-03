import React from "react";
import useStyles from "./Switch.styles";

export interface ISwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Switch(props: ISwitchProps): JSX.Element {
  const classes = useStyles();

  const { label, ...other } = props;

  return (
    <div className={classes.Switch}>
      <label className={classes.SwitchLabel}>{label}</label>
      <input className={classes.SwitchButton} type="checkbox" {...other} />
    </div>
  );
}
