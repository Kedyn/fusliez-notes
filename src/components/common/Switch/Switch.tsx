import React from "react";
import useStyles from "./Switch.styles";

export interface ISwitchProps {
  label: string;
  [unknown: string]: any; // eslint-disable-line
}

export default function Switch(props: ISwitchProps): JSX.Element {
  const classes = useStyles();

  const { label, ...other } = props;

  return (
    <div>
      <label className={classes.Switch}>
        <input className={classes.SwitchControl} type="checkbox" {...other} />
        <span className={classes.SwitchLabel}>{label}</span>
      </label>
    </div>
  );
}

//the previous was created by using the https://danklammer.com/articles/simple-css-toggle-switch/ styles
