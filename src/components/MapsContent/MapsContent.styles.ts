import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
  },
  mapNames: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  mapName: {
    cursor: "pointer",
    height: "4rem",
    borderRadius: "50rem",
  },
  activeMap: {
    border: `0.5rem solid ${theme.background_tertiary}`,
  },
  wrapper: {
    position: "relative",
  },
  map: {
    width: "100%",
  },
}));
