import MobileContextProvider from "./MobileContextProvider";
import PlayersContextProvider from "./PlayersContextProvider";
import React from "react";
import ScoresContextProvider from "./ScoresContextProvider";
import SettingsContextProvider from "./SettingsContextProvider";
import ThemeContextProvider from "./ThemeContextProvider";

export interface IContextWrapperProps {
  children?: React.ReactNode;
}

export default function ContextWrapper(
  props: IContextWrapperProps
): JSX.Element {
  return (
    <SettingsContextProvider>
      <ThemeContextProvider>
        <MobileContextProvider>
          <ScoresContextProvider>
            <PlayersContextProvider>{props.children}</PlayersContextProvider>
          </ScoresContextProvider>
        </MobileContextProvider>
      </ThemeContextProvider>
    </SettingsContextProvider>
  );
}
