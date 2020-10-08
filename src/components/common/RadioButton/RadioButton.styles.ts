import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";
import { STYLE_VARS } from "utils/styleVars";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  RadioButton: {
    display: "block",
    "& input:checked ~ $RadioControl $RadioControlIcon": {
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: theme.textColor,
    },
  },
  RadioControl: {
    position: "relative",
    display: "inline-block",
    width: "1em",
    height: "1em",
  },
  RadioControlBackdrop: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "50%",
    backgroundColor: theme.backgroundColorAlt,
  },
  RadioControlIcon: {
    position: "absolute",
    display: "block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    transformOrigin: "50% 50%",
    height: "0.5em",
    width: "0.5em",
    borderRadius: "50%",
    transition: "transform 0.2s ease",
  },
}));
