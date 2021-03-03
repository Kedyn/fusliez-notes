export type IMapName = "MiraHQ" | "Polus" | "TheSkeld";

export interface IMap {
  name: IMapName;
  image: HTMLImageElement;
  scale: number;
}
