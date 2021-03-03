import { createUseStyles } from "react-jss";

interface INotepadStylesProps {
  isMobile: boolean;
}

export default createUseStyles({
  Notepad: (props: INotepadStylesProps) => ({
    height: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: props.isMobile ? "1rem" : "0",
    width: "100%",
    marginTop: props.isMobile ? "0" : "1rem",
  }),
  NotepadHeader: {
    display: "flex",
    marginBottom: "0.5rem",

    "& h2": {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0.05em",
      marginRight: "1rem",
      flex: "1 0 auto",
    },
  },
  NotepadReset: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
  },
  NotepadEditor: {
    flex: "1 0 auto",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    resize: "vertical",
  },
});
