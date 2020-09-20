import { IData, IDataContext, IPlayer, ITheme } from "utils/types";

import React from "react";
import { Themes } from "themes/themes";
import { useMediaQuery } from "beautiful-react-hooks";

const DataContext = React.createContext<IDataContext | undefined>(undefined);

export const namespace = "fusliez-notes-";

export interface IDataProviderProps {
  children: React.ReactNode;
}

interface Action {
  type: string;
  payload: any;
}

enum ReducerActionTypes {
  RESET_ALL = "RESET_ALL",
  RESET_ROUND = "RESET_ROUND",
  SET_PLAYERS = "SET_PLAYERS",
  SET_THEME = "SET_THEME",
  SET_WINS_AND_GAMES = "SET_WINS_AND_GAMES",
  SET_CREWMATE_WIN = "SET_CREWMATE_WIN",
  SET_CREWMATE_LOSE = "SET_CREWMATE_LOSE",
  SET_IMPOSTOR_WIN = "SET_IMPOSTOR_WIN",
  SET_IMPOSTOR_LOSE = "SET_IMPOSTOR_LOSE",
  SET_NOTES = "SET_NOTES",
}

const useReducer = (state: IData, action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case ReducerActionTypes.RESET_ALL:
      localStorage.setItem(`${namespace}data`, JSON.stringify(initialState));
      return initialState;
    case ReducerActionTypes.RESET_ROUND:
      const currentPlayers = [
        ...state.innocentPlayers,
        ...state.susPlayers,
        ...state.evilPlayers,
        ...state.deadPlayers,
        ...state.unknownPlayers,
      ];

      localStorage.setItem(
        `${namespace}data`,
        JSON.stringify({
          ...state,
          unknownPlayers: currentPlayers,
        })
      );
      return {
        ...state,
        innocentPlayers: [],
        susPlayers: [],
        evilPlayers: [],
        deadPlayers: [],
        unknownPlayers: currentPlayers,
      };
    case ReducerActionTypes.SET_NOTES:
      return {
        ...state,
        notes: payload.value,
      };
    case ReducerActionTypes.SET_PLAYERS:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case ReducerActionTypes.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case ReducerActionTypes.SET_WINS_AND_GAMES:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    default:
      break;
  }
};

