import { players, theme } from "../../default";

import Config from "utils/AUMT/Config";
import { IPlayerColor } from "utils/types/players";
import Player from "utils/AUMT/Entities/Player";
import Vector from "utils/math/Vector";

describe("player tests", () => {
  let contextRestoreSpy: jest.SpyInstance;
  let player: Player;

  describe("invalid image(Sprite)", () => {
    test("an error should be thrown to warn an image for that color does not exist", () => {
      expect(() => new Player("orange", new Vector(100, 100))).toThrow(
        "orange has no image or name."
      );
    });
  });

  describe("valid image(Sprite) but rect === undefined", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      Config.setImages([
        "MiraHQ",
        "assets/images/MiraHQ.png",
        "Polus",
        "assets/images/Polus.png",
        "TheSkeld",
        "assets/images/TheSkeld.png",
        "Players",
        "assets/images/players.png",
        "Logos",
        "assets/images/logos.png",
      ]);
      Config.updatePlayers(players, 3, 5, 1);
      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
      }
    });

    test("a default rect should be created", () => {
      expect(new Player("orange", new Vector(0, 0)).getRect()).toEqual({
        height: 198,
        position: {
          x: 888,
          y: 0,
        },
        width: 148,
      });
    });
  });

  describe("valid image(Sprite)", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      Config.setImages([
        "MiraHQ",
        "assets/images/MiraHQ.png",
        "Polus",
        "assets/images/Polus.png",
        "TheSkeld",
        "assets/images/TheSkeld.png",
        "Players",
        "assets/images/players.png",
        "Logos",
        "assets/images/logos.png",
      ]);
      Config.updatePlayers(players, 3, 5, 1);
      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      }
      player = new Player("orange", new Vector(160, 150));
    });

    test("getColor should return player's color", () => {
      expect(player.getColor()).toEqual("orange");
    });

    test("setPosition should set rect position", () => {
      player.setPosition(new Vector(20, 100));
      expect(player.getRect()).toEqual({
        height: 198,
        position: {
          x: 888,
          y: 0,
        },
        width: 148,
      });
    });

    test("isPointInRect(new Vector(115, 169)) should return true", () => {
      expect(player.isPointInRect(new Vector(115, 169))).toBeFalsy();
    });

    test("render should have called context.restore 3 times", () => {
      new Player("orange", new Vector(192, 150)).render();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
    });
  });
});
