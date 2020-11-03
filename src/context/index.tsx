import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import { Provider } from "react-redux";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import store from "store";

export interface IContextWrapperProps {
  children?: React.ReactNode;
}

export default function ContextWrapper(
  props: IContextWrapperProps
): JSX.Element {
  return (
    <Provider store={store}>
      <JssProvider registry={jssSetUp()}>
        <ThemeProvider theme={DEFAULT_THEME_DATA}>
          {props.children}
        </ThemeProvider>
      </JssProvider>
    </Provider>
  );
}
