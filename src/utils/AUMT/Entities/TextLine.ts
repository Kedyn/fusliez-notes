import Config from "../Config";
import Entity from "../Entity";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

export default class TextLine extends Entity {
  public constructor(
    text: string,
    position: Vector,
    center = true,
    fontSize = 20,
    strokeStyle = "black",
    fillStyle = "white",
    lineWidth = 8,
    visible?: boolean,
    draggable?: boolean
  ) {
    super(visible, draggable);

    this.text = text;
    this.position = position;
    this.center = center;
    this.fontSize = fontSize;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.lineWidth = lineWidth;

    this.rect = new Rectangle(new Vector(), 0, fontSize);

    this.setRect();
  }

  public setPosition(position: Vector): void {
    this.position.set(position);

    if (this.center) {
      this.position.set(
        position.x + this.rect.getWidth() / 2,
        position.y + this.rect.getHeight() / 2
      );
    }

    let x = this.position.x;
    let y = this.position.y;

    if (this.center) {
      x -= this.rect.getWidth() / 2;
      y -= this.fontSize / 2;
    }

    this.rect.setPosition(x, y);
  }

  public setText(text = ""): void {
    this.text = text;

    this.setRect();
  }

  public getText(): string {
    return this.text;
  }

  public getPosition(): Vector {
    return this.position;
  }

  public getRect(): Rectangle {
    return this.rect;
  }

  public render(): void {
    const context = Config.getContext();

    if (this.text != "" && this.visible) {
      context.save();

      context.textBaseline = "top";

      if (this.center) {
        context.textBaseline = "middle";
        context.textAlign = "center";
      }

      context.font = `${this.fontSize}px ${Config.getTheme().fontFamily}`;

      context.strokeStyle = this.strokeStyle;
      context.fillStyle = this.fillStyle;
      context.lineWidth = this.lineWidth;

      context.strokeText(this.text, this.position.x, this.position.y);
      context.fillText(this.text, this.position.x, this.position.y);

      if (Config.getDebug()) {
        context.strokeStyle = "red";

        if (this.center) {
          context.fillStyle = "red";

          context.beginPath();
          context.arc(
            this.position.x,
            this.position.y,
            this.lineWidth,
            0,
            Math.PI * 2
          );
          context.fill();
        }

        context.strokeRect(
          this.rect.getX(),
          this.rect.getY(),
          this.rect.getWidth(),
          this.rect.getHeight()
        );
      }

      context.restore();
    }
  }

  private text: string;
  private position: Vector;
  private center: boolean;
  private fontSize: number;
  private strokeStyle: string;
  private fillStyle: string;
  private lineWidth: number;
  private rect: Rectangle;

  private setRect(): void {
    const context = Config.getContext();

    context.save();

    context.font = `${this.fontSize}px ${Config.getTheme().fontFamily}`;

    const width = context.measureText(this.text).width;

    context.restore();

    let x = this.position.x;
    let y = this.position.y;

    if (this.center) {
      x -= width / 2;
      y -= this.fontSize / 2;
    }

    this.rect.setPosition(x, y);
    this.rect.setWidth(width);
  }
}
