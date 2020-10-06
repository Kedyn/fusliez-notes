import { DEFAULT_SETTINGS, NAMESPACE } from "utils/constants";
import { ISettings, ISettingsContext } from "utils/types";

import React from "react";

const SettingsContext: React.Context<
  ISettingsContext | undefined
> = React.createContext<ISettingsContext | undefined>(undefined);

const namespace = `${NAMESPACE}settings`;

const localSettingsData: string | null = localStorage.getItem(namespace);
const settingsData: ISettings = localSettingsData
  ? JSON.parse(localSettingsData)
  : DEFAULT_SETTINGS;

export interface ISettingsContextProviderProps {
  children?: React.ReactNode;
}

export default function SettingsContextProvider(
  props: ISettingsContextProviderProps
): JSX.Element {
  const [names, setNames] = React.useState<boolean>(settingsData.names);

  React.useEffect(() => {
    localStorage.setItem(namespace, JSON.stringify({ names }));
  }, [names]);

  return (
    <SettingsContext.Provider
      value={{
        names,

        setNames,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export const useSettings = (): ISettingsContext | undefined =>
  React.useContext(SettingsContext);
