import { ITheme } from "utils/types";
import { contrastColor, getColorValue, hexToRGB } from "utils/colorConverter";
import { createUseStyles } from "react-jss";
import { STYLE_VARS } from "utils/styleVars";

export default createUseStyles((theme: ITheme) => ({
  Player: (props) => ({
    flex: props.showNames ? "1 0 50%" : "0 0 2.5rem",
    maxWidth: props.showNames ? "50%" : "none",
  }),
  PlayerTile: (props) => ({
    alignItems: "center",
    backgroundColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "dark")})`
        : theme.backgroundColorAlt,
    border: "1px solid",
    borderColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : theme.borderColor,
    borderRadius: "0.25rem",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
    display: "flex",
    justifyContent: "center",
    margin: "0.375rem",
    opacity: props.longPressed ? "0.5" : 1,
    position: "relative",
    transition: "border-color 0.2s ease",
    "&:hover": {
      borderColor: `rgba(${hexToRGB(theme.textColorAlt)}, 0.25)`,
    },
  }),
  PlayerIcon: (props) => ({
    display: "flex",
    flex: "0 0 2.25rem",
    alignSelf: "stretch",
    width: "2.25rem",
    height: "2rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.75rem auto",
    backgroundPosition: "center 0.25rem",
    "&:hover": {
      cursor: props.showNames ? "pointer" : "grab",
    },
  }),
  PlayerName: {
    flexGrow: 1,
    flexBasis: "0",
    maxWidth: "100%",
    paddingLeft: "0.5rem",
  },
  PlayerInput: (props) => ({
    color: contrastColor(getColorValue(props.color, "dark")),
    display: "block",
    fontSize: props.isMobile ? "1rem" : props.showNames ? "1.15rem" : "1rem",
    fontFamily: STYLE_VARS.fontFamily,
    fontWeight: 600,
    letterSpacing: "0.05rem",
    lineHeight: 1.25,
    padding: "0.25rem 0",
    textAlign: "left",
    width: "100%",

    "&::placeholder": {
      color: theme.textColor,
      opacity: 0.5,
    },
  }),
}));
