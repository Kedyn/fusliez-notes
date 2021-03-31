import Config from "../Config";
import Entity from "../Entity";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

export default class Line extends Entity {
  public constructor(
    strokeStyle: string,
    points: Array<Vector>,
    lineWidth = 10
  ) {
    super(true, false);

    this.strokeStyle = strokeStyle;
    this.points = points;
    this.lineWidth = lineWidth;
  }

  // eslint-disable-next-line
  public setPosition(position: Vector): void {
    // nothing to do here
  }

  public getRect(): Rectangle {
    return new Rectangle(this.points[0], 0, 0);
  }

  public render(): void {
    const context = Config.getContext();

    context.save();

    context.strokeStyle = this.strokeStyle;
    context.lineWidth = this.lineWidth;

    context.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 1; i < this.points.length; i++) {
      context.lineTo(this.points[i].x, this.points[i].y);
    }

    context.stroke();

    context.restore();
  }

  private strokeStyle: string;
  private points: Array<Vector>;
  private lineWidth: number;
}
