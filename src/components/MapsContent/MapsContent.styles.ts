import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flex: 3,
    padding: "0.5rem",
  },
  button: {
    backgroundColor: theme.background_secondary,
    color: "#ffffff",
    fontSize: "1rem",
    margin: "0.25rem",
    "&:hover": {
      backgroundColor: "#5a6268", // should not be hard coded but just for now
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0",
  },
  mapNames: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
    width: "100%",
  },
  mapName: {
    borderRadius: "50rem",
    boxSizing: "border-box",
    cursor: "pointer",
    flex: 1,
    width: "33.3%",
  },
  activeButton: {
    border: `2px solid ${theme.text_primary}`,
  },
  activeMap: (props) => ({
    border: `${props.isMobile ? "0.5rem" : "0.15rem"} solid seagreen`,
  }),
  wrapper: {
    position: "relative",
  },
  map: {
    width: "100%",
    borderRadius: "12px",
  },
}));
