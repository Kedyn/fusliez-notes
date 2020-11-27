import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  Button: {
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    border: 0,
    padding: ".5rem .75rem",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    borderRadius: "0.5rem",
    color: theme.linkColor,
    transition: "all 0.2s ease",
    backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.15)`,
    boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
    "&:hover:enabled": {
      color: theme.linkColorHover,
      backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.25)`,
    },
    "&:focus:not(:active)": {
      outline: "none",
      boxShadow: `0 0 0.25rem ${theme.linkColor}`,
    },
    "&:active:enabled": {
      boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.5)",
      backgroundColor: theme.backgroundColorSecondary,
    },
  },
  danger: {
    backgroundColor: `rgba(${hexToRGB(theme.dangerColor)}, 0.5)`,
    color: theme.textColorPrimary,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(theme.dangerColorHover)}, 0.5)`,
      color: theme.textColorSecondary,
    },
  },
  fullWidth: {
    width: "100%",
  },
  pressed: {
    cursor: "default",
    backgroundColor: theme.backgroundColorPrimary,
    boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.5)",
    "&:hover": {
      color: theme.linkColor,
      backgroundColor: theme.backgroundColorSecondary,
    },
  },

  CloseButton: {
    width: "2rem",
    lineHeight: "2rem",
    height: "2rem",
    padding: 0,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
