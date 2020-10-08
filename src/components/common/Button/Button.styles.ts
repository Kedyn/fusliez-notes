import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";
import { STYLE_VARS } from "utils/styleVars";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  Button: {
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    border: 0,
    padding: ".375rem .75rem",
    fontFamily: STYLE_VARS.fontFamily,
    fontWeight: 600,
    borderRadius: "0.5rem",
    color: theme.linkColor,
    transition: "all 0.2s ease",
    backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.15)`,
    boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
    "&:hover": {
      color: theme.linkColorHover,
      backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.25)`,
    },
    "&:focus:not(:active)": {
      outline: "none",
      boxShadow: `0 0 0.25rem ${theme.linkColor}`,
    },
    "&:active": {
      boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.5)",
      backgroundColor: theme.backgroundColorAlt,
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
    backgroundColor: theme.backgroundColorAlt,
    boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.5)",
    "&:hover": {
      color: theme.linkColor,
      backgroundColor: theme.backgroundColorAlt,
    },
  },
}));
