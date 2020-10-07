import { NAMESPACE, VERSION } from "utils/constants";

import About from "components/About";
import Feedback from "components/Feedback/Feedback";
import React from "react";
import VersionNotes from "components/VersionNotes";
import useStyles from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(): JSX.Element {
  const classes = useStyles();

  const [showVersionNotes, setShowVersionNotes] = React.useState<boolean>(
    false
  );
  const [showAbout, setShowAbout] = React.useState<boolean>(false);
  const [showFeedback, setShowFeedback] = React.useState<boolean>(false);

  React.useEffect(() => {
    const version = localStorage.getItem(`${NAMESPACE}version`);

    if (version === null || version !== VERSION) {
      setShowVersionNotes(true);
    }

    localStorage.setItem(`${NAMESPACE}version`, VERSION);
  }, []);

  return (
    <React.Fragment>
      <footer className={classes.Footer}>
        fusliez notes{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes/releases/latest"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();

            setShowVersionNotes(true);
          }}
        >
          {VERSION}
        </a>{" "}
        made with <FontAwesomeIcon icon={faHeart} /> by the{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();

            setShowAbout(true);
          }}
        >
          fuslie fam
        </a>
        . Leave us some{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes/issues"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();

            setShowFeedback(true);
          }}
        >
          feedback
        </a>
      </footer>

      <VersionNotes
        show={showVersionNotes}
        onClose={() => setShowVersionNotes(false)}
      />

      <About show={showAbout} onClose={() => setShowAbout(false)} />

      <Feedback show={showFeedback} onClose={() => setShowFeedback(false)} />
    </React.Fragment>
  );
}
