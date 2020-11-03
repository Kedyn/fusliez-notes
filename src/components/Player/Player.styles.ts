import { contrastColor, getColorValue, hexToRGB } from "utils/colorConverter";

import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Player: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: props.showNames || props.isColorBlind ? "1 0 50%" : "0 0 2.5rem",
    maxWidth: props.showNames || props.isColorBlind ? "50%" : "none",
  }),
  PlayerTile: (props) => ({
    alignItems: "center",
    backgroundColor:
      props.playerName || !props.showNames
        ? `rgb(${getColorValue(props.color, "dark")})`
        : theme.backgroundColorSecondary,
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
      borderColor: `rgba(${hexToRGB(theme.textColorSecondary)}, 0.25)`,
      cursor: props.isReadOnly ? "grab" : "pointer",
    },
  }),
  PlayerIcon: (props) => ({
    display: "flex",
    flex: props.showNames || !props.isColorBlind ? "0 0 2.25rem" : "1 0 auto",
    alignSelf: "stretch",
    width: props.showNames || !props.isColorBlind ? "2.25rem" : "auto",
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
      cursor: props.isReadOnly ? "grab" : props.showNames ? "pointer" : "grab",
    },
  }),
  PlayerName: (props) => ({
    flexGrow: 1,
    flexBasis: "0",
    maxWidth: "100%",
    paddingLeft: "0.5rem",
    fontSize: "1.15rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0.05rem",
    color:
      props.playerName !== ""
        ? contrastColor(getColorValue(props.color, "dark"), theme)
        : theme.textColorPrimary,
    opacity: props.isReadOnly && props.playerName === "" ? 0.5 : 1,
  }),
  PlayerInput: (props) => ({
    color: contrastColor(getColorValue(props.color, "dark"), theme),
    display: "block",
    fontSize: props.isMobile ? "1rem" : props.showNames ? "1.15rem" : "1rem",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    letterSpacing: "0.05rem",
    lineHeight: 1.25,
    padding: "0.25rem 0",
    textAlign: "left",
    width: "100%",

    "&::placeholder": {
      color: theme.textColorPrimary,
      opacity: 0.5,
    },
  }),
  PlayerHelpText: {
    textAlign: "center",
    fontSize: "0.75rem",
    overflowX: "hidden",
    letterSpacing: "0.05em",
    fontWeight: 500,
    opacity: 0.7,
  },
}));
