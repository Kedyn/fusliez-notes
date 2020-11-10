import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { lightenDarkenColor } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  ProgressBar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0 0.25rem",
  },
  ProgressBarTitle: {
    fontSize: "0.875rem",
    letterSpacing: "0.05rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  ProgressBarTitleOverall: {
    fontSize: "1.25rem",
  },
  ProgressBarTitleImpostor: {
    color: lightenDarkenColor(theme.imposterColorPrimary, 80),
  },
  ProgressBarTitleCrewmate: {
    color: lightenDarkenColor(theme.crewmateColorPrimary, 30),
  },
  CirclePrimary: {
    width: "6rem",
    height: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  CircleSecondary: {
    width: "5rem",
    height: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progress: {
    marginBottom: "0.5rem",
  },
  CirclePercentage: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "0.05rem",
  },
  CirclePercentagePrimary: {
    fontSize: "1rem",
  },
  CircleScores: {
    fontSize: "0.75rem",
    letterSpacing: "0.05rem",
  },
  CircleScoresPrimary: {
    fontSize: "1rem",
  },
}));
