import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Section: {},
  SectionTitle: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 600,
  },
  SectionArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    padding: "0.5rem",
    backgroundColor: theme.backgroundColorSecondary,
    borderRadius: "0.25rem",
  },
}));
