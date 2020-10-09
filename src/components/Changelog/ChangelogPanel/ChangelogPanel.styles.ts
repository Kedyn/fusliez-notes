import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  ChangelogPanel: (props) => ({
    padding: props.isMobile ? "1rem" : "0",
    "& h3": {
      letterSpacing: "0.05em",
      margin: "1rem 0",
    },
    "& ul": {
      margin: "1rem 0",
    },
  }),
  ChangelogPanelTitle: {
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
}));
