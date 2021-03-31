import Vector from "./Vector";

export default class Shape {
  public constructor(position: Vector) {
    this.position = new Vector(position);
  }

  public setPosition(x: number, y: number): void;
  public setPosition(position: Vector): void;
  public setPosition(...args: Array<number | Vector>): void {
    if (
      args.length === 2 &&
      typeof args[0] === "number" &&
      typeof args[1] === "number"
    ) {
      this.position.set(args[0], args[1]);
    } else if (args.length === 1 && args[0] instanceof Vector) {
      this.position.set(args[0]);
    }
  }

  public getPosition(): Vector {
    return this.position;
  }

  public getX(): number {
    return this.position.x;
  }

  public getY(): number {
    return this.position.y;
  }

  protected position: Vector;
}
