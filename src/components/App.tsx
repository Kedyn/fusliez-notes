import { JssProvider, ThemeProvider } from "react-jss";

import MainContent from "./MainContent";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import { useData } from "context";

export interface IAppProps {}

export default function App(props: IAppProps): JSX.Element {
  const { theme } = useData()!;

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback="loading">
            <main>
              <div id="main">
                <MainContent />
              </div>
              <div id="controls"></div>
              <div id="maps"></div>
            </main>
            <footer>
              Made with &#10084; by the{" "}
              <a href="https://github.com/Kedyn/fusliez-notes#authors">
                fuslie fam
              </a>
              .
            </footer>
          </React.Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
