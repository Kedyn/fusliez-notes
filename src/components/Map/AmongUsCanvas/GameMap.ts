import CanvasImage from "./Objects/CanvasImage";
import { IMapName } from "utils/types/maps";
import Layer from "./Layer";
import Vector from "utils/math/Vector";

export default class GameMap extends Layer {
  public constructor(
    name: IMapName,
    image: HTMLImageElement,
    playersImage: HTMLImageElement,
    scale: number,
    debug = false
  ) {
    super(debug);

    this.name = name;
    this.image = image;
    this.playersImage = playersImage;
    this.scale = scale;

    this.canvasObjects.push(
      new CanvasImage(image, undefined, undefined, new Vector(scale, scale))
    );
  }

  public getName(): IMapName {
    return this.name;
  }

  public getImage(): Readonly<HTMLImageElement> {
    return this.image;
  }

  public getScale(): Readonly<number> {
    return this.scale;
  }

  public render(): void {
    super.render();
  }

  protected name: IMapName;
  protected image: HTMLImageElement;
  protected playersImage: HTMLImageElement;
  protected scale: number;
}
