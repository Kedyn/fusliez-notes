import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
    flex: 1,
  },
  button: {
    fontSize: "1rem",
    margin: "1rem 0",
    width: "20%",
  },
  mapNames: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "0.5rem",
    width: "100%",
  },
  mapName: {
    borderRadius: "50rem",
    boxSizing: "border-box",
    cursor: "pointer",
    maxHeight: "4rem",
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
