import Config from "utils/AUMT/Config";
import Rectangle from "utils/math/Rectangle";
import Sprite from "utils/AUMT/Entities/Sprite";
import Vector from "utils/math/Vector";

describe("Sprite tests", () => {
  describe("valid image", () => {
    let contextRestoreSpy: jest.SpyInstance;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      }
    });

    const sprite = new Sprite(
      "assets/images/players.png",
      new Rectangle(new Vector(0, 0), 100, 100),
      new Rectangle(new Vector(20, 40), 200, 200),
      new Vector(50, 50),
      true,
      false
    );

    test("setRects should set the src and dst rects (both undefined)", () => {
      sprite.setRects(undefined, undefined);

      expect(sprite.getRect()).toEqual({
        height: 0,
        position: { x: 0, y: 0 },
        width: 0,
      });
      expect(sprite.getSourceRect()).toEqual({
        height: 0,
        position: { x: 0, y: 0 },
        width: 0,
      });
    });

    test("setRects should set the src and dst rects", () => {
      const srcRect = new Rectangle(new Vector(), 1920, 1080);
      const dstRect = new Rectangle(new Vector(), 1920, 1080);

      sprite.setRects(srcRect, dstRect);

      expect(sprite.getRect()).toEqual(srcRect);
      expect(sprite.getSourceRect()).toEqual(dstRect);
    });

    test("setSourceRect should set the src rect", () => {
      sprite.setSourceRect();

      expect(sprite.getSourceRect()).toEqual({
        height: 0,
        position: { x: 0, y: 0 },
        width: 0,
      });
    });

    test("setDestinationRect should set the dst rect", () => {
      sprite.setDestinationRect();

      expect(sprite.getRect()).toEqual({
        height: 0,
        position: { x: 0, y: 0 },
        width: 0,
      });
    });

    test("setPosition should set the dst rect's position", () => {
      sprite.setPosition(new Vector(50, 50));

      expect(sprite.getRect()).toEqual({
        height: 0,
        position: { x: 50, y: 50 },
        width: 0,
      });
    });

    describe("render method tests", () => {
      test("debug === true", () => {
        Config.setDebug(true);
        sprite.render();
        expect(contextRestoreSpy).toHaveBeenCalledTimes(2);
      });

      test("debug === false", () => {
        Config.setDebug(false);
        sprite.render();
        expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("sprite.visible === false", () => {
    let contextRestoreSpy: jest.SpyInstance;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      }
    });

    const sprite = new Sprite(
      "image",
      undefined,
      undefined,
      undefined,
      false,
      false
    );

    test("visible === false", () => {
      sprite.render();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(0);
    });
  });
});
