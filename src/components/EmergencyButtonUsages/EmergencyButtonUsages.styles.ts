import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

interface IEmergencyButtonUsagesStylesProps {
  isMobile: boolean;
}

export default createUseStyles((theme: ITheme) => ({
  EmergencyButtonUsages: (props: IEmergencyButtonUsagesStylesProps) => ({
    padding: props.isMobile ? "1rem" : 0,
    "& button": {
      margin: "0.5rem 0 0",
      width: "100%",
    },
  }),
  EmergencyButtonUsagesTitle: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 600,
  },
  EmergencyButtonUsagesArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    padding: "0.5rem",
    backgroundColor: theme.backgroundColorSecondary,
    borderRadius: "0.25rem",
  },
}));
