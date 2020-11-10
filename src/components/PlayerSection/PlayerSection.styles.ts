import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

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
    padding: "0.5rem",
    backgroundColor: theme.backgroundColorSecondary,
    borderRadius: "0.25rem",
  },
}));
