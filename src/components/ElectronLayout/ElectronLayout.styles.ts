import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  "@global": {
    "@font-face": {
      fontFamily: "Inter",
      src:
        "url(assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations')",
      fontWeight: "1 999",
    },
    "::-webkit-scrollbar": {
      width: 8,
      height: 8,
    },
    "::-webkit-scrollbar-track": {
      background: theme.backgroundColorPrimary,
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.15)`,
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.25)`,
    },
    body: {
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
  ElectronLayout: {
    backgroundColor: theme.backgroundColorPrimary,
    color: theme.textColorPrimary,
    top: 200,
    minWidth: 400,
    maxWidth: 400,
    maxHeight: 600,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    opacity: 0.95,
    overflow: "hidden",
  },
  ElectronLayoutContent: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    paddingBottom: "1rem",
  },
  ElectronLayoutScoresContent: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "1rem",
    padding: 0,
    width: "auto",
  },
}));
