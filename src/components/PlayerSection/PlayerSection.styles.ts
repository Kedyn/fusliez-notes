import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  PlayerSection: {},
  PlayerSectionTitle: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 600,
  },
  PlayerSectionArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    padding: "0.75rem",
    backgroundColor: theme.backgroundColorAlt,
    borderRadius: "0.25rem",
  },
}));
