import { Trans, useTranslation } from "react-i18next";

import Button from "components/common/Button";
import EmergencyButtonUsages from "components/EmergencyButtonUsages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainControls from "components/MainControls";
import Maps from "components/Maps";
import ModalControls from "components/ModalControls";
import Notepad from "components/Notepad";
import React from "react";
import ScoresPanel from "components/ScoresPanel";
import Sections from "components/Sections";
import cx from "classnames";
import useStyles from "./DesktopLayout.styles";

export default function DesktopLayout(): JSX.Element {
  const [fullMap, setFullMap] = React.useState(false);

  const classes = useStyles({ fullMap });

  const { t, i18n } = useTranslation();

  return (
    <>
      <main data-testid="desktop-main" className={classes.DesktopLayout}>
        <div
          className={cx(
            {
              [classes.DesktopLayoutLeftContainerShown]: !fullMap,
              [classes.DesktopLayoutLeftContainerHidden]: fullMap,
            },
            classes.DesktopLayoutLeftContainer
          )}
        >
          <div className={classes.DesktopLayoutScoresAndSections}>
            <ScoresPanel />

            <EmergencyButtonUsages />

            <Sections />
          </div>

          <div className={classes.DesktopLayoutVerticalDivider} />

          <div className={classes.DesktopLayoutControlsAndNotepad}>
            <MainControls />

            <div className={classes.DesktopLayoutHorizontalDivider} />

            <Notepad />

            <div className={classes.DesktopLayoutHorizontalDivider} />

            <ModalControls />
          </div>
        </div>

        <Button
          className={classes.DesktopLayoutMapButton}
          aria-label={fullMap ? "collapse" : "expand"}
          onClick={() => setFullMap((prevState) => !prevState)}
        >
          <FontAwesomeIcon
            icon={fullMap ? "arrow-right" : "arrow-left"}
            size="xs"
          />
        </Button>

        <div className={classes.DesktopLayoutRightContainer}>
          <Maps />
        </div>
      </main>

      <footer
        style={{ direction: i18n.dir() }}
        className={classes.DesktopLayoutFooter}
      >
        <Trans i18nKey="footer.partOne">
          fusliez notes made with <FontAwesomeIcon icon="heart" /> by the fuslie
          family.
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
    </>
  );
}
