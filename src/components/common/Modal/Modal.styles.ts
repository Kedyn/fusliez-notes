import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    height: "100vh",
    left: 0,
    justifyContent: "center",
    overflow: "auto",
    position: "fixed",
    top: 0,
    width: "100vw",
    zIndex: 1,
  },
  content: {
    backgroundColor: theme.backgroundColor,
    borderRadius: "10px",
    maxWidth: 1600,
    padding: "0 2rem",
  },
  header: {
    borderBottom: `1px solid ${theme.borderColor}`,
    display: "flex",
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
