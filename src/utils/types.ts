import { ItemInterface } from "react-sortablejs";
import { JssStyle } from "jss";

export interface IPlayer extends ItemInterface {
  name: string;
  color: string;
}

export interface ITheme {
  name: string;

  background_primary: string;
  background_secondary: string;
  background_tertiary: string;
  background_success: string;
  background_danger: string;
  text_primary: string;
  text_secondary: string;
  text_shadow: string;
  font_family: string;
  font_size: number;
  border: string;

  global: JssStyle;
}

export interface IDataContext {
  theme: ITheme;
  wins: number;
  games: number;
  names: boolean;
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;
  notes: string;
  resetRound: () => void;
  resetAll: () => void;
  setTheme: (value: ITheme) => void;
  setWins: (value: number) => void;
  setGames: (value: number) => void;
  setNames: (value: boolean) => void;
  setInnocentPlayers: (value: Array<IPlayer>) => void;
  setSusPlayers: (value: Array<IPlayer>) => void;
  setEvilPlayers: (value: Array<IPlayer>) => void;
  setDeadPlayers: (value: Array<IPlayer>) => void;
  setUnknownPlayers: (value: Array<IPlayer>) => void;
  setNotes: (value: string) => void;
}

export interface IData {
  theme: string;
  wins: number;
  games: number;
  names: boolean;
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;
  notes: string;
}
