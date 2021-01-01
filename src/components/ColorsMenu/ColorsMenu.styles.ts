import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ColorMenu: {
    background: theme.backgroundColorPrimary,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem black",
    bottom: "110%",
    display: "flex",
    flexWrap: "wrap",
    padding: "0.75rem",
    left: 0,
    position: "absolute",
    width: "100%",
    zIndex: 10,
  },
  isHidden: {
    display: "none",
  },
}));
