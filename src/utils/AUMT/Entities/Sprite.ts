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
        this.image.width ?? 1920,
        this.image.height ?? 1080
      );
    }

    if (scale !== undefined) {
      this.scale = scale;
    } else {
      this.scale = new Vector(1, 1);
    }

    this.dstRect.setWidth(this.dstRect.getWidth() * this.scale.x);
    this.dstRect.setHeight(this.dstRect.getHeight() * this.scale.y);
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

    this.dstRect.setWidth(this.dstRect.getWidth() * this.scale.x);
    this.dstRect.setHeight(this.dstRect.getHeight() * this.scale.y);
  }

  public setPosition(position: Vector): void {
    this.dstRect.setPosition(position.x, position.y);
  }

  public setScale(scale: Vector): void {
    const width = this.dstRect.getWidth();
    const height = this.dstRect.getHeight();

    this.dstRect.setDimensions(
      (width / this.scale.x) * scale.x,
      (height / this.scale.y) * scale.y
    );

    this.scale = scale;
  }

  public getSourceRect(): Readonly<Rectangle> {
    return this.srcRect;
  }

  public getScale(): Vector {
    return this.scale;
  }

  public getRect(): Rectangle {
    return this.dstRect;
  }

  public getPosition(): Vector {
    return this.dstRect.getPosition();
  }

  public render(): void {
    if (this.visible) {
      const context = Config.getContext();

      context.save();

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
        context.lineWidth = 10;

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
