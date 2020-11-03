import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  RadioButton: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.5rem",
    "& input:checked ~ $RadioControl $RadioControlBackdrop, & input:focus ~ $RadioControl $RadioControlBackdrop, & input:active ~ $RadioControl $RadioControlBackdrop": {
      backgroundColor: theme.activeColor,
    },
    "& input:focus ~ $RadioControl $RadioControlBackdrop, & input:active ~ $RadioControl $RadioControlBackdrop": {
      boxShadow: `0 0 1px 1px ${theme.activeColor}`,
    },
    "& input:checked ~ $RadioControl $RadioControlIcon": {
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: theme.textColorPrimary,
    },
  },
  RadioControl: {
    position: "relative",
    display: "inline-block",
    width: "1em",
    height: "1em",
    marginRight: "1rem",
  },
  RadioControlBackdrop: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "50%",
    transition: "background-color 0.2s ease",
    backgroundColor: theme.borderColor,
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
  RadioLabel: {
    display: "inline-block",
    padding: "0.5rem 0",
  },
}));
