import { ITheme } from "utils/types";
import { contrastColor, getColorValue } from "utils/colorConverter";
import { createUseStyles } from "react-jss";
import { STYLE_VARS } from "utils/styleVars";

export default createUseStyles((theme: ITheme) => ({
  Player: (props) => ({
    flex: `0 0 ${props.showNames ? "50%" : "25%"}`,
    maxWidth: "50%",
  }),
  PlayerTile: (props) => ({
    alignItems: "center",
    backgroundColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "dark")})`
        : "transparent",
    border: "1px solid",
    borderColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : STYLE_VARS.borderColor,
    boxShadow:
      props.playerName || !props.showNames
        ? `0 0 0.25rem 0 rgb(${getColorValue(props.color, "base")}, 0.75)`
        : "none",
    borderRadius: "0.25rem",
    display: "flex",
    justifyContent: "center",
    margin: "0.375rem",
    opacity: props.longPressed ? "0.5" : 1,
    position: "relative",
    "&:hover img": {
      marginTop: "-0.125rem",
      marginBottom: "0.125rem",
      transitionTimingFunction: "ease-out",
    },
  }),
  PlayerIcon: (props) => ({
    display: "flex",
    flex: "0 0 2.25rem",
    justifyContent: "center",
    padding: "0.25rem 0",
    alignItems: "center",
    backgroundColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : "transparent",
    "&:hover": {
      cursor: props.showNames ? "pointer" : "grab",
    },
    "& img": {
      display: "block",
      width: "1.5rem",
      height: "2rem",
      margin: 0,
      transition: "margin 300ms ease-in",
    },
  }),
  PlayerName: {
    flexGrow: 1,
    flexBasis: "0",
    maxWidth: "100%",
    paddingLeft: "0.5rem",
  },
  input: (props) => ({
    color: contrastColor(getColorValue(props.color, "dark")),
    display: "block",
    fontSize: props.isMobile ? "1rem" : props.showNames ? "1.15rem" : "1rem",
    fontFamily: STYLE_VARS.fontFamily,
    fontWeight: 500,
    letterSpacing: "0.05rem",
    lineHeight: 1.5,
    padding: "0.25rem 0",
    textAlign: "left",
    width: "100%",

    "&::placeholder": {
      color: theme.textColor,
    },
  }),
}));
