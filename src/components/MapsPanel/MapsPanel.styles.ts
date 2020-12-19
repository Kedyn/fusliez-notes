import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  "@global": {
    image: {
      pointerEvents: "none",
    },
    text: {
      fontFamily:
        "Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif",
      fontSize: "1.75rem",
      fill: "#ffffff",
      strokeWidth: "1px",
      stroke: "#000000",
      pointerEvents: "none",
      userSelect: "none",
    },
    ".MapDescriptions": {
      "&>text": {
        fontFamily: theme.fontFamily,
        fontSize: "1.25rem",
        strokeWidth: 0,
      },
    },
  },
  MapsPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  MapsPanelMapsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  MapsPanelMapsTitle: {
    fontSize: "1.25rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    marginRight: "1rem",
    flex: "1 0 auto",
  },
  MapsPanelMapsToggle: (props) => ({
    display: props.isMobile ? "flex" : "inline-flex",
    width: props.isMobile ? "100%" : "auto",
    margin: "0 0.25rem",
  }),
  MapsPanelMapsToggleButton: {
    flex: "1 1 auto",
    "&:not(:first-child)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "&:not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  MapsPanelMapsToggleButtonActive: {
    opacity: "0.5",
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.linkColor,
    },
  },
  MapsPanelMainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  MapsPanelMapContainer: {
    backgroundColor: "#000000",
  },
  MapsPanelMap: {
    maxHeight: "calc(-16.5rem + 100vh)",
  },
  MapsPanelDraggableHeader: (props) => ({
    display: "flex",
    flexDirection: props.isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0",
    "& h3": {
      fontSize: props.isMobile ? "0.875rem" : "1rem",
      fontWeight: 500,
      letterSpacing: "0.05em",
      padding: "0.5rem 0",
    },
  }),
  MapsPanelMapPlayerIcon: (props) => ({
    width: props.isMobile ? "1rem" : "2rem",
    height: "auto",
    margin: "0 0.75rem",
  }),
  MapPlayerName: {
    fontSize: "1rem",
    margin: "0.25rem 0",
    textShadow:
      "-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000",
  },
  MapPlayerIconContainer: (props) => ({
    alignItems: "center",
    display: "inline-flex",
    flex: `1 0
     ${props.isMobile ? "2rem" : "4rem"}`,
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    margin: "0.5rem",
    textAlign: "center",
    maxWidth: props.isMobile ? "1.5rem" : "3rem",

    "&:hover": {
      cursor: "grab",
    },
  }),
}));
