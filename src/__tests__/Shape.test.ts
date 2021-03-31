import { Shape } from "utils/math/Shape";
import { Vector } from "utils/math/Vector";

describe("Shape tests", () => {
  const shape = new Shape(new Vector(50, 100));

  test("getPosition function should return current position", () => {
    expect(shape.getPosition()).toStrictEqual(new Vector(50, 100));
  });

  test("getX function should return current X", () => {
    expect(shape.getX()).toEqual(50);
  });

  test("getY function should return current Y", () => {
    expect(shape.getY()).toEqual(100);
  });

  test("set position with 2 nums as args should set the current position to x and y, respectively", () => {
    shape.setPosition(-20, -62);
    expect(shape.getPosition()).toStrictEqual(new Vector(-20, -62));
  });

  test("set position with the arg being a Vector should set the current position to the vector", () => {
    shape.setPosition(new Vector(1000, 612));
    expect(shape.getPosition()).toStrictEqual(new Vector(1000, 612));
  });
});
