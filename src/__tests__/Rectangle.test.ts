import { Rectangle } from "utils/math/Rectangle";
import { Vector } from "utils/math/Vector";

describe("Rectangle tests", () => {
  const vector = new Vector(100, 100);
  const rect = new Rectangle(vector, 50, 100);

  test("setWidth(100) should set Rectangle's width to 100", () => {
    rect.setWidth(100);

    expect(rect.width).toBe(100);
  });

  test("setHeight(50) should set Rectangle's height to 50", () => {
    rect.setHeight(50);

    expect(rect.height).toBe(50);
  });

  test("getWidth() should get Rectangle's width (=== 100)", () => {
    expect(rect.getWidth()).toBe(100);
  });

  test("getHeight() should get Rectangle's height (=== 50)", () => {
    expect(rect.getHeight()).toBe(50);
  });

  test("isPointInside should return true if a given point is inside the rectangle", () => {
    expect(rect.isPointInside(new Vector(150, 120))).toBeTruthy();
  });

  test("isPointInside should return false if a given point is NOT inside the rectangle", () => {
    rect.setWidth(10);
    rect.setHeight(20);

    expect(rect.isPointInside(new Vector(200, 300))).toBeFalsy();
  });
});
