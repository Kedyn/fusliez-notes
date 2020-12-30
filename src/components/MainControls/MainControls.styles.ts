import { createUseStyles } from "react-jss";

interface IMainControlsStylesProps {
  isMobile: boolean;
}

export default createUseStyles({
  MainControls: {
    marginBottom: "1rem",
  },
  MainControlsScoresSection: (props: IMainControlsStylesProps) => ({
    flex: props.isMobile ? "1 0 16rem" : "0 0 auto",
    maxWidth: props.isMobile ? "20rem" : "none",
    marginBottom: props.isMobile ? 0 : "1rem",
  }),
  MainControlsScoresTable: (props: IMainControlsStylesProps) => ({
    display: "flex",
    marginTop: props.isMobile ? "1rem" : "0.5rem",
    justifyContent: "space-between",
  }),
  MainControlsScoresColumn: {
    alignItems: "flex-start",
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "auto",
    maxWidth: "100%",
    padding: "0 0.25rem",
  },
  MainControlsScoresHeader: (props: IMainControlsStylesProps) => ({
    fontSize: props.isMobile ? "0.875rem" : "1rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
    textAlign: "center",
    width: "100%",
  }),
  MainControlsScoresLabel: (props: IMainControlsStylesProps) => ({
    letterSpacing: "0.05rem",
    fontSize: props.isMobile ? "0.75rem" : "0.875rem",
    fontWeight: 500,
  }),
  MainControlsResetSection: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0 0",
  },
  MainControlsButton: {
    flexGrow: 1,
    margin: "0.25rem",
  },
});
