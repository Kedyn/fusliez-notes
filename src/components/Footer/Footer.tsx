import React from "react";
import useStyles from "./Footer.styles";
import { useData } from "context";

export default function Footer({
  showNotes,
  setShowNotes,
  setShowForm,
}: {
  showNotes: boolean;
  setShowNotes: (showNotes: boolean) => void;
  setShowForm: (showForm: boolean) => void;
}): JSX.Element {
  const classes = useStyles();
  const { version } = useData()!; // eslint-disable-line

  return (
    <footer className={classes.root}>
      <small>
        fusliez notes{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            setShowNotes(!showNotes);
          }}
        >
          {version}
        </a>{" "}
        made with &#10084; by the{" "}
        <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
          fuslie fam
        </a>
        . <a onClick={() => setShowForm(true)}>Feedback</a>
      </small>
    </footer>
  );
}
