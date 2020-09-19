import React from "react";
import useStyles from "./FeedbackForm.styles";

export default function FeedbackForm(): JSX.Element {
  const classes = useStyles();

  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform?embedded=true"
      className={classes.form}
      frameBorder="0"
    >
      Loading…
    </iframe>
  );
}
