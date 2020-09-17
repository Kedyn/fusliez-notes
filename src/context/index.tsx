import { IData, IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export const namespace = "fusliez-notes-";

export interface IDataProviderProps {
  children: React.ReactNode;
}

const initialData: IData = {
  theme: "dark",
  wins: 0,
  games: 0,
  names: true,
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
    { id: "blue", name: "", color: "blue" },
    { id: "brown", name: "", color: "brown" },
    { id: "gray", name: "", color: "gray" },
    { id: "green", name: "", color: "green" },
    { id: "lightGreen", name: "", color: "lightGreen" },
    { id: "orange", name: "fuslie", color: "orange" },
    { id: "pink", name: "", color: "pink" },
    { id: "purple", name: "", color: "purple" },
    { id: "red", name: "", color: "red" },
    { id: "teal", name: "", color: "teal" },
    { id: "white", name: "", color: "white" },
    { id: "yellow", name: "", color: "yellow" },
  ],
  notes: "",
};

export const DataProvider = ({ children }: IDataProviderProps): JSX.Element => {
  const [theme, setLocalTheme] = React.useState<ITheme>(Themes.default);
  const [wins, setLocalWins] = React.useState(0);
  const [games, setLocalGames] = React.useState(0);
  const [names, setLocalNames] = React.useState(true);
  const [notes, setLocalNotes] = React.useState("");

  const [innocentPlayers, setLocalInnocentPlayers] = React.useState<
    Array<IPlayer>
  >(initialData.innocentPlayers);
  const [susPlayers, setLocalSusPlayers] = React.useState<Array<IPlayer>>(
    initialData.susPlayers
  );
  const [evilPlayers, setLocalEvilPlayers] = React.useState<Array<IPlayer>>(
    initialData.evilPlayers
  );
  const [deadPlayers, setLocalDeadPlayers] = React.useState<Array<IPlayer>>(
    initialData.deadPlayers
  );
  const [unknownPlayers, setLocalUnknownPlayers] = React.useState<
    Array<IPlayer>
  >(initialData.unknownPlayers);

  const prefers_dark = useMediaQuery("(prefers-color-scheme: dark)");

  function resetRound() {
    const currentPlayers = [
      ...unknownPlayers,
      ...innocentPlayers,
      ...susPlayers,
      ...evilPlayers,
      ...deadPlayers,
    ];

    setLocalUnknownPlayers(currentPlayers);
    setLocalInnocentPlayers([]);
    setLocalSusPlayers([]);
    setLocalEvilPlayers([]);
    setLocalDeadPlayers([]);

    localStorage.setItem(
      `${namespace}data`,
      JSON.stringify({
        ...initialData,
        unknownPlayers: currentPlayers,
      })
    );
  }

  function resetAll() {
    setLocalWins(0);
    setLocalGames(0);
    setLocalTheme(Themes.dark);
    setLocalNames(true);
    setLocalNotes("");
    setLocalUnknownPlayers(initialData.unknownPlayers);
    setLocalInnocentPlayers([]);
    setLocalSusPlayers([]);
    setLocalEvilPlayers([]);
    setLocalDeadPlayers([]);

    localStorage.setItem(`${namespace}data`, JSON.stringify(initialData));
  }

  React.useEffect(() => {
    const local_data = localStorage.getItem(`${namespace}data`);

    if (local_data != null) {
      const data: IData = JSON.parse(local_data);

      if (data.theme) {
        const local_theme = Themes[data.theme];

        if (local_theme) {
          setLocalTheme(local_theme);
        }
      } else {
        if (prefers_dark) {
          setLocalTheme(Themes.dark);
        }
      }

      if (data.wins) {
        setLocalWins(data.wins);
      }

      if (data.games) {
        setLocalGames(data.games);
      }

      if (data.names) {
        setLocalNames(data.names);
      }

      if (data.innocentPlayers) {
        setLocalInnocentPlayers([...data.innocentPlayers]);
      }

      if (data.susPlayers) {
        setLocalSusPlayers([...data.susPlayers]);
      }

      if (data.evilPlayers) {
        setLocalEvilPlayers([...data.evilPlayers]);
      }

      if (data.deadPlayers) {
        setLocalDeadPlayers([...data.deadPlayers]);
      }

      if (data.unknownPlayers) {
        setLocalUnknownPlayers([...data.unknownPlayers]);
      }

      if (data.notes) {
        setLocalNotes(data.notes);
      }
    } else {
      if (prefers_dark) {
        setLocalTheme(Themes.dark);

        initialData.theme = "dark";
      }

      localStorage.setItem(`${namespace}data`, JSON.stringify(initialData));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        theme,
        wins,
        games,
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
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.theme = value.name;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalTheme(value);
          }
        },
        setWins: (value: number) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.wins = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalWins(value);
          }
        },
        setGames: (value: number) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.games = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalGames(value);
          }
        },
        setNames: (value: boolean) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.names = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalNames(value);
          }
        },
        setInnocentPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.innocentPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalInnocentPlayers(value);
          }
        },
        setSusPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.susPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalSusPlayers(value);
          }
        },
        setEvilPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.evilPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalEvilPlayers(value);
          }
        },
        setDeadPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.deadPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalDeadPlayers(value);
          }
        },
        setUnknownPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.unknownPlayers = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalUnknownPlayers(value);
          }
        },
        setNotes: (value: string) => {
          const local_data = localStorage.getItem(`${namespace}data`);

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

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
