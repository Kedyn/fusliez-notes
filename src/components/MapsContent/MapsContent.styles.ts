import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
    flex: 1,
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
    borderRadius: "50rem",
  },
  activeMap: {
    border: `0.25rem solid ${theme.buttonTextColor}`,
  },
  wrapper: {
    position: "relative",
  },
}));
