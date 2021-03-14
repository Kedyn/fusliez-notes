import Shape from "./Shape";
import Vector from "./Vector";

export default class Rectangle extends Shape {
  public constructor(position: Vector, width: number, height: number) {
    super(position);

    this.width = width;
    this.height = height;
  }

  public setDimensions(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public isPointInside(point: Vector): boolean {
    return (
      point.x >= this.position.x &&
      point.x <= this.position.x + this.width &&
      point.y >= this.position.y &&
      point.y <= this.position.y + this.height
    );
  }

  private width: number;
  private height: number;
}
