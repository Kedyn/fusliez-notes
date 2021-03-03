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
  } = props;

  const classes = useStyles({
    buttonsBackgroundColor,
    buttonsBackgroundHoverColor,
  });

  return (
    <div className={classes.Counter}>
      <Button
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
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setValue(parseInt(evt.currentTarget.value) || 0)
        }
        className={classes.CounterInput}
      />

      <Button
        onClick={() => increment()}
        className={cx(classes.CounterButton, classes.CounterRightButton)}
      >
        <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
  );
}
