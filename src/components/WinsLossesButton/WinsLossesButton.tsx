import Button from "components/common/Button";
import React from "react";
import Score from "components/common/Score";
import useStyles from "./WinsLossesButton.styles";

export interface IWinsLossesButtonProps {
  buttonBackgroundColor: string;
  decrement: () => void;
  increment: () => void;
  score: number;
  setScore: (value: number) => void;
}

export default function WinsLossesButton(
  props: IWinsLossesButtonProps
): JSX.Element {
  const {
    buttonBackgroundColor,
    decrement,
    increment,
    score,
    setScore,
  } = props;

  const classes = useStyles({ buttonBackgroundColor });

  return (
    <div className={classes.winsLossesButtonContainer}>
      <Button
        onClick={() => decrement()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonLeft}`}
      >
        -
      </Button>
      <Score
        value={score}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setScore(parseInt(event.currentTarget.value))
        }
      />
      <Button
        onClick={() => increment()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonRight}`}
      >
        +
      </Button>
    </div>
  );
}
