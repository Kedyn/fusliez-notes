import { IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export interface IDataProviderProps {
  children: JSX.Element;
}

export const DataProvider = ({ children }: IDataProviderProps) => {
  const [theme, setTheme] = React.useState<ITheme>(Themes.default);
  const [wins, setWins] = React.useState(0);
  const [games, setGames] = React.useState(0);
  const [names, setNames] = React.useState(true);

  const [innocent_players, setInnocentPlayers] = React.useState<Array<IPlayer>>(
    []
  );
  const [sus_players, setSusPlayers] = React.useState<Array<IPlayer>>([]);
  const [evil_players, setEvilPlayers] = React.useState<Array<IPlayer>>([]);
  const [dead_players, setDeadPlayers] = React.useState<Array<IPlayer>>([]);
  const [unknown_players, setUnknownPlayers] = React.useState<Array<IPlayer>>([
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
  ]);

  const prefers_dark = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    // Get data from local storage and set appropiate stuff
    const local_theme = localStorage.getItem("theme");

    if (local_theme != null) {
      setTheme(Themes[local_theme]);
    } else {
      if (prefers_dark) {
        setTheme(Themes.dark);
      }
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
        setTheme,
        setWins,
        setGames,
        setNames,
        setInnocentPlayers,
        setSusPlayers,
        setEvilPlayers,
        setDeadPlayers,
        setUnknownPlayers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
