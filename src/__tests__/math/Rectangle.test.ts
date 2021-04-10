import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

describe("Rectangle tests", () => {
  const vector = new Vector(100, 100);
  const rect = new Rectangle(vector, 50, 100);

  test("getWidth() should get Rectangle's width (=== 50)", () => {
    expect(rect.getWidth()).toEqual(50);
  });

  test("getHeight() should get Rectangle's height (=== 100)", () => {
    expect(rect.getHeight()).toEqual(100);
  });

  test("setWidth(100) should set Rectangle's width to 100", () => {
    rect.setWidth(100);

    expect(rect.getWidth()).toEqual(100);
  });

  test("setHeight(50) should set Rectangle's height to 50", () => {
    rect.setHeight(50);

    expect(rect.getHeight()).toEqual(50);
  });

  test("isPointInside should return true if a given point is inside the rectangle", () => {
    expect(rect.isPointInside(new Vector(150, 120))).toBeTruthy();
  });

  test("isPointInside should return false if a given point is NOT inside the rectangle", () => {
    rect.setWidth(10);
    rect.setHeight(20);

    expect(rect.isPointInside(new Vector(200, 300))).toBeFalsy();
  });

  test("setDimensions should set the rectangle's new dimensions", () => {
    rect.setDimensions(200, 500);
    expect(rect.getWidth()).toEqual(200);
    expect(rect.getHeight()).toEqual(500);
  });
});
