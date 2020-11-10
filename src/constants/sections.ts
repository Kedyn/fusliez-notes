import { IPlayer, IPlayersSection } from "utils/types";

export const DEFAULT_PLAYERS: Array<IPlayer> = [
  { id: "Brown", playerName: "", color: "brown" },
  { id: "Red", playerName: "", color: "red" },
  { id: "Orange", playerName: "", color: "orange" },
  { id: "Yellow", playerName: "", color: "yellow" },
  { id: "Lime", playerName: "", color: "lime" },
  { id: "Green", playerName: "", color: "green" },
  { id: "Cyan", playerName: "", color: "cyan" },
  { id: "Blue", playerName: "", color: "blue" },
  { id: "Purple", playerName: "", color: "purple" },
  { id: "Pink", playerName: "", color: "pink" },
  { id: "White", playerName: "", color: "white" },
  { id: "Black", playerName: "", color: "black" },
];

export const DEFAULT_SECTIONS: Array<IPlayersSection> = [
  { id: 0, title: "main.lists.innocent", players: [] },
  { id: 1, title: "main.lists.suspicious", players: [] },
  {
    id: 2,
    title: "main.lists.evilHitList",
    players: [],
  },
  { id: 3, title: "main.lists.dead", players: [] },
  { id: 4, title: "main.lists.unknown", players: DEFAULT_PLAYERS },
  { id: 5, title: "main.lists.unused", players: [] },
];

export const DEFAULT_SECTION = 4;
