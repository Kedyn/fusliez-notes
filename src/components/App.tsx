import { JssProvider, ThemeProvider } from "react-jss";

import { ITheme } from "utils/types";
import MainContent from "./MainContent";
import React from "react";
import { Themes } from "themes/themes";
import jssSetUp from "utils/jssSetUp";
import { useMediaQuery } from "beautiful-react-hooks";

export interface IAppProps {}

export default function App(props: IAppProps): JSX.Element {
  const prefers_dark = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = React.useState<ITheme>(
    localStorage.getItem("theme") === "light"
      ? Themes.light
      : prefers_dark
      ? Themes.dark
      : Themes.light
  );

  const changeTheme = (): void => {
    localStorage.setItem("theme", theme === Themes.dark ? "light" : "dark");

    setTheme(theme === Themes.dark ? Themes.light : Themes.dark);
  };

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
