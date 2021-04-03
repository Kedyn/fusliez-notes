import Config from "utils/AUMT/Config";
import Player from "utils/AUMT/Entities/Player";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

describe("player tests", () => {
  let contextRestoreSpy: jest.SpyInstance;
  let player: Player;

  describe("invalid image(Sprite)", () => {
    test("an error should be thrown to warn an image for that color does not exist", () => {
      expect(() => new Player("orange")).toThrow("orange has no image.");
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
      Config.updatePlayers();
      player = new Player("orange");
    });

    test("a default rect should be created", () => {
      expect(player.getRect()).toEqual({
        height: 198,
        position: {
          x: 0,
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
      Config.updatePlayers();
      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      }
      player = new Player("orange", new Rectangle(new Vector(), 0, 0), true);
    });

    test("getColor should return player's color", () => {
      expect(player.getColor()).toEqual("orange");
    });

    test("setPosition should set rect position", () => {
      player.setPosition(new Vector(20, 100));
      expect(player.getRect()).toEqual({
        height: 0,
        position: {
          x: 20,
          y: 100,
        },
        width: 0,
      });
    });

    test("isPointInRect(new Vector(115, 169)) should return true", () => {
      expect(player.isPointInRect(new Vector(115, 169))).toBeFalsy();
    });

    test("should render", () => {
      player.render();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
    });
  });
});
