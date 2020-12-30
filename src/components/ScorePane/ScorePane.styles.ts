import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";
import { lightenDarkenColor } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  ScorePane: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0 0.25rem",
  },
  ScorePaneTitle: {
    fontSize: "0.875rem",
    letterSpacing: "0.05rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  ScorePaneTitleCrewmate: {
    color: lightenDarkenColor(theme.crewmateColorPrimary, 30),
  },
  ScorePaneTitleOverall: {
    fontSize: "1.25rem",
  },
  ScorePaneTitleImpostor: {
    color: lightenDarkenColor(theme.impostorColorPrimary, 30),
  },
  ScorePaneCircularProgressBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ScorePanePrimary: {
    width: "6rem",
    height: "6rem",
  },
  ScorePaneSecondary: {
    width: "5rem",
    height: "5rem",
  },
  ScorePaneCircularProgressBar: {
    fontSize: "1rem",
  },
  ScorePanePercentage: {
    fontSize: "0.75rem",
    letterSpacing: "0.05rem",
  },
  ScorePaneScores: {
    fontSize: "1rem",
  },
}));
