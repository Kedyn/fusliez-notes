import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
    flex: 3,
  },
  button: {
    backgroundColor: theme.backgroundSecondary,
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
    height: "2rem",
  },
  mapName: {
    boxSizing: "border-box",
    cursor: "pointer",
    flex: 1,
    width: "33%",
    height: "100%",
    borderRadius: "50rem",
  },
  activeButton: {
    border: `2px solid ${theme.textPrimary}`,
  },
  activeMap: {
    border: `0.5rem solid seagreen`,
  },
  wrapper: {
    position: "relative",
  },
  map: {
    width: "100%",
    borderRadius: "12px",
  },
}));
