import { ILockingContextProvider } from "utils/types";

import React from "react";

const LockingContext: React.Context<
  ILockingContextProvider | undefined
> = React.createContext<ILockingContextProvider | undefined>(undefined);

export interface ILockingContextProviderProps {
  children?: React.ReactNode;
}

export default function LockingContextProvider(
  props: ILockingContextProviderProps
): JSX.Element {
  const [isLocked, setLock] = React.useState<boolean>(false);

  const resetLock = () => {
    setLock(false);
  };

  const toggleLock = () => {
    setLock(!isLocked);
  };

  return (
    <LockingContext.Provider
      value={{
        isLocked,
        toggleLock,
        resetLock,
      }}
    >
      {props.children}
    </LockingContext.Provider>
  );
}

export const useLocking = (): ILockingContextProvider | undefined =>
  React.useContext(LockingContext);
