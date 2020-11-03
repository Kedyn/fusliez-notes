import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  AboutPanel: (props) => ({
    padding: props.isMobile ? "1rem" : "0",

    "& a": {
      fontWeight: 700,
      fontSize: "1.25rem",
    },

    "& h3": {
      letterSpacing: "0.05em",
    },

    "& hr": {
      border: 0,
      borderBottom: `1px solid ${theme.borderColor}`,
    },
  }),
  AboutPanelHeader: {
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
  AboutPanelTitle: {
    textAlign: "center",
  },
  AboutPanelTeams: {
    display: "flex",
    flexWrap: "wrap",
  },
  AboutPanelPerson: {},
  AboutPanelTeam: {
    flex: "0 0 50%",
  },
  AboutPanelOutro: { textAlign: "right" },
}));
