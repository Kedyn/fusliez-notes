import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import Modal from "./common/Modal";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import { useData } from "context";

export default function App(): JSX.Element {
  // eslint-disable-next-line
  const { theme } = useData()!;
  const [showNotes, setShowNotes] = React.useState(false);

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback="loading">
            <main>
              <MainContent />
              <ControlsContent />
              <MapsContent />
            </main>
            <footer>
              <small>
                fusliez notes{" "}
                <a
                  href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    setShowNotes(!showNotes);
                  }}
                >
                  v0.8.0 (Preview)
                </a>{" "}
                [9/24/2020] made with &#10084; by the{" "}
                <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                  fuslie fam
                </a>
                .
              </small>
            </footer>
            {/* CHANGE LOG */}
            <Modal
              title="Developer Notes"
              show={showNotes}
              onClose={() => setShowNotes(false)}
            >
              This is only a preview version. Although the current does not
              allow theme color changes, it will be on the full 0.8.0 version
            </Modal>
          </React.Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
