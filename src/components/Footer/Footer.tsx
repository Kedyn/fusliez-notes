import React from "react";
import useStyles from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.Footer}>
        fusliez notes made with <FontAwesomeIcon icon={faHeart} /> by the fuslie
        fam. |{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>{" "}
        |{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave feedback
        </a>
      </footer>
    </React.Fragment>
  );
}
