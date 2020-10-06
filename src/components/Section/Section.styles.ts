import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  Section: {},
  SectionTitle: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
  },
  SectionArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    backgroundColor: theme.backgroundColorAlt,
    boxShadow: "inset 0 0 0.25rem 0 black",
    borderRadius: "0.25rem",
  },
}));
