import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  SettingsPanel: (props) => ({
    padding: props.isMobile ? "1rem" : "0",
    "& h3": {
      letterSpacing: "0.05em",
    },
  }),
  SettingsPanelTitle: {
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
  SettingsContent: {
    display: "flex",
    flexWrap: "wrap",
  },
  SettingsPane: (props) => ({
    flex: props.isMobile ? "0 0 100%" : "0 0 50%",

    "&:not(:last-child)": {
      paddingBottom: "1rem",
      borderBottom: props.isMobile ? `1px solid ${theme.borderColor}` : "0",
      borderRight: props.isMobile ? "0" : `1px solid ${theme.borderColor}`,
      marginBottom: "1rem",
    },

    "&:last-child": {
      paddingLeft: props.isMobile ? "0" : "1rem",
    },
  }),
  SettingsContentDivider: {
    margin: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
}));
