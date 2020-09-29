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
    height: "100%",
    left: "0",
    overflowY: "scroll",
    padding: "1rem",
    position: "fixed",
    top: "0",
    transform: "translateX(100%)",
    transition: "transform 0.5s ease-out",
    width: "45%",
    zIndex: "200",
  },
  container: {
    alignItems: "center",
    borderWidth: "2px 0",
    borderColor: theme.textColor,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 0.25rem",
    padding: "1rem 0",
    width: "100%",
  },
  dangerButton: {
    margin: "1rem 0",
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
  reset: {
    fontSize: "1rem",
  },
}));
