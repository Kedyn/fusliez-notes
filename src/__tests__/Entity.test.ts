import Entity from "components/Map/AmongUsCanvas/Entity";
import { MOUSE_BUTTON } from "constants/mouse";
import { Rectangle } from "utils/math/Rectangle";
import { Vector } from "utils/math/Vector";

describe("Entity tests", () => {
  const vector = new Vector(100, 100);
  const rect = new Rectangle(vector, 50, 100);
  let entity: Entity;

  describe("not draggable and not debugging", () => {
    beforeEach(() => {
      entity = new Entity(rect);
      const canvas = document.createElement("canvas").getContext("2d");

      if (canvas) entity.setContext(canvas);
    });

    test("getPosition function should return the current position", () => {
      expect(entity.getPosition()).toStrictEqual(new Vector(100, 100));
    });

    test("render method", () => {
      entity.render();
    });

    test("onMouseUp should not do anything since draggable is false", () => {
      entity.onMouseUp(MOUSE_BUTTON.LEFT, new Vector(125, 150));
      expect(entity.isActive()).toBeFalsy();
    });
  });

  describe("draggable and debugging", () => {
    beforeEach(() => {
      entity = new Entity(rect, true, true);
      const canvas = document.createElement("canvas").getContext("2d");

      if (canvas) entity.setContext(canvas);
    });

    test("getPosition function should return the current position", () => {
      expect(entity.getPosition()).toStrictEqual(new Vector(100, 100));
    });

    test("render method", () => {
      entity.render();
    });

    test("isActive should return false", () => {
      expect(entity.isActive()).toBeFalsy();
    });

    test("onKeyDown should not do anything: void", () => {
      entity.onKeyDown(13);
    });

    test("onKeyUp should not do anything: void", () => {
      entity.onKeyUp(0);
    });

    test("onMouseMove should not do anything if this.active is false", () => {
      entity.onMouseMove(new Vector(150, 150));
      expect(entity.getPosition()).toStrictEqual(new Vector(100, 100));
    });

    test("onMouseDown should set this.active to true if coord is in the rect", () => {
      entity.onMouseDown(MOUSE_BUTTON.LEFT, new Vector(125, 150));
      expect(entity.isActive()).toBeTruthy();
    });

    test("onMouseDown should set this.active to true if coord is NOT in the rect", () => {
      entity.onMouseDown(MOUSE_BUTTON.LEFT, new Vector(175, 150));
      expect(entity.isActive()).toBeFalsy();
    });

    test("onMouseUp should set rect position if active", () => {
      entity.onMouseDown(MOUSE_BUTTON.LEFT, new Vector(125, 150));
      entity.onMouseMove(new Vector(125, 150));
      expect(entity.getPosition()).toStrictEqual(new Vector(100, 100));
    });

    test("onMouseMove should set rect position if active", () => {
      entity.onMouseDown(MOUSE_BUTTON.LEFT, new Vector(125, 150));
      entity.onMouseUp(MOUSE_BUTTON.LEFT, new Vector(100, 150));
      expect(entity.isActive()).toBeFalsy();
    });

    test("onDoubleClick", () => {
      entity.onDoubleClick(new Vector(200, 150));
      expect(entity.isActive()).toBeFalsy();
    });
  });
});
