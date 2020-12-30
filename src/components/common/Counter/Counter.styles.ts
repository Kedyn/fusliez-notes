import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

interface ICounterStylesProps {
  buttonsBackgroundColor: string;
  buttonsBackgroundHoverColor: string;
}

export default createUseStyles((theme: ITheme) => ({
  Counter: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    margin: "0.25rem 0",
  },
  CounterButton: (props: ICounterStylesProps) => ({
    margin: 0,
    fontSize: "0.75rem",
    backgroundColor: `rgba(${hexToRGB(props.buttonsBackgroundColor)}, 0.5)`,
    color: theme.textColorPrimary,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        props.buttonsBackgroundHoverColor
      )}, 0.5)`,
      color: theme.textColorSecondary,
    },
  }),
  CounterLeftButton: {
    borderRadius: "6px 0 0 6px",
  },
  CounterRightButton: {
    borderRadius: "0 6px 6px 0",
  },
  CounterInput: {
    backgroundColor: theme.backgroundColorSecondary,
    color: theme.textColorPrimary,
    borderTop: `1px solid ${theme.borderColor}`,
    borderBottom: `1px solid ${theme.borderColor}`,
    display: "block",
    fontSize: "1.25rem",
    fontWeight: 600,
    height: "100%",
    padding: "0 0.5rem",
    textAlign: "center",
    appearance: "textfield",
    width: "2rem",
  },
}));
