import { IData, IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export const namespace = "fusliez-notes-";

export interface IDataProviderProps {
  children: React.ReactNode;
}

enum ReducerActionTypes {
  RESET_ALL,
  RESET_ROUND,
}

const createReducer = (state, action) => {
  switch (action.type) {
    case ReducerActionTypes.RESET_ALL:
      return initialState;
    default:
      break;
  }
};

const initialState: IData = {
  theme: "dark",
  wins: 0,
  games: 0,
  crewmateWins: 0,
  crewmateGames: 0,
  impostorWins: 0,
  impostorGames: 0,
  names: true,
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
    { id: "orange", name: "fuslie", color: "orange" },
    { id: "blue", name: "", color: "blue" },
    { id: "brown", name: "", color: "brown" },
    { id: "gray", name: "", color: "gray" },
    { id: "green", name: "", color: "green" },
    { id: "lightGreen", name: "", color: "lightGreen" },
    { id: "pink", name: "", color: "pink" },
    { id: "purple", name: "", color: "purple" },
    { id: "red", name: "", color: "red" },
    { id: "teal", name: "", color: "teal" },
    { id: "white", name: "", color: "white" },
    { id: "yellow", name: "", color: "yellow" },
  ],
  unusedPlayers: [],
  notes: "",
};

const localData = localStorage.getItem(`${namespace}data`);
const data = JSON.parse(localData);

export const DataProvider = ({ children }: IDataProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(createReducer, initialState);
  const [theme, setLocalTheme] = React.useState<ITheme>(Themes.default);
  const [wins, setLocalWins] = React.useState(
    data?.wins ? data.wins : initialState.wins
  );
  const [games, setLocalGames] = React.useState(
    data?.games ? data.games : initialState.games
  );
  const [crewmateWins, setLocalCrewmateWins] = React.useState(
    data?.crewmateWins ? data.crewmateWins : initialState.crewmateWins
  );
  const [crewmateGames, setLocalCrewmateGames] = React.useState(
    data?.crewmateGames ? data.crewmateGames : initialState.crewmateGames
  );
  const [impostorWins, setLocalImpostorWins] = React.useState(
    data?.impostorWins ? data.impostorWins : initialState.impostorWins
  );
  const [impostorGames, setLocalImpostorGames] = React.useState(
    data?.impostorGames ? data.impostorGames : initialState.impostorGames
  );
  const [names, setLocalNames] = React.useState(
    data?.names ? data.names : initialState.names
  );
  const [notes, setLocalNotes] = React.useState(
    data?.notes ? data.notes : initialState.notes
  );

  const [innocentPlayers, setLocalInnocentPlayers] = React.useState<
    Array<IPlayer>
  >(
    data?.innocentPlayers.length
      ? data.innocentPlayers
      : initialState.innocentPlayers
  );
  const [susPlayers, setLocalSusPlayers] = React.useState<Array<IPlayer>>(
    data?.susPlayers.length ? data.susPlayers : initialState.susPlayers
  );
  const [evilPlayers, setLocalEvilPlayers] = React.useState<Array<IPlayer>>(
    data?.evilPlayers.length ? data.evilPlayers : initialState.evilPlayers
  );
  const [deadPlayers, setLocalDeadPlayers] = React.useState<Array<IPlayer>>(
    data?.deadPlayers.length ? data.deadPlayers : initialState.deadPlayers
  );
  const [unknownPlayers, setLocalUnknownPlayers] = React.useState<
    Array<IPlayer>
  >(
    data?.unknownPlayers.length
      ? data.unknownPlayers
      : initialState.unknownPlayers
  );

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  function resetRound() {
    const currentPlayers = [
      ...innocentPlayers,
      ...susPlayers,
      ...evilPlayers,
      ...deadPlayers,
      ...unknownPlayers,
    ];

    setLocalUnknownPlayers(currentPlayers);
    setLocalInnocentPlayers([]);
    setLocalSusPlayers([]);
    setLocalEvilPlayers([]);
    setLocalDeadPlayers([]);
    setLocalNotes("");

    localStorage.setItem(
      `${namespace}data`,
      JSON.stringify({
        ...initialState,
        unknownPlayers: currentPlayers,
      })
    );
  }

  function resetAll() {
    setLocalWins(0);
    setLocalGames(0);
    setLocalCrewmateWins(0);
    setLocalCrewmateGames(0);
    setLocalImpostorWins(0);
    setLocalImpostorGames(0);
    setLocalTheme(Themes.dark);
    setLocalNames(true);
    setLocalNotes("");
    setLocalUnknownPlayers(initialState.unknownPlayers);
    setLocalInnocentPlayers([]);
    setLocalSusPlayers([]);
    setLocalEvilPlayers([]);
    setLocalDeadPlayers([]);

    localStorage.setItem(`${namespace}data`, JSON.stringify(initialState));
  }

  React.useEffect(() => {
    if (data && Object.keys(data)?.length) {
      if (data.theme) {
        const localTheme = Themes[data.theme];

        if (localTheme) {
          setLocalTheme(localTheme);
        }
      } else {
        if (prefersDark) {
          setLocalTheme(Themes.dark);
        }
      }
    } else {
      if (prefersDark) {
        setLocalTheme(Themes.dark);

        initialState.theme = "dark";
      }

      localStorage.setItem(`${namespace}data`, JSON.stringify(initialState));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        theme,
        wins,
        games,
        crewmateWins,
        crewmateGames,
        impostorWins,
        impostorGames,
        names,
        innocentPlayers,
        susPlayers,
        evilPlayers,
        deadPlayers,
        unknownPlayers,
        notes,
        resetRound,
        resetAll,
        setTheme: (value: ITheme) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.theme = value.name;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalTheme(value);
          }
        },
        setWins: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.wins = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalWins(value);
          }
        },
        setGames: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.games = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalGames(value);
          }
        },
        setNames: (value: boolean) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.names = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalNames(value);
          }
        },
        setInnocentPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.innocentPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalInnocentPlayers(value);
          }
        },
        setSusPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.susPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalSusPlayers(value);
          }
        },
        setEvilPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.evilPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalEvilPlayers(value);
          }
        },
        setDeadPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.deadPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalDeadPlayers(value);
          }
        },
        setUnknownPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.unknownPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalUnknownPlayers(value);
          }
        },
        setNotes: (value: string) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.notes = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalNotes(value);
          }
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): IDataContext | undefined =>
  React.useContext(DataContext);
