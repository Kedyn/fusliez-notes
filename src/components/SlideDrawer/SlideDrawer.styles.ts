import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {
    alignItems: "center",
    background: theme.backgroundColor,
    boxShadow: "5px 0px 7px rgba(255,255,255,0.5)",
    display: "flex",
    flexDirection: "column",
    height: window.innerHeight,
    "-webkit-overflow-scrolling": "touch",
    left: "0",
    overflowY: "scroll",
    maxWidth: "45%",
    minWidth: "45%",
    padding: "1rem",
    position: "fixed",
    top: "0",
    transform: "translateX(100%)",
    transition: "transform 0.5s ease-out",
    zIndex: "200",
  },
  container: {
    alignItems: "center",
    borderWidth: "2px 0",
    borderColor: theme.textColor,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0 0.25rem",
    padding: "0.25rem 0",
    width: "100%",
  },
  dangerButton: {
    backgroundColor: theme.buttonDangerBackgroundColor,
    color: theme.buttonDangerTextColor,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        theme.buttonDangerBackgroundColor
      )}, 0.75)`,
    },
  },
  drawerOpen: {
    transform: "translateX(0)",
  },
  icon: {
    height: "50px",
    width: "50px",
    marginBottom: "1rem",
  },
  nonLastSection: {
    borderBottom: "none",
  },
  reset: {
    fontSize: "1rem",
    margin: "0.5rem 0",
  },
}));
