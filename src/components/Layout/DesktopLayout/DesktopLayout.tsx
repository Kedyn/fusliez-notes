import Button from "components/common/Button";
import ControlsContent from "components/ControlsContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
import MapsContent from "components/MapsPanel";
import React from "react";
import useStyles from "./DesktopLayout.styles";

export default function DesktopContent(): JSX.Element {
  const classes = useStyles();

  const [fullMap, setFullMap] = React.useState(false);

  return (
    <React.Fragment>
      <main className={classes.DesktopContent}>
        {!fullMap && (
          <React.Fragment>
            <MainContent />

            <div className={classes.DesktopDivider} />

            <ControlsContent />
          </React.Fragment>
        )}

        <Button
          className={classes.DesktopMapButton}
          onClick={() => setFullMap(!fullMap)}
        >
          <FontAwesomeIcon
            icon={fullMap ? "arrow-right" : "arrow-left"}
            size="xs"
          />
        </Button>

        <MapsContent />
      </main>

      <Footer />
    </React.Fragment>
  );
}
