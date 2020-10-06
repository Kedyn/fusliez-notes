import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { getColorValue, hexToRGB } from "utils/colorConverter";
import { STYLE_VARS } from "utils/styleVars";

export const useColorSwatchStyles = createUseStyles({
  ColorMenuCell: {
    display: "flex",
    flex: "0 0 25%",
    maxWidth: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  ColorMenuSwatch: (props) => ({
    display: "block",
    height: "2rem",
    borderRadius: "0.25rem",
    padding: 0,
    margin: "0.125rem",
    border: `1px solid rgba(${hexToRGB(STYLE_VARS.textColorSecondary)}, 0.5)`,
    backgroundColor: `rgb(${getColorValue(props.targetColor, "base")})`,

    "&:hover": {
      borderRadius: "50%",
      cursor: "pointer",
      backgroundColor: `rgb(${getColorValue(props.targetColor, "base")})`,
    },
  }),
});

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
