import { INITIAL_DATA, useData } from "context";
import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import FeedbackForm from "./FeedbackForm";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import Modal from "./common/Modal";
import React from "react";
import Recovery from "./Recovery";
import jssSetUp from "utils/jssSetUp";

export default function App(): JSX.Element {
  const { version, theme } = useData()!; // eslint-disable-line
  const [showNotes, setShowNotes] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  React.useEffect(() => {
    if (version !== INITIAL_DATA.version) {
      setShowNotes(true);
    }
  }, []);

  const patchNotes = [
    {
      title: "Highlights",
      items: [
        <>Color change menu for players. (click player icon to open)</>,
        <>Better support for different screen sizes.</>,
        <>"Use player names options." moved to settings.</>,
        <>You can now use the ENTER key to move to the next player name.</>,
      ],
    },
    {
      title: "Development Notes",
      items: [
        <>We are working in allowing custom theme colors.</>,
        <>
          We added a feedback link at the bottom at the page, we love to hear
          from all of you.
        </>,
        <>
          If you would like to see all the changes we have made please read our{" "}
          <a href="https://github.com/Kedyn/fusliez-notes/blob/master/CHANGELOG.md">
            CHANGELOG.md
          </a>{" "}
          file.
        </>,
      ],
    },
  ];

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
                  {version}
                </a>{" "}
                [9/27/2020] made with &#10084; by the{" "}
                <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                  fuslie fam
                </a>
                .{" "}
                <a
                  href="#"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    setShowForm(true);
                  }}
                >
                  Feedback
                </a>
                <Modal
                  title="Feedback Form"
                  show={showForm}
                  onClose={() => setShowForm(false)}
                >
                  <FeedbackForm />
                </Modal>
              </small>
            </footer>
            <Recovery />
            {/* CHANGE LOG */}
            <Modal
              title={`Change Log v${version}`}
              show={showNotes}
              onClose={() => setShowNotes(false)}
            >
              {patchNotes.map(({ title, items }) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Modal>
          </React.Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
