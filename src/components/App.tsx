import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import Modal from "./common/Modal";
import FeedbackForm from "./FeedbackForm";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import Scores from "./Scores";
import TabNavigator from "./TabNavigator";
import { useData, INITIAL_DATA } from "context";

export const MobileContext = React.createContext();

export default function App(): JSX.Element {
  // eslint-disable-next-line
  const { theme } = useData()!;
  const [showNotes, setShowNotes] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const { version } = useData()!;

  React.useEffect(() => {
    if (version !== INITIAL_DATA.version) {
      setShowNotes(true);
    }
  }, []);

  const patchNotes = [
    {
      title: "Added",
      items: [
        "Separate Scores for impostors and innocents",
        "Color change menu for players",
        "Reset Scores",
        "Reset Round (players positions)",
        "Reset all button, resets to default.",
        "Reset Notes",
        "Settings Modal",
        "Recovery Notes Modal",
        "Change log Modal",
      ],
    },
    { title: "Fixed", items: ["Player background color contrast"] },
    { title: "Changed", items: ["Use names to the settings modal."] },
    { title: "Removed", items: ["Light theme", "Draggable map characters"] },
  ];

  const [width, setWidth] = React.useState(window.innerWidth);
  // const [useDesktop, setUseDesktop] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("Record");

  const breakpoint = 768;

  const isMobile = width <= breakpoint;

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>
          <MobileContext.Provider value={isMobile}>
            <React.Suspense fallback="loading">
              {isMobile ? (
                <>
                  {currentTab === "Players" ? (
                    <MainContent isMobile={isMobile} />
                  ) : currentTab === "Maps" ? (
                    <MapsContent />
                  ) : currentTab === "Record" ? (
                    <Scores />
                  ) : null}
                  <>
                    <TabNavigator
                      currentTab={currentTab}
                      setCurrentTab={setCurrentTab}
                    />
                    <footer>
                      <small>
                        fusliez notes{" "}
                        <a
                          href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0"
                          onClick={(
                            event: React.MouseEvent<
                              HTMLAnchorElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            setShowNotes(!showNotes);
                          }}
                        >
                          {version}
                        </a>{" "}
                        [9/24/2020] made with &#10084; by the{" "}
                        <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                          fuslie fam
                        </a>
                        . <a onClick={() => setShowForm(true)}>Feedback</a>
                        <Modal
                          title="Feedback Form"
                          show={showForm}
                          onClose={() => setShowForm(false)}
                        >
                          <FeedbackForm />
                        </Modal>
                      </small>
                      {/* CHANGE LOG */}
                      <Modal
                        title="Change Log v0.8.0"
                        show={showNotes}
                        onClose={() => setShowNotes(false)}
                      >
                        {patchNotes.map(({ title, items }) => (
                          <div key={title}>
                            <h3>{title}</h3>
                            <ul>
                              {items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Modal>
                    </footer>
                  </>
                </>
              ) : (
                <>
                  <main>
                    <MainContent isMobile={false} />
                    <ControlsContent />
                    <MapsContent isMobile={false} />
                  </main>
                  <footer>
                    <div>
                      <small>
                        fusliez notes{" "}
                        <a href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0">
                          v0.7.0
                        </a>{" "}
                        [9/14/2020] made with &#10084; by the{" "}
                        <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                          fuslie fam
                        </a>
                        .
                      </small>
                    </div>
                  </footer>
                </>
              )}
            </React.Suspense>
          </MobileContext.Provider>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
