import { IData, IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export const namespace = "fusliez-notes-";

export interface IDataProviderProps {
  children: React.ReactNode;
}

const INITIAL_DATA: IData = {
  theme: "dark",
  innocentWins: 0,
  innocentLosses: 0,
  impostorWins: 0,
  impostorLosses: 0,
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
  notes: "",
};

const localData = localStorage.getItem(`${namespace}data`);
const data = localData ? JSON.parse(localData) : INITIAL_DATA;

export function DataProvider({ children }: IDataProviderProps): JSX.Element {
  const [theme, setLocalTheme] = React.useState<ITheme>(Themes.default);
  const [innocentWins, setLocalInnocentWins] = React.useState(
    data.innocentWins
  );
  const [innocentLosses, setLocalInnocentLosses] = React.useState(
    data.innocentLosses
  );
  const [impostorWins, setLocalImpostorWins] = React.useState(
    data.impostorWins
  );
  const [impostorLosses, setLocalImpostorLosses] = React.useState(
    data.impostorLosses
  );
  const [names, setLocalNames] = React.useState(data.names);
  const [notes, setLocalNotes] = React.useState(data.notes);

  const [innocentPlayers, setLocalInnocentPlayers] = React.useState<
    Array<IPlayer>
  >(data.innocentPlayers);
  const [susPlayers, setLocalSusPlayers] = React.useState<Array<IPlayer>>(
    data.susPlayers
  );
  const [evilPlayers, setLocalEvilPlayers] = React.useState<Array<IPlayer>>(
    data.evilPlayers
  );
  const [deadPlayers, setLocalDeadPlayers] = React.useState<Array<IPlayer>>(
    data.deadPlayers
  );
  const [unknownPlayers, setLocalUnknownPlayers] = React.useState<
    Array<IPlayer>
  >(data.unknownPlayers);

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const resetPlayersPositions = () => {
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
        ...INITIAL_DATA,
        unknownPlayers: currentPlayers,
      })
    );
  };

  const resetGames = () => {
    setLocalInnocentWins(0);
    setLocalInnocentLosses(0);
    setLocalImpostorWins(0);
    setLocalImpostorLosses(0);
  };

  const resetAll = () => {
    resetGames();
    setLocalTheme(Themes.dark);
    setLocalNames(true);
    setLocalNotes("");
    setLocalUnknownPlayers(INITIAL_DATA.unknownPlayers);
    setLocalInnocentPlayers([]);
    setLocalSusPlayers([]);
    setLocalEvilPlayers([]);
    setLocalDeadPlayers([]);

    localStorage.setItem(`${namespace}data`, JSON.stringify(INITIAL_DATA));
  };

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

        INITIAL_DATA.theme = "dark";
      }

      localStorage.setItem(`${namespace}data`, JSON.stringify(INITIAL_DATA));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        theme,
        innocentWins,
        innocentLosses,
        impostorWins,
        impostorLosses,
        names,
        innocentPlayers,
        susPlayers,
        evilPlayers,
        deadPlayers,
        unknownPlayers,
        notes,
        resetPlayersPositions,
        resetGames,
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
        setInnocentWins: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.innocentWins = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalInnocentWins(value);
          }
        },
        setInnocentLosses: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.innocentLosses = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalInnocentLosses(value);
          }
        },
        setImpostorWins: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.impostorWins = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalImpostorWins(value);
          }
        },
        setImpostorLosses: (value: number) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.impostorLosses = value;

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalImpostorLosses(value);
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

            data.innocentPlayers = value.map(({ id, name, color }) => ({
              id,
              name,
              color,
            }));

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalInnocentPlayers(value);
          }
        },
        setSusPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.susPlayers = value.map(({ id, name, color }) => ({
              id,
              name,
              color,
            }));

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalSusPlayers(value);
          }
        },
        setEvilPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.evilPlayers = value.map(({ id, name, color }) => ({
              id,
              name,
              color,
            }));

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalEvilPlayers(value);
          }
        },
        setDeadPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.deadPlayers = value.map(({ id, name, color }) => ({
              id,
              name,
              color,
            }));

            localStorage.setItem(`${namespace}data`, JSON.stringify(data));

            setLocalDeadPlayers(value);
          }
        },
        setUnknownPlayers: (value: Array<IPlayer>) => {
          const localData = localStorage.getItem(`${namespace}data`);

          if (localData) {
            const data: IData = JSON.parse(localData);

            data.unknownPlayers = value.map(({ id, name, color }) => ({
              id,
              name,
              color,
            }));

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
}

export const useData = (): IDataContext | undefined =>
  React.useContext(DataContext);
