import ControlsContent from "components/ControlsContent";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
import MapsContent from "components/MapsPanel";
import React from "react";
import useStyles from "./DesktopLayout.styles";

export default function DesktopContent(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.DesktopContent}>
        <MainContent />

        <div className={classes.DesktopDivider} />

        <ControlsContent />

        <div className={classes.DesktopDivider} />

        <MapsContent />
      </main>

      <Footer />
    </React.Fragment>
  );
}
