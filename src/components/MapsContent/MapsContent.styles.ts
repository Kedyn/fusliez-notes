import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
  },
  button: {
    fontSize: "1rem",
    margin: "1rem 0",
    width: "160px",
  },
  mapNames: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  mapName: {
    boxSizing: "border-box",
    cursor: "pointer",
    maxHeight: "4rem",
    maxWidth: "33%",
    borderRadius: "50rem",
  },
  playerIcon: {
    height: "42px",
    width: "42px",
    "&:hover": {
      cursor: "grab",
    },
  },
  activeMap: {
    border: `0.25rem solid ${theme.buttonTextColor}`,
  },
  wrapper: {
    position: "relative",
  },
}));
