import { ITheme } from "utils/types";
import { STYLE_VARS } from "utils/styleVars";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  ColorMenu: {
    alignItems: "center",
    background: theme.backgroundColor,
    border: `1px solid ${STYLE_VARS.borderColor}`,
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem black",
    bottom: "110%",
    display: "flex",
    flexWrap: "wrap",
    left: 0,
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    zIndex: 10,
  },
  isHidden: {
    display: "none",
  },
}));
