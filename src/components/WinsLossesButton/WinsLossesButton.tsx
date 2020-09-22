import React from "react";
import useStyles from "./WinsLossesButton.styles";
import Button from "components/common/Button";

export default function WinsLossesButton({
  buttonBackgroundColor,
  decrement,
  increment,
}: {
  buttonBackgroundColor: string;
  decrement: () => void;
  increment: () => void;
}): JSX.Element {
  const classes = useStyles({ buttonBackgroundColor });
  return (
    <div className={classes.winsLossesButtonContainer}>
      <Button
        onClick={() => decrement()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonLeft}`}
      >
        -
      </Button>
      <div className={classes.placeholder} />
      <Button
        onClick={() => increment()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonRight}`}
      >
        +
      </Button>
    </div>
  );
}
