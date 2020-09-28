import { ItemInterface } from "react-sortablejs";
import { JssStyle } from "jss";

export interface IPlayer extends ItemInterface {
  name: string;
  color: string;
}

export interface ITheme {
  name: string;

  backgroundColor: string;
  textColor: string;

  inputBackgroundColor: string;
  inputTextColor: string;

  neutralBackgroundColor: string;
  neutralTextColor: string;

  innocentBackgroundColor: string;
  innocentTextColor: string;

  impostorBackgroundColor: string;
  impostorTextColor: string;

  buttonBackgroundColor: string;
  buttonTextColor: string;

  buttonDangerBackgroundColor: string;
  buttonDangerTextColor: string;

  fontFamily: string;
  fontSize: number;

  borderColor: string;

  linkColor: string;

  oneColumn: string;
  twoColumn: string;

  global: JssStyle;
}

export interface IDataContext {
  version: string;
  theme: ITheme;
  innocentWins: number;
  innocentLosses: number;
  impostorWins: number;
  impostorLosses: number;
  names: boolean;
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;
  notes: string;
  resetPlayersPositions: () => void;
  resetGames: () => void;
  resetAll: () => void;
  setTheme: (value: ITheme) => void;
  setInnocentWins: (value: number) => void;
  setInnocentLosses: (value: number) => void;
  setImpostorWins: (value: number) => void;
  setImpostorLosses: (value: number) => void;
  setNames: (value: boolean) => void;
  setInnocentPlayers: (value: Array<IPlayer>) => void;
  setSusPlayers: (value: Array<IPlayer>) => void;
  setEvilPlayers: (value: Array<IPlayer>) => void;
  setDeadPlayers: (value: Array<IPlayer>) => void;
  setUnknownPlayers: (value: Array<IPlayer>) => void;
  setNotes: (value: string) => void;
}

export interface IData {
  version: string;
  theme: string;
  innocentWins: number;
  innocentLosses: number;
  impostorWins: number;
  impostorLosses: number;
  names: boolean;
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;
  notes: string;
}
