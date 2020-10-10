import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ControlsContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1rem",
    maxWidth: "22.5rem",
  },
  ControlsContentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: "0.5rem 0.5rem 1rem",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  Divider: {
    width: "100%",
    border: 0,
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "1rem",
  },
  scoreButtons: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.5rem",
  },
  scoreButtonsSection: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));
