import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {
    alignItems: "center",
    background: theme.backgroundColor,
    height: "100vh",
    "-webkit-overflow-scrolling": "touch",
    left: "0",
    overflowY: "scroll",
    maxWidth: "75%",
    minWidth: "320px",
    width: "45%",
    position: "fixed",
    top: "0",
    transform: "translateX(100%)",
    transition: "transform 0.5s ease-out",
    zIndex: "200",
  },
  drawerOpen: {
    transform: "translateX(0)",
  },
  back: {
    display: "block",
    padding: "0.5rem 1rem",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(theme.backgroundColor)}, 0.7)`,
    },
  },
  nav: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "block",
    padding: "0.5rem",
    paddingLeft: "2rem",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.buttonBackgroundColor,
      color: theme.buttonTextColor,
    },
  },
}));
