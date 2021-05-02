import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ElectronTitlebar: {
    backgroundColor: theme.backgroundColorSecondary,
    "-webkit-app-region": "drag",
    display: "flex",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  ElectronTitlebarFavIcon: {
    maxHeight: "1.5rem",
    margin: "0.25rem 0.5rem",
  },
  ElectronTitlebarTitle: {
    overflow: "hidden",
    maxHeight: "1.5rem",
    flexGrow: 1,
    margin: "0.25rem 0.5rem",
    textAlign: "center",
  },
  ElectronTitlebarCloseButton: {
    "-webkit-app-region": "no-drag",
    borderRadius: 0,
    backgroundColor: theme.backgroundColorSecondary,

    "&:hover:enabled": {
      backgroundColor: theme.dangerColor,
    },
  },
}));
