import { IData, IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export interface IDataProviderProps {
  children: React.ReactNode;
}

function playerLists(): {
  innocent_players: Array<IPlayer>;
  sus_players: Array<IPlayer>;
  evil_players: Array<IPlayer>;
  dead_players: Array<IPlayer>;
  unknown_players: Array<IPlayer>;
} {
  const local_data = localStorage.getItem("data");

  if (local_data != null) {
    const data: IData = JSON.parse(local_data);

    return {
      innocent_players: data.innocent_players,
      sus_players: data.sus_players,
      evil_players: data.evil_players,
      dead_players: data.dead_players,
      unknown_players: data.unknown_players,
    };
  } else {
    return {
      innocent_players: [],
      sus_players: [],
      evil_players: [],
      dead_players: [],
      unknown_players: [
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
    };
  }
}

export const DataProvider = ({ children }: IDataProviderProps): JSX.Element => {
  const players = playerLists();
  const [theme, setLocalTheme] = React.useState<ITheme>(Themes.default);
  const [wins, setLocalWins] = React.useState(0);
  const [games, setLocalGames] = React.useState(0);
  const [names, setLocalNames] = React.useState(true);

  const [innocent_players, setLocalInnocentPlayers] = React.useState<
    Array<IPlayer>
  >(players.innocent_players);
  const [sus_players, setLocalSusPlayers] = React.useState<Array<IPlayer>>(
    players.sus_players
  );
  const [evil_players, setLocalEvilPlayers] = React.useState<Array<IPlayer>>(
    players.evil_players
  );
  const [dead_players, setLocalDeadPlayers] = React.useState<Array<IPlayer>>(
    players.dead_players
  );
  const [unknown_players, setLocalUnknownPlayers] = React.useState<
    Array<IPlayer>
  >(players.unknown_players);

  const [notes, setLocalNotes] = React.useState("");

  const prefers_dark = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    const local_data = localStorage.getItem("data");

    if (local_data != null) {
      const data: IData = JSON.parse(local_data);

      if (data.theme != undefined) {
        const local_theme = Themes[data.theme];

        if (local_theme != undefined) {
          setLocalTheme(local_theme);
        }
      } else {
        if (prefers_dark) {
          setLocalTheme(Themes.dark);
        }
      }

      if (data.wins != undefined) {
        setLocalWins(data.wins);
      }

      if (data.games != undefined) {
        setLocalGames(data.games);
      }

      if (data.names != undefined) {
        setLocalNames(data.names);
      }

      if (data.innocent_players != undefined) {
        setLocalInnocentPlayers([...data.innocent_players]);
      }

      if (data.sus_players != undefined) {
        setLocalSusPlayers([...data.sus_players]);
      }

      if (data.evil_players != undefined) {
        setLocalEvilPlayers([...data.evil_players]);
      }

      if (data.dead_players != undefined) {
        setLocalDeadPlayers([...data.dead_players]);
      }

      if (data.unknown_players != undefined) {
        setLocalUnknownPlayers([...data.unknown_players]);
      }

      if (data.notes != undefined) {
        setLocalNotes(data.notes);
      }
    } else {
      const data: IData = {
        theme: "default",
        wins: 0,
        games: 0,
        names: true,
        innocent_players: [],
        sus_players: [],
        evil_players: [],
        dead_players: [],
        unknown_players: [
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

      if (prefers_dark) {
        setLocalTheme(Themes.dark);

        data.theme = "dark";
      }

      localStorage.setItem("data", JSON.stringify(data));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        theme,
        wins,
        games,
        names,
        innocent_players,
        sus_players,
        evil_players,
        dead_players,
        unknown_players,
        notes,
        setTheme: (value: ITheme) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.theme = value.name;

            localStorage.setItem("data", JSON.stringify(data));

            setLocalTheme(value);
          }
        },
        setWins: (value: number) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.wins = value;

            localStorage.setItem("data", JSON.stringify(data));

            setLocalWins(value);
          }
        },
        setGames: (value: number) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.games = value;

            localStorage.setItem("data", JSON.stringify(data));

            setLocalGames(value);
          }
        },
        setNames: (value: boolean) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.names = value;

            localStorage.setItem("data", JSON.stringify(data));

            setLocalNames(value);
          }
        },
        setInnocentPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.innocent_players = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem("data", JSON.stringify(data));

            setLocalInnocentPlayers(value);
          }
        },
        setSusPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.sus_players = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem("data", JSON.stringify(data));

            setLocalSusPlayers(value);
          }
        },
        setEvilPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.evil_players = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem("data", JSON.stringify(data));

            setLocalEvilPlayers(value);
          }
        },
        setDeadPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.dead_players = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem("data", JSON.stringify(data));

            setLocalDeadPlayers(value);
          }
        },
        setUnknownPlayers: (value: Array<IPlayer>) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.unknown_players = value.map(({ id, name, color }) => {
              return { id, name, color };
            });

            localStorage.setItem("data", JSON.stringify(data));

            setLocalUnknownPlayers(value);
          }
        },
        setNotes: (value: string) => {
          const local_data = localStorage.getItem("data");

          if (local_data != null) {
            const data: IData = JSON.parse(local_data);

            data.notes = value;

            localStorage.setItem("data", JSON.stringify(data));

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
