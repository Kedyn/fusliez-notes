import { ITheme } from "utils/types";
import colorNameToRGB from "utils/colorConverter";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  container: (props) => ({
    alignItems: "center",
    backgroundColor:
      props.name || !props.names
        ? `rgba(${props.backgroundColor}, 0.7)`
        : "transparent",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "0.25rem",
    display: "flex",
    flex: `0 1 ${
      props.isMobile && window.screen.orientation.type.includes("portrait")
        ? "100%"
        : props.names
        ? "50%"
        : "25%"
    }`,
    justifyContent: "center",
    margin: "0.25rem 0",
    opacity: props.longPressed ? "0.5" : 1,
    padding: "0.25rem 0.1rem",
    position: "relative",
  }),
  player: {
    padding: "0.25rem",
  },
  name: {
    flexGrow: 1,
  },
  icon: (props) => ({
    borderRadius: "6px",
    padding: "0.15rem",
    margin: props.isMobile ? "0 0.5rem" : "0 0.15rem",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: props.names
        ? `rgba(${colorNameToRGB(props.color)}, 0.7)`
        : props.backgroundColor,
      cursor: props.names ? "pointer" : "grab",
    },
    "& img": {
      minWidth: "1.5rem",
      minHeight: "1.5rem",
    },
  }),
  input: (props) => ({
    borderRadius: ".2rem",
    fontSize: props.isMobile ? "1.5rem" : props.name ? "1.15rem" : "1rem",
    fontWeight: 700,
    letterSpacing: "0.025rem",
    lineHeight: 1.5,
    marginRight: "0.25rem",
    padding: 0,
    textAlign: "left",
    width: "100%",

    "&::placeholder": {
      color: theme.textColor,
    },
  }),

  playerColorChangeMenu: {
    alignItems: "center",
    background: theme.backgroundColor,
    border: "0.0625rem solid rgba(240, 240, 240, 0.25)",
    borderRadius: "6px",
    boxShadow: "0 0 1rem rgba(240, 240, 240, 0.1)",
    bottom: "110%",
    display: "flex",
    flex: 4,
    flexWrap: "wrap",
    left: 0,
    justifyContent: "space-between",
    position: "absolute",
    padding: "0.25rem",
    width: "100%",
    zIndex: 10,
  },

  playerColorChangeMenuHidden: {
    display: "none",
  },
}));
