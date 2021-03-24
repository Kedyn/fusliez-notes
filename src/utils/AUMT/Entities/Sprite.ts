import Config from "../Config";
import Entity from "../Entity";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

export default class Sprite extends Entity {
  public constructor(
    image: string,
    srcRect?: Rectangle,
    dstRect?: Rectangle,
    scale?: Vector,
    visible?: boolean,
    draggable?: boolean
  ) {
    super(visible, draggable);

    const img = Config.getImages().get(image);

    if (img !== undefined) {
      this.image = img;
    } else {
      this.image = new Image();
    }

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

  public setPosition(position: Vector): void {
    this.dstRect.setPosition(position.x, position.y);
  }

  public getSourceRect(): Readonly<Rectangle> {
    return this.srcRect;
  }

  public getRect(): Rectangle {
    return this.dstRect;
  }

  public render(): void {
    if (this.visible) {
      const context = Config.getContext();

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

      if (Config.getDebug()) {
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
  }

  private image: HTMLImageElement;
  private srcRect: Rectangle;
  private dstRect: Rectangle;
  private scale: Vector;
}
