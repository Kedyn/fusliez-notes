import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: 1600,
    backgroundColor: theme.backgroundColor,
  },
  header: {
    display: "flex",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  title: {
    flexGrow: 1,
    padding: "1rem",
  },
  close: {
    textAlign: "center",
    padding: "1rem",
    cursor: "pointer",
  },
  body: {
    padding: "1rem",
  },
  footer: {
    borderTop: `1px solid ${theme.borderColor}`,
    padding: "1rem",
  },
}));