const initialState: IData = {
  theme: "default",
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
  unknownPlayers: [],
  unusedPlayers: [
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
const data = JSON.parse(localData);

export const DataProvider = ({ children }: IDataProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(useReducer, initialState);

  console.log(Themes[state.theme]);

  // const {
  //   wins,
  //   games,
  //   crewmateWins,
  //   crewmateGames,
  //   impostorWins,
  //   impostorGames,
  //   names,
  //   innocentPlayers,
  //   susPlayers,
  //   evilPlayers,
  //   deadPlayers,
  //   unknownPlayers,
  //   unusedPlayers,
  //   notes,
  // } = state;

  // console.log(Themes, state.theme);

  // const theme = Themes[state.theme];

  // console.log(theme);

  // const [wins, setLocalWins] = React.useState(
  //   data?.wins ? data.wins : initialState.wins
  // );
  // const [games, setLocalGames] = React.useState(
  //   data?.games ? data.games : initialState.games
  // );
  // const [crewmateWins, setLocalCrewmateWins] = React.useState(
  //   data?.crewmateWins ? data.crewmateWins : initialState.crewmateWins
  // );
  // const [crewmateGames, setLocalCrewmateGames] = React.useState(
  //   data?.crewmateGames ? data.crewmateGames : initialState.crewmateGames
  // );
  // const [impostorWins, setLocalImpostorWins] = React.useState(
  //   data?.impostorWins ? data.impostorWins : initialState.impostorWins
  // );
  // const [impostorGames, setLocalImpostorGames] = React.useState(
  //   data?.impostorGames ? data.impostorGames : initialState.impostorGames
  // );
  // const [names, setLocalNames] = React.useState(
  //   data?.names ? data.names : initialState.names
  // );
  // const [notes, setLocalNotes] = React.useState(
  //   data?.notes ? data.notes : initialState.notes
  // );

  // const [innocentPlayers, setLocalInnocentPlayers] = React.useState<
  //   Array<IPlayer>
  // >(
  //   data?.innocentPlayers.length
  //     ? data.innocentPlayers
  //     : initialState.innocentPlayers
  // );
  // const [susPlayers, setLocalSusPlayers] = React.useState<Array<IPlayer>>(
  //   data?.susPlayers.length ? data.susPlayers : initialState.susPlayers
  // );
  // const [evilPlayers, setLocalEvilPlayers] = React.useState<Array<IPlayer>>(
  //   data?.evilPlayers.length ? data.evilPlayers : initialState.evilPlayers
  // );
  // const [deadPlayers, setLocalDeadPlayers] = React.useState<Array<IPlayer>>(
  //   data?.deadPlayers.length ? data.deadPlayers : initialState.deadPlayers
  // );
  // const [unknownPlayers, setLocalUnknownPlayers] = React.useState<
  //   Array<IPlayer>
  // >(
  //   data?.unknownPlayers.length
  //     ? data.unknownPlayers
  //     : initialState.unknownPlayers
  // );
  // const [unusedPlayers, setLocalUnusedPlayers] = React.useState<Array<IPlayer>>(
  //   data?.unusedPlayers.length ? data.unusedPlayers : initialState.unusedPlayers
  // );

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  function resetRound() {
    dispatch({ type: ReducerActionTypes.RESET_ROUND });
  }

  function resetAll() {
    dispatch({ type: ReducerActionTypes.RESET_ALL });
  }

  // React.useEffect(() => {
  //   if (data && Object.keys(data)?.length) {
  //     if (data.theme) {
  //       const localTheme = Themes[data.theme];

  //       if (localTheme) {
  //         dispatch({ type: ReducerActionTypes.SET_THEME, payload: localTheme});
  //       }
  //     } else {
  //       if (prefersDark) {
  //         dispatch({ type: ReducerActionTypes.SET_THEME, payload:(Themes.dark);
  //       }
  //     }
  //   } else {
  //     if (prefersDark) {
  //       dispatch({ type: ReducerActionTypes.SET_THEME, payload:(Themes.dark);

  //       initialState.theme = "dark";
  //     }

  //     localStorage.setItem(`${namespace}data`, JSON.stringify(initialState));
  //   }
  // }, []);

  function setState(
    key: string,
    value: string | number | boolean | Array<IPlayer> | ITheme
  ) {
    if (localData) {
      const data = JSON.parse(localData);

      switch (key) {
        case "theme":
          data.theme = value.name;
          dispatch({ type: ReducerActionTypes.SET_THEME, payload: value.name });

          break;
        case "crewmateWins":
        case "crewmateGames":
        case "impostorWins":
        case "impostorGames":
          data[key] = value;
          dispatch({
            type: ReducerActionTypes.SET_WINS_AND_GAMES,
            payload: { key, value },
          });

          break;
        case "innocentPlayers":
        case "susPlayers":
        case "evilPlayers":
        case "deadPlayers":
        case "unknownPlayers":
        case "unusedPlayers":
          // console.log(key, value);
          data[key] = value.map(
            ({
              id,
              name,
              color,
            }: {
              id: string;
              name: string;
              color: string;
            }) => {
              return { id, name, color };
            }
          );

          dispatch({
            type: ReducerActionTypes.SET_PLAYERS,
            payload: { key, value: data[key] },
          });

          break;
        case "notes":
          data.notes = value;

          dispatch({ type: ReducerActionTypes.SET_NOTES, payload: value });

          break;
        default:
          break;
      }

      localStorage.setItem(`${namespace}data`, JSON.stringify(data));
    }
  }

  return (
    <DataContext.Provider
      value={{
        ...state,
        theme: Themes[state.theme],
        resetRound,
        resetAll,
        setTheme: (value: ITheme) => {
          setState("theme", value);
        },
        setWinsAndGames: (key: string, value: number) => {
          setState(key, value);
        },
        setPlayers: (key: string, value: Array<IPlayer>) => {
          setState(key, value);
        },
        // setWins: (value: number) => {
        //   const localData = localStorage.getItem(`${namespace}data`);

        //   if (localData) {
        //     const data: IData = JSON.parse(localData);

        //     data.wins = value;

        //     localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //     setLocalWins(value);
        //   }
        // },
        // setGames: (value: number) => {
        //   const localData = localStorage.getItem(`${namespace}data`);

        //   if (localData) {
        //     const data: IData = JSON.parse(localData);

        //     data.games = value;

        //     localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //     setLocalGames(value);
        //   }
        // },
        // setNames: (value: boolean) => {
        //   const localData = localStorage.getItem(`${namespace}data`);

        //   if (localData) {
        //     const data: IData = JSON.parse(localData);

        //     data.names = value;

        //     localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //     setLocalNames(value);
        //   }
        // },
        // setInnocentPlayers: (value: Array<IPlayer>) => {
        //   setState("innocentPlayers", value);
        //   // const localData = localStorage.getItem(`${namespace}data`);

        //   // if (localData) {
        //   //   const data: IData = JSON.parse(localData);

        //   //   data.innocentPlayers = value.map(({ id, name, color }) => {
        //   //     return { id, name, color };
        //   //   });

        //   //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //   //   setLocalInnocentPlayers(value);
        //   // }
        // },
        // setSusPlayers: (value: Array<IPlayer>) => {
        //   setState("susPlayers", value);
        //   // const localData = localStorage.getItem(`${namespace}data`);

        //   // if (localData) {
        //   //   const data: IData = JSON.parse(localData);

        //   //   data.susPlayers = value.map(({ id, name, color }) => {
        //   //     return { id, name, color };
        //   //   });

        //   //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //   //   setLocalSusPlayers(value);
        //   // }
        // },
        // setEvilPlayers: (value: Array<IPlayer>) => {
        //   setState("evilPlayers", value);
        //   // const localData = localStorage.getItem(`${namespace}data`);

        //   // if (localData) {
        //   //   const data: IData = JSON.parse(localData);

        //   //   data.evilPlayers = value.map(({ id, name, color }) => {
        //   //     return { id, name, color };
        //   //   });

        //   //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //   //   setLocalEvilPlayers(value);
        //   // }
        // },
        // setDeadPlayers: (value: Array<IPlayer>) => {
        //   setState("deadPlayers", value);
        //   // const localData = localStorage.getItem(`${namespace}data`);

        //   // if (localData) {
        //   //   const data: IData = JSON.parse(localData);

        //   //   data.deadPlayers = value.map(({ id, name, color }) => {
        //   //     return { id, name, color };
        //   //   });

        //   //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //   //   setLocalDeadPlayers(value);
        //   // }
        // },
        // setUnknownPlayers: (value: Array<IPlayer>) => {
        //   setState("unknownPlayers", value);
        //   // const localData = localStorage.getItem(`${namespace}data`);

        //   // if (localData) {
        //   //   const data: IData = JSON.parse(localData);

        //   //   data.unknownPlayers = value.map(({ id, name, color }) => {
        //   //     return { id, name, color };
        //   //   });

        //   //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

        //   //   setLocalUnknownPlayers(value);
        //   // }
        // },
        // setUnusedPlayers: (value: Array<IPlayer>)
        setNotes: (value: string) => {
          // const localData = localStorage.getItem(`${namespace}data`);

          // if (localData) {
          //   const data: IData = JSON.parse(localData);

          //   data.notes = value;

          //   localStorage.setItem(`${namespace}data`, JSON.stringify(data));

          //   setLocalNotes(value);
          // }
          setState("notes", value);
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): IDataContext | undefined =>
  React.useContext(DataContext);
