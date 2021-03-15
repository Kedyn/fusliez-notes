import CanvasGlobals from "../CanvasGlobals";
import CanvasObject from "../CanvasObject";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

export default class CanvasImage extends CanvasObject {
  public constructor(
    image: string,
    srcRect?: Rectangle,
    dstRect?: Rectangle,
    scale?: Vector
  ) {
    super();
    this.image = CanvasGlobals.getImages()[image];

    if (srcRect !== undefined) {
      this.srcRect = srcRect;
    } else {
      this.srcRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }

    if (dstRect !== undefined) {
      this.dstRect = dstRect;
    } else {
      this.dstRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }

    if (scale !== undefined) {
      this.scale = scale;
    } else {
      this.scale = new Vector(1, 1);
    }
  }

  public setRects(srcRect?: Rectangle, dstRect?: Rectangle): void {
    if (srcRect !== undefined) {
      this.srcRect = srcRect;
    } else {
      this.srcRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }

    if (dstRect !== undefined) {
      this.dstRect = dstRect;
    } else {
      this.dstRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }
  }

  public setSourceRect(srcRect?: Rectangle): void {
    if (srcRect !== undefined) {
      this.srcRect = srcRect;
    } else {
      this.srcRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }
  }

  public setDestinationRect(dstRect?: Rectangle): void {
    if (dstRect !== undefined) {
      this.dstRect = dstRect;
    } else {
      this.dstRect = new Rectangle(
        new Vector(),
        this.image.width,
        this.image.height
      );
    }
  }

  public update(): void {
    // does nothing
  }

  public render(): void {
    const context = CanvasGlobals.getContext();

    context.save();

    context.scale(this.scale.x, this.scale.y);

    context.drawImage(
      this.image,
      this.srcRect.getX(),
      this.srcRect.getY(),
      this.srcRect.getWidth(),
      this.srcRect.getHeight(),
      this.dstRect.getX(),
      this.dstRect.getY(),
      this.dstRect.getWidth(),
      this.dstRect.getHeight()
    );

    if (CanvasGlobals.getDebug()) {
      context.save();

      context.strokeStyle = "red";

      context.strokeRect(
        this.dstRect.getX(),
        this.dstRect.getY(),
        this.dstRect.getWidth(),
        this.dstRect.getHeight()
      );

      context.restore();
    }

    context.restore();
  }

  private image: HTMLImageElement;
  private srcRect: Rectangle;
  private dstRect: Rectangle;
  private scale: Vector;
}
