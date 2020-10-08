import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";
import { STYLE_VARS } from "utils/styleVars";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  Button: {
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontFamily: STYLE_VARS.fontFamily,
    fontWeight: 600,
    borderRadius: "0.5rem",
    color: theme.linkColor,
    transition: "all 0.2s ease",
    backgroundColor: "transparent",
    boxShadow:
      "0.125rem 0.125rem 0.25rem 0 rgba(0,0,0,0.25), -0.125rem -0.125rem 0.25rem 0 rgba(255,255,255,0.25)",
    "&:hover": {
      color: theme.linkColorHover,
      backgroundColor: theme.backgroundColorAlt,
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      boxShadow:
        "inset 0.125rem 0.125rem 0.25rem 0 rgba(0,0,0,0.25), inset -0.125rem -0.125rem 0.25rem 0 rgba(255,255,255,0.25)",
    },
  },
  danger: {
    backgroundColor: `rgba(${hexToRGB(theme.dangerColor)}, 0.5)`,
    color: theme.textColor,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(theme.dangerColorHover)}, 0.5)`,
      color: theme.textColorAlt,
    },
  },
  fullWidth: {},
  pressed: {
    cursor: "default",
    boxShadow:
      "inset 0.125rem 0.125rem 0.25rem 0 rgba(0,0,0,0.25), inset -0.125rem -0.125rem 0.25rem 0 rgba(255,255,255,0.25)",
    color: theme.linkColor,
    backgroundColor: "transparent",
  },
}));
