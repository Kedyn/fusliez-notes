import CanvasObject from "../CanvasObject";
import Vector from "utils/math/Vector";

export default class CanvasText extends CanvasObject {
  public constructor(
    text: string,
    position: Vector,
    center = true,
    strokeStyle = "black",
    fillStyle = "white",
    lineWidth = 8,
    shadowColor = "white",
    shadowBlur = 0
  ) {
    super();

    this.text = text;
    this.position = position;
    this.center = center;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.lineWidth = lineWidth;
    this.shadowColor = shadowColor;
    this.shadowBlur = shadowBlur;
  }

  public getPosition(): Vector {
    return this.position;
  }

  public update(): void {
    // does nothing
  }

  public render(): void {
    if (this.text != "") {
      let x = this.position.x;

      if (this.center) {
        x += this.context.measureText(this.text).width / 2;
      }

      this.context.save();

      this.context.strokeStyle = this.strokeStyle;
      this.context.fillStyle = this.fillStyle;
      this.context.lineWidth = this.lineWidth;

      if (this.shadowBlur) {
        this.context.shadowColor = this.shadowColor;
        this.context.shadowBlur = this.shadowBlur;
      }

      this.context.strokeText(this.text, x, this.position.y);
      this.context.fillText(this.text, x, this.position.y);

      this.context.restore();

      if (this.debug) {
        this.context.save();

        this.context.strokeStyle = "red";

        this.context.strokeRect(
          x,
          this.position.y,
          this.context.measureText(this.text).width,
          50
        );

        this.context.restore();
      }
    }
  }

  private text: string;
  private position: Vector;
  private center: boolean;
  private strokeStyle: string;
  private fillStyle: string;
  private lineWidth: number;
  private shadowColor: string;
  private shadowBlur: number;
}
