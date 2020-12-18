import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import Layout from "./Layout";
import { Provider } from "react-redux";
import React from "react";
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
              <Layout />
            </React.Suspense>
          </ThemeProvider>
        </JssProvider>
      </Provider>
    </>
  );
}
