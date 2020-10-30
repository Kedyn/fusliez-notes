import React from "react";
import useStyles from "./RadioButton.styles";

interface IRadioButtonProps {
  label?: React.ReactNode;
  checked?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton(props: IRadioButtonProps): JSX.Element {
  const classes = useStyles();
  const {
    label,
    checked,
    id,
    name: nameProp,
    value,
    onChange,
    ...others
  } = props;
  const name = nameProp || id;

  return (
    <label className={classes.RadioButton} htmlFor={id} {...others}>
      <input
        className="sr-only"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={classes.RadioControl}>
        <span className={classes.RadioControlBackdrop}></span>
        <span className={classes.RadioControlIcon}></span>
      </span>
      <span className={classes.RadioLabel}>{label}</span>
    </label>
  );
}
