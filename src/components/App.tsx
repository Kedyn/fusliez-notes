import { useData } from "context";
import { JssProvider, ThemeProvider } from "react-jss";
import useStyles from "./App.styles";
import ControlsContent from "./ControlsContent";
// import FeedbackForm from "./FeedbackForm";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import React from "react";
import Recovery from "./Recovery";
import jssSetUp from "utils/jssSetUp";
import Footer from "./Footer";
import Notes from "./Notes";
import Scores from "./Scores";
import ScoresPanel from "./ScoresPanel";
import TabNavigator from "./TabNavigator";

export const MobileContext = React.createContext(false);

export default function App(): JSX.Element {
  const { theme } = useData()!; // eslint-disable-line

  const [width, setWidth] = React.useState(window.innerWidth);
  const [currentTab, setCurrentTab] = React.useState("Players");

  const breakpoint = 846;

  const isMobile = width <= breakpoint;

  const classes = useStyles();

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
                    <MapsContent />
                  ) : null}
                  <>
                    <TabNavigator
                      currentTab={currentTab}
                      setCurrentTab={setCurrentTab}
                      children={<Footer />}
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
                  <Footer />
                  {/* <footer>
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
                      [9/24/2020] made with &#10084; by the{" "}
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
    
                  // {/* CHANGE LOG */}
                  {/* <Modal
                    title={`Change Log v${version}`}
                    show={showNotes}
                    onClose={() => setShowNotes(false)}
                  >
                    {patchNotes.map(({ title, items }) => (
                      <div key={title}>
                        <h4>{title}</h4>
                        <ul>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Modal>
                  <Modal
                    title="Feedback Form"
                    show={showForm}
                    onClose={() => setShowForm(false)}
                  >
                    <FeedbackForm />
                  </Modal> */}
                </>
              )}
            </React.Suspense>
          </MobileContext.Provider>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
