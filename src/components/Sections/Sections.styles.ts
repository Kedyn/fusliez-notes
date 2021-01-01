import { createUseStyles } from "react-jss";

interface ISectionsStylesProps {
  isMobile: boolean;
}

export default createUseStyles({
  Sections: (props: ISectionsStylesProps) => ({
    padding: props.isMobile ? "1rem" : 0,
  }),
  SectionsControls: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0.5rem 0",

    "& button": {
      margin: "0.25rem",
      flex: "1 1 auto",
      maxWidth: "100%",
    },
  },
});
