import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  MapsPanel: {
    flex: 1,
    justifyContent: "center",
    padding: "1rem",
  },
  MapsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  MapsTitle: {
    fontSize: "1.25rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    marginRight: "1rem",
    flex: "1 0 auto",
  },
  MapsToggle: (props) => ({
    display: props.isMobile ? "flex" : "inline-flex",
    width: props.isMobile ? "100%" : "auto",
  }),
  MapsToggleButton: {
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
  MapsToggleButtonActive: {
    opacity: "0.5",
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.linkColor,
    },
  },
  MapContainer: (props) => ({
    position: "relative",
    textAlign: props.isMobile ? "center" : "left",
  }),
  DraggableHeader: (props) => ({
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
  MapPlayerIcon: (props) => ({
    width: props.isMobile ? "1.15rem" : "2.3rem",
    height: "auto",
    margin: "0.5rem 0.75rem",

    "&:hover": {
      cursor: "grab",
    },
  }),
}));
