import { IPlayer, IPlayersContext } from "utils/types";

import { DEFAULT_PLAYERS } from "utils/constants";
import React from "react";

const PlayersContext: React.Context<
  IPlayersContext | undefined
> = React.createContext<IPlayersContext | undefined>(undefined);

export interface IPlayersContextProviderProps {
  children?: React.ReactNode;
}

export default function PlayersContextProvider(
  props: IPlayersContextProviderProps
): JSX.Element {
  const [innocentPlayers, setInnocentPlayers] = React.useState<Array<IPlayer>>([
    ...DEFAULT_PLAYERS.innocentPlayers,
  ]);
  const [susPlayers, setSusPlayers] = React.useState<Array<IPlayer>>([
    ...DEFAULT_PLAYERS.susPlayers,
  ]);
  const [evilPlayers, setEvilPlayers] = React.useState<Array<IPlayer>>([
    ...DEFAULT_PLAYERS.evilPlayers,
  ]);
  const [deadPlayers, setDeadPlayers] = React.useState<Array<IPlayer>>([
    ...DEFAULT_PLAYERS.deadPlayers,
  ]);
  const [unknownPlayers, setUnknownPlayers] = React.useState<Array<IPlayer>>([
    ...DEFAULT_PLAYERS.unknownPlayers,
  ]);

  const resetPlayersPositions = () => {
    setUnknownPlayers([
      ...innocentPlayers,
      ...susPlayers,
      ...evilPlayers,
      ...deadPlayers,
      ...unknownPlayers,
    ]);
    setInnocentPlayers([]);
    setSusPlayers([]);
    setEvilPlayers([]);
    setDeadPlayers([]);
  };

  const resetPlayers = () => {
    setUnknownPlayers(
      DEFAULT_PLAYERS.unknownPlayers.map((player) => ({ ...player }))
    );

    setInnocentPlayers([]);
    setSusPlayers([]);
    setEvilPlayers([]);
    setDeadPlayers([]);
  };

  return (
    <PlayersContext.Provider
      value={{
        innocentPlayers,
        susPlayers,
        evilPlayers,
        deadPlayers,
        unknownPlayers,

        setInnocentPlayers,
        setSusPlayers,
        setEvilPlayers,
        setDeadPlayers,
        setUnknownPlayers,

        resetPlayersPositions,
        resetPlayers,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
}

export const usePlayers = (): IPlayersContext | undefined =>
  React.useContext(PlayersContext);
