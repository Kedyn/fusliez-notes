import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ScoreControls: (props) => ({
    flex: props.isMobile ? "1 0 16rem" : "0 0 auto",
    maxWidth: props.isMobile ? "20rem" : "none",
    marginBottom: props.isMobile ? 0 : "1rem",
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
  ScoreButtonsLabel: (props) => ({
    letterSpacing: "0.05rem",
    fontSize: props.isMobile ? "0.75rem" : "0.875rem",
    fontWeight: 500,
  }),
  ScoreButtonsHeader: (props) => ({
    fontSize: props.isMobile ? "0.875rem" : "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
    textAlign: "center",
    width: "100%",
  }),
  ScoreOptions: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0 0",
  },
  ScoreOptionButton: {
    flex: "1 0 8rem",
    margin: "0.25rem",
  },
}));
