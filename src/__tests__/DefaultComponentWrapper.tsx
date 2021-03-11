import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import store from "store";

export default function DefaultComponentWrapper({
  children,
  testStore,
}: {
  children: JSX.Element;
  testStore: typeof store;
}): JSX.Element {
  return (
    <React.Suspense fallback="loading...">
      <I18nextProvider i18n={i18n}>
        <JssProvider registry={jssSetUp()}>
          <ThemeProvider theme={DEFAULT_THEME_DATA}>
            <Provider store={testStore}>{children}</Provider>
          </ThemeProvider>
        </JssProvider>
      </I18nextProvider>
    </React.Suspense>
  );
}
