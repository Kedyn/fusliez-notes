import React from "react";
import useStyles from "./ColorSwatch.styles";

export interface IColorSwatchProps {
  targetColor: string;
  swapPlayersColors: () => void;
}

export default function ColorSwatch(props: IColorSwatchProps): JSX.Element {
  const { targetColor, swapPlayersColors } = props;

  const classes = useStyles({ targetColor });

  return (
    <div className={classes.ColorMenuCell}>
      <button
        className={classes.ColorMenuSwatch}
        onClick={() => swapPlayersColors()}
        title={targetColor}
      >
        <span className="sr-only">{targetColor}</span>
      </button>
    </div>
  );
}
