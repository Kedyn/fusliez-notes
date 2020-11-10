import { getColorValue, hexToRGB } from "utils/colorConverter";

import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ColorMenuCell: {
    display: "flex",
    flex: "0 0 25%",
    maxWidth: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  ColorMenuSwatch: (props) => ({
    display: "block",
    width: "100%",
    height: "2rem",
    borderRadius: "0.25rem",
    padding: 0,
    margin: "0.125rem",
    border: `1px solid rgba(${hexToRGB(theme.textColorSecondary)}, 0.5)`,
    backgroundColor: `rgb(${getColorValue(props.targetColor, "base")})`,

    "&:hover": {
      borderRadius: "50%",
      cursor: "pointer",
      backgroundColor: `rgb(${getColorValue(props.targetColor, "base")})`,
    },
  }),
}));
