import { ICoordinates } from "./shared";

export type IMap = "TheSkeld" | "MiraHq" | "Polus";

export interface IMapsState {
  currentMap: IMap;
  cameraPosition: ICoordinates;
  scale: number;
}
