import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "utils/constants";
import MobileContextProvider from "./MobileContextProvider";
import PlayersContextProvider from "./PlayersContextProvider";
import LockingContextProvider from "./LockingContextProvider";
import React from "react";
import ScoresContextProvider from "./ScoresContextProvider";
import SettingsContextProvider from "./SettingsContextProvider";
import jssSetUp from "utils/jssSetUp";

export interface IContextWrapperProps {
  children?: React.ReactNode;
}

export default function ContextWrapper(
  props: IContextWrapperProps
): JSX.Element {
  return (
    <SettingsContextProvider>
      <JssProvider registry={jssSetUp(DEFAULT_THEME_DATA)}>
        <ThemeProvider theme={DEFAULT_THEME_DATA}>
          <MobileContextProvider>
            <ScoresContextProvider>
              <LockingContextProvider>
                <PlayersContextProvider>
                  {props.children}
                </PlayersContextProvider>
              </LockingContextProvider>
            </ScoresContextProvider>
          </MobileContextProvider>
        </ThemeProvider>
      </JssProvider>
    </SettingsContextProvider>
  );
}
