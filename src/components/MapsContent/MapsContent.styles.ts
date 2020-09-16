import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flex: 1,
    padding: "0.5rem",
  },
  mapNames: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  mapName: {
    boxSizing: "border-box",
    cursor: "pointer",
    flex: 1,
    width: "33%",
    height: "100%",
    borderRadius: "50rem",
  },
  activeMap: {
    // border: `0.5rem solid ${theme.background_tertiary}`,
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
