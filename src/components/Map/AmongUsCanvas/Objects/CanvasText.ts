import CanvasGlobals from "../CanvasGlobals";
import CanvasObject from "../CanvasObject";
import Vector from "utils/math/Vector";

export default class CanvasText extends CanvasObject {
  public constructor(
    text: string,
    position: Vector,
    center = true,
    fontSize = 20,
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
    this.fontSize = fontSize;
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
    const context = CanvasGlobals.getContext();

    if (this.text != "") {
      let x = this.position.x;
      let y = this.position.y;

      if (this.center) {
        x += context.measureText(this.text).width / 2;
        y += this.fontSize / 2;
      }

      context.save();

      context.textBaseline = "top";

      context.font = `${this.fontSize}px ${
        CanvasGlobals.getTheme().fontFamily
      }`;

      context.strokeStyle = this.strokeStyle;
      context.fillStyle = this.fillStyle;
      context.lineWidth = this.lineWidth;

      if (this.shadowBlur) {
        context.shadowColor = this.shadowColor;
        context.shadowBlur = this.shadowBlur;
      }

      context.strokeText(this.text, x, y);
      context.fillText(this.text, x, y);

      if (CanvasGlobals.getDebug()) {
        context.strokeStyle = "red";

        context.strokeRect(
          x,
          y,
          context.measureText(this.text).width,
          this.fontSize
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
  private shadowColor: string;
  private shadowBlur: number;
}
