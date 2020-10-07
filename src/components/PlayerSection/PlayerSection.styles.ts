import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  PlayerSection: {},
  PlayerSectionTitle: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
  },
  PlayerSectionArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    backgroundColor: theme.backgroundColorAlt,
    boxShadow: "inset 0 0 0.25rem 0 black",
    borderRadius: "0.25rem",
  },
}));
