export default class Vector {
  public x!: number;
  public y!: number;

  public constructor(x: number, y: number);
  public constructor(copy: Vector);
  public constructor();
  public constructor(...args: Array<number | Vector>) {
    if (
      args.length === 2 &&
      typeof args[0] === "number" &&
      typeof args[1] === "number"
    ) {
      this.set(args[0], args[1]);
    } else if (args.length === 1 && args[0] instanceof Vector) {
      this.set(args[0]);
    } else {
      this.set(0, 0);
    }
  }

  public set(x: number, y: number): void;
  public set(copy: Vector): void;
  public set(): void;
  public set(...args: Array<number | Vector>): void {
    let x = 0;
    let y = 0;

    if (args.length === 1) {
      if (args[0] instanceof Vector) {
        x = args[0].x;
        y = args[0].y;
      }
    } else if (args.length === 2) {
      if (typeof args[0] === "number" && typeof args[1] === "number") {
        x = args[0];
        y = args[1];
      }
    }

    this.x = x;
    this.y = y;
  }

  public scale(factor: number): Vector {
    this.x *= factor;
    this.y *= factor;

    return this;
  }

  public add(other: Vector): Vector {
    this.x += other.x;
    this.y += other.y;

    return this;
  }

  public subtract(other: Vector): Vector {
    this.x -= other.x;
    this.y -= other.y;

    return this;
  }

  public getDistance(other: Vector): number {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
    );
  }

  public getCenter(other: Vector): Vector {
    return new Vector((this.x + other.x) / 2, this.y / other.y / 2);
  }

  public static scale(vector: Vector, factor: number): Vector {
    const newVector = new Vector(vector);

    newVector.scale(factor);

    return newVector;
  }

  public static add(a: Vector, b: Vector): Vector {
    const newVector = new Vector(a);

    newVector.add(b);

    return newVector;
  }

  public static subtract(a: Vector, b: Vector): Vector {
    const newVector = new Vector(a);

    newVector.subtract(b);

    return newVector;
  }
}
