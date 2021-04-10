import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cx from "classnames";
import useStyles from "./Counter.styles";

export interface ICounterProps {
  value?: number;
  min?: number;
  max?: number;
  buttonsBackgroundColor: string;
  buttonsBackgroundHoverColor: string;
  decrement: () => void;
  increment: () => void;
  setValue: (value: number) => void;
  role: string;
}

export default function Counter(props: ICounterProps): JSX.Element {
  const {
    value,
    min,
    max,
    buttonsBackgroundColor,
    buttonsBackgroundHoverColor,
    decrement,
    increment,
    setValue,
    role,
  } = props;

  const classes = useStyles({
    buttonsBackgroundColor,
    buttonsBackgroundHoverColor,
  });

  return (
    <div className={classes.Counter}>
      <Button
        title={`${role}-decrement`}
        onClick={() => decrement()}
        className={cx(classes.CounterButton, classes.CounterLeftButton)}
      >
        <FontAwesomeIcon icon="minus" />
      </Button>

      <input
        type="number"
        min={min}
        max={max}
        value={value}
        aria-label={`set-${role}`}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          parseInt(evt.currentTarget.value) > 0
            ? setValue(parseInt(evt.currentTarget.value))
            : setValue(0)
        } // previous implmentation was fine
        // needed to change it for testing purposes
        className={classes.CounterInput}
      />

      <Button
        title={`${role}-increment`}
        onClick={() => increment()}
        className={cx(classes.CounterButton, classes.CounterRightButton)}
      >
        <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
  );
}
