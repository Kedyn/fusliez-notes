import { ISection } from "utils/types/sections";
import { ItemInterface } from "react-sortablejs";

export const DEFAULT_RESET_SECTION = 4;
export const DEFAULT_DEAD_SECTION = 3;
export const DEFAULT_UNUSED_SECTION = 5;

export const DEFAULT_RESET_SECTION_PLAYERS: Array<ItemInterface> = [
  { id: "Brown" },
  { id: "Red" },
  { id: "Orange" },
  { id: "Yellow" },
  { id: "Lime" },
  { id: "Green" },
  { id: "Cyan" },
  { id: "Blue" },
  { id: "Purple" },
  { id: "Pink" },
  { id: "White" },
  { id: "Black" },
];

export const DEFAULT_SECTIONS: Array<ISection> = [
  { id: 0, title: "main.lists.innocent", players: [] },
  { id: 1, title: "main.lists.suspicious", players: [] },
  {
    id: 2,
    title: "main.lists.evilHitList",
    players: [],
  },
  { id: 3, title: "main.lists.dead", players: [] },
  {
    id: 4,
    title: "main.lists.unknown",
    players: DEFAULT_RESET_SECTION_PLAYERS,
  },
  { id: 5, title: "main.lists.unused", players: [] },
];
