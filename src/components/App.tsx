import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import TabNavigator from "./TabNavigator";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import { useData } from "context";

export const MobileContext = React.createContext();

export default function App(): JSX.Element {
  // eslint-disable-next-line
  const { theme } = useData()!;

  const [width, setWidth] = React.useState(window.innerWidth);
  // const [useDesktop, setUseDesktop] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("Players");

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
                    <MapsContent isMobile={isMobile} />
                  ) : null}
                  <>
                    <TabNavigator
                      currentTab={currentTab}
                      setCurrentTab={setCurrentTab}
                    />
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
