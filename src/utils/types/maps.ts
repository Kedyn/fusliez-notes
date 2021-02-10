import { ICoordinates } from "./shared";

export type IMap = "MiraHQ" | "Polus" | "TheSkeld";

export interface IMapsState {
  currentMap: IMap;
  cameraPosition: ICoordinates;
  scale: number;
}

export interface IMapState {
  position: ICoordinates;
  image: HTMLImageElement;
}

export interface IMapContext {
  canvasContext: CanvasRenderingContext2D | null;
  miraHQ: HTMLImageElement | null;
  polus: HTMLImageElement | null;
  theSkeld: HTMLImageElement | null;
  players: HTMLImageElement | null;
  mousePos: ICoordinates;
  mouseDown: boolean;
}

export interface IMouseState {
  lastClicked: ICoordinates;
  position: ICoordinates;
  down: boolean;
}
