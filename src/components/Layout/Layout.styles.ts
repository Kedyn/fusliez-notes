import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  "@global": {
    body: {
      backgroundColor: theme.backgroundColorPrimary,
      color: theme.textColorPrimary,
      fontFamily: theme.fontFamily,
      fontSize: theme.baseFontSize,
    },
    input: {
      color: theme.textColorPrimary,
      fontFamily: theme.fontFamily,
    },
    textarea: {
      backgroundColor: theme.backgroundColorSecondary,
      color: theme.textColorPrimary,
      border: `1px solid ${theme.borderColor}`,
    },
    a: {
      color: theme.linkColor,
    },
    select: {
      display: "inline-block",
      width: "100%",
      cursor: "pointer",
      padding: ".5rem 1rem",
      outline: 0,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 0,
      background: theme.backgroundColorSecondary,
      color: theme.textColorPrimary,
      appearance: "none",
    },
  },
  LayoutDisclaimer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "0.5rem",
    textAlign: "center",
    backgroundColor: theme.backgroundColorSecondary,
    zIndex: 20,
    width: "100%",
  },
}));
