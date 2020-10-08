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
    padding: "0.75rem",
    backgroundColor: theme.backgroundColorAlt,
    boxShadow:
      "inset 0.25rem 0.25rem 0.75rem  rgba(0,0,0,0.05), inset -0.25rem -0.25rem 0.75rem  rgba(255,255,255,0.05)",
    borderRadius: "0.25rem",
  },
}));
