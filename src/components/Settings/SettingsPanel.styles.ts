import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

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
  SettingsContent: {},
  SettingsPane: {
    "&:not(:last-child)": {
      paddingBottom: "1rem",
      borderBottom: `1px solid ${theme.borderColor}`,
      marginBottom: "1rem",
    },
  },
}));
