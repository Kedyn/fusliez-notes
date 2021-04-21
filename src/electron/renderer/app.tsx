import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import ElectronLayout from "components/ElectronLayout";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import jssSetUp from "utils/jssSetUp";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";

export default function App(): JSX.Element {
  registerFaIcons();

  return (
    <>
      <Provider store={store}>
        <JssProvider registry={jssSetUp()}>
          <ThemeProvider theme={DEFAULT_THEME_DATA}>
            <React.Suspense fallback="Loading...">
              <ElectronLayout />
            </React.Suspense>
          </ThemeProvider>
        </JssProvider>
      </Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("load", setVh);
window.addEventListener("resize", setVh);
