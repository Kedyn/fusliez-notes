import { Vector } from "utils/math/Vector";

describe("Vector tests", () => {
  const vector = new Vector(50, 100);

  test("scale function should return vector scaled by argument factor", () => {
    vector.scale(5);
    expect(vector.x).toBe(250);
    expect(vector.y).toBe(500);
  });

  test("add function should return vector incremented by argument vector", () => {
    vector.add(new Vector(225, 125));
    expect(vector.x).toBe(475);
    expect(vector.y).toBe(625);
  });

  test("subtract function should return vector decremented by argument vector", () => {
    vector.subtract(new Vector(50, 75));
    expect(vector.x).toBe(425);
    expect(vector.y).toBe(550);
  });

  test("getDistance function should return the distance between itself and another vector", () => {
    expect(vector.getDistance(new Vector(125, 500))).toBe(
      Math.sqrt(Math.pow(300, 2) + Math.pow(50, 2))
    );
  });

  test("getCenter function should return a vector between itself and another vector", () => {
    expect(vector.getCenter(new Vector(100, 225))).toStrictEqual(
      new Vector(525 / 2, 550 / 225 / 2)
    );
  });

  test("static scale function", () => {
    expect(Vector.scale(new Vector(20, 50), 5)).toStrictEqual(
      new Vector(100, 250)
    );
  });

  test("static add function", () => {
    expect(Vector.add(new Vector(20, 50), new Vector(75, 165))).toStrictEqual(
      new Vector(95, 215)
    );
  });

  test("static subtract function", () => {
    expect(
      Vector.subtract(new Vector(20, 50), new Vector(100, 50))
    ).toStrictEqual(new Vector(-80, 0));
  });

  test("set if/else paths: if the argument is a new Vector", () => {
    vector.set(new Vector(20, 50));

    expect(vector.x).toBe(20);
    expect(vector.y).toBe(50);
  });

  test("set if/else paths: if the args are 2 numbers && both args are numbers", () => {
    vector.set(200, 570);

    expect(vector.x).toBe(200);
    expect(vector.y).toBe(570);
  });
});
