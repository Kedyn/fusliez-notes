import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  ScoreControls: (props) => ({
    flex: props.isMobile ? "1 0 16rem" : "0 0 auto",
    maxWidth: props.isMobile ? "20rem" : "none",
    margin: props.isMobile ? 0 : "1rem 0",
  }),
  ScoreButtonsLayout: (props) => ({
    display: "flex",
    marginTop: props.isMobile ? "1rem" : "0.5rem",
    justifyContent: "space-between",
  }),
  ScoreButtonsColumn: {
    alignItems: "flex-start",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "auto",
    maxWidth: "100%",
    padding: "0 0.25rem",
  },
  ScoreButtonsLabel: {
    letterSpacing: "0.05rem",
    fontSize: "0.75rem",
    fontWeight: 500,
  },
  ScoreButtonsHeader: {
    fontSize: "0.875rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
    textAlign: "center",
    width: "100%",
  },
  ScoreOptions: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0 0",
  },
  ScoreOptionButton: {
    flex: "1 0 8rem",
    margin: "0.25rem",
  },
  ScoreOptionButtonDanger: {
    backgroundColor: theme.buttonDangerBackgroundColor,
    color: theme.buttonDangerTextColor,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        theme.buttonDangerBackgroundColor
      )}, 0.75)`,
    },
  },
}));
