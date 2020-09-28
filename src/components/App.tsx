import React from "react";
import { INITIAL_DATA, useData } from "context";
import { JssProvider, ThemeProvider } from "react-jss";
import useStyles from "./App.styles";
import ControlsContent from "./ControlsContent";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import Modal from "components/common/Modal";
import Notes from "./Notes";
import Recovery from "./Recovery";
import jssSetUp from "utils/jssSetUp";
import Scores from "./Scores";
import ScoresPanel from "./ScoresPanel";
import TabNavigator from "./TabNavigator";

export const MobileContext = React.createContext(false);

const patchNotes = [
  {
    title: "Added",
    items: ["Mobile Support"],
  },
  {
    title: "Fixed",
    items: ["Player background color contrast", "Danger theme button"],
  },
  { title: "Changed", items: ["Use names to the settings modal."] },
  { title: "Removed", items: ["Light theme"] },
  {
    title: "Developer Notes",
    items: [
      "We are working in allowing custom theme colors.",
      "We added a feedback link at the bottom at the page, we love to hear from all of you.",
    ],
  },
];

export default function App(): JSX.Element {
  const { version, theme } = useData()!; // eslint-disable-line

  const [showNotes, setShowNotes] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [currentTab, setCurrentTab] = React.useState("Maps");

  const breakpoint = 846;

  const isMobile = width <= breakpoint;

  const classes = useStyles();

  React.useEffect(() => {
    if (version !== INITIAL_DATA.version) {
      setShowNotes(true);
    }
  }, []);

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
              <Recovery />
              {isMobile ? (
                <>
                  {currentTab === "Players" ? (
                    <MainContent isMobile={isMobile} />
                  ) : currentTab === "Notes" ? (
                    <Notes isMobile={isMobile} />
                  ) : currentTab === "Record" ? (
                    <div className={classes.recordContainer}>
                      <Scores />
                      <ScoresPanel isMobile={isMobile} />
                    </div>
                  ) : currentTab === "Maps" ? (
                    <MapsContent isMobile={isMobile} />
                  ) : null}
                  <>
                    <TabNavigator
                      currentTab={currentTab}
                      setCurrentTab={setCurrentTab}
                      children={
                        <Footer
                          showNotes={showNotes}
                          setShowNotes={setShowNotes}
                          setShowForm={setShowForm}
                        />
                      }
                    />
                  </>
                </>
              ) : (
                <>
                  <main>
                    <MainContent isMobile={false} />
                    <ControlsContent />
                    <MapsContent isMobile={false} />
                  </main>
                  <Footer
                    showNotes={showNotes}
                    setShowNotes={setShowNotes}
                    setShowForm={setShowForm}
                  />
                </>
              )}
              <Modal
                title="Feedback Form"
                show={showForm}
                onClose={() => setShowForm(false)}
              >
                <FeedbackForm />
              </Modal>
              {/* CHANGE LOG */}
              <Modal
                title={`Change Log v${version}`}
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
            </React.Suspense>
          </MobileContext.Provider>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
