import ControlsContent from "components/ControlsContent";
import Footer from "components/Footer";
import MainContent from "components/MainContent";
import MapsContent from "components/MapsContent";
import React from "react";

export default function DesktopContent(): JSX.Element {
  return (
    <React.Fragment>
      <main>
        <MainContent />
        <ControlsContent />
        <MapsContent />
      </main>

      <Footer />
    </React.Fragment>
  );
}
