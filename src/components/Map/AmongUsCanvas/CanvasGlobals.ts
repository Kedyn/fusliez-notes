import { ITheme } from "utils/types/theme";
import { ImageAssets } from "utils/types/canvas";
import Vector from "utils/math/Vector";

class CanvasGlobals {
  public static GetInstance(): CanvasGlobals {
    if (!CanvasGlobals.instance) {
      CanvasGlobals.instance = new CanvasGlobals();
    }

    return CanvasGlobals.instance;
  }

  public setDebug(state: boolean): void {
    this.debug = state;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public setImages(images: Array<string>): void {
    for (let i = 0; i < images.length; i += 2) {
      const img = new Image();

      this.images[images[i]] = img;

      img.src = images[i + 1];

      img.onload = () => {
        this.loaded++;
      };
    }
  }

  public setOffset(x: number, y: number): void {
    this.offset.set(x, y);
  }

  public setScale(x: number, y: number): void {
    this.scale.set(x, y);
  }

  public getDebug(): boolean {
    return this.debug;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.context;
  }

  public getImages(): Readonly<ImageAssets> {
    return this.images;
  }

  public getTheme(): Readonly<ITheme> {
    return this.theme;
  }

  public getOffset(): Vector {
    return this.offset;
  }

  public getScale(): Vector {
    return this.scale;
  }

  public isLoaded(): boolean {
    return this.loaded === Object.keys(this.images).length;
  }

  public screenToWorld(screenPoint: Vector): Vector {
    const point = Vector.add(screenPoint, this.offset);

    point.x /= this.scale.x;
    point.y /= this.scale.y;

    return point;
  }

  private static instance: CanvasGlobals;

  private debug: boolean;
  private context!: CanvasRenderingContext2D;
  private theme!: ITheme;
  private images: ImageAssets;
  private loaded: number;
  private offset: Vector;
  private scale: Vector;

  private constructor() {
    this.debug = false;

    this.images = {};

    this.loaded = 0;

    this.offset = new Vector();
    this.scale = new Vector(1, 1);
  }
}

const CanvasGlobalsInstange = CanvasGlobals.GetInstance();

export default CanvasGlobalsInstange;
