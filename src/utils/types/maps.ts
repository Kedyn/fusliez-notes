import { ICoordinates } from "./shared";

export type IMap = "TheSkeld" | "MiraHQ" | "Polus";

export interface IMapsState {
  currentMap: IMap;
  cameraPosition: ICoordinates;
  scale: number;
}

export interface IMapState {
  position: ICoordinates;
  image: HTMLImageElement;
}

export interface IMouseState {
  lastClicked: ICoordinates;
  position: ICoordinates;
  down: boolean;
}
