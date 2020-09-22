import colorNameToRGB from "utils/colorConverter";
import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
export default createUseStyles((theme: ITheme) => ({
  container: (props) => ({
    alignItems: "center",
    backgroundColor: props.name
      ? `rgba(${props.backgroundColor}, 0.7)`
      : "transparent",
    borderRadius: "0.25rem",
    display: "flex",
    justifyContent: "center",
    padding: "0 0.25rem",
    position: "relative",
    margin: "0.25rem 0",
  }),
  player: {
    padding: "0.25rem",
  },
  name: {
    flexGrow: 1,
    padding: "0.25rem",
  },
  icon: {
    height: "36px",
    width: "36px",
    borderRadius: "6px",
    padding: "0.25rem",

    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.7)",
      cursor: "pointer",
    },
  },
  input: (props) => ({
    width: "100%",
    fontWeight: 700,
    letterSpacing: "0.05rem",
    fontSize: props.name ? "1.5rem" : "1rem",
    lineHeight: 1.5,
    borderRadius: ".2rem",
    textAlign: "left",
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
