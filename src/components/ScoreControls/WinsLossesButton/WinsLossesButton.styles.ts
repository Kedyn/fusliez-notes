import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  WinsLossesButtonContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    margin: "0.25rem 0",
  },
  winsLossesButton: (props) => ({
    margin: 0,
    fontSize: "0.75rem",
    padding: "0.375rem .5rem",
    backgroundColor: `rgba(${hexToRGB(props.buttonBackgroundColor)}, 0.5)`,
    color: theme.textColorPrimary,
    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        props.buttonBackgroundColorHover
      )}, 0.5)`,
      color: theme.textColorSecondary,
    },
  }),
  winsLossesButtonLeft: {
    borderRadius: "6px 0 0 6px",
  },
  winsLossesButtonRight: {
    borderRadius: "0 6px 6px 0",
  },
}));
