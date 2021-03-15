import CanvasImage from "./Objects/CanvasImage";
import { IMapName } from "utils/types/maps";
import Layer from "./Layer";
import Vector from "utils/math/Vector";

export default class GameMap extends Layer {
  public constructor(name: IMapName, scale: number) {
    super();

    this.name = name;
    this.scale = scale;

    this.canvasObjects.push(
      new CanvasImage(name, undefined, undefined, new Vector(scale, scale))
    );
  }

  public getName(): IMapName {
    return this.name;
  }

  public getScale(): Readonly<number> {
    return this.scale;
  }

  protected name: IMapName;
  protected scale: number;
}
