import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

interface ISettingsStylesProps {
  isMobile: boolean;
}

export default createUseStyles((theme: ITheme) => ({
  Settings: (props: ISettingsStylesProps) => ({
    padding: props.isMobile ? "1rem" : "0",
    minHeight: "28rem",
  }),
  SettingsTitle: {
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
  SettingsTabs: {
    marginBottom: "1rem",
  },
  SettingsContent: {},
}));
