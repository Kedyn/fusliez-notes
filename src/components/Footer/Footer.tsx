import { Trans, useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useStyles from "./Footer.styles";

export default function Footer(): JSX.Element {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <footer style={{ direction: i18n.dir() }} className={classes.Footer}>
        <Trans i18nKey="footer.partOne">
          fusliez notes made with <FontAwesomeIcon icon="heart" /> by the fuslie
          fam.
        </Trans>{" "}
        |{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.partTwo")}
        </a>{" "}
        |{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.partThree")}
        </a>
      </footer>
    </React.Fragment>
  );
}
