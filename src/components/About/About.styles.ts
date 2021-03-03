import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

interface AboutStylesProps {
  isMobile: boolean;
}

export default createUseStyles((theme: ITheme) => ({
  About: (props: AboutStylesProps) => ({
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
  AboutHeader: {
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
  AboutTitle: {
    textAlign: "center",
  },
  AboutTeams: {
    display: "flex",
    flexWrap: "wrap",
  },
  AboutPerson: {},
  AboutTeam: {
    flex: "0 0 50%",
  },
  AboutOutro: { textAlign: "right" },
}));
