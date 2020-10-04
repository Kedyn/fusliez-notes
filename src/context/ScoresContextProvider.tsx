import { IScoresContext } from "utils/types";
import React from "react";

const ScoresContext: React.Context<
  IScoresContext | undefined
> = React.createContext<IScoresContext | undefined>(undefined);

export interface ISettingsContextProps {
  children?: React.ReactNode;
}

export default function ScoresContextProvider(
  props: ISettingsContextProps
): JSX.Element {
  const [innocentWins, setInnocentWins] = React.useState<number>(0);
  const [innocentLosses, setInnocentLosses] = React.useState<number>(0);
  const [impostorWins, setImpostorWins] = React.useState<number>(0);
  const [impostorLosses, setImpostorLosses] = React.useState<number>(0);

  const resetScores = () => {
    setInnocentWins(0);
    setInnocentLosses(0);
    setImpostorWins(0);
    setImpostorLosses(0);
  };

  return (
    <ScoresContext.Provider
      value={{
        innocentWins,
        innocentLosses,
        impostorWins,
        impostorLosses,

        setInnocentWins,
        setInnocentLosses,
        setImpostorWins,
        setImpostorLosses,

        resetScores,
      }}
    >
      {props.children}
    </ScoresContext.Provider>
  );
}

export const useScores = (): IScoresContext | undefined =>
  React.useContext<IScoresContext | undefined>(ScoresContext);
