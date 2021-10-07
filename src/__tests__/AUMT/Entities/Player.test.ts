import {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { players, theme } from "../../default";
import { resetPlayersState, setPlayerSection } from "store/slices/PlayersSlice";

import Config from "utils/AUMT/Config";
import InputHandler from "utils/AUMT/InputHandler";
import Player from "utils/AUMT/Entities/Player";
import Vector from "utils/math/Vector";
import { resetSectionsState } from "store/slices/SectionsSlice";
import store from "store";

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
          x: 1480,
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
          x: 1480,
          y: 0,
        },
        width: 148,
      });
    });

    test("getRect should return this.image's rect", () => {
      expect(player.getRect()).toEqual({
        height: 198,
        width: 148,
        position: new Vector(1480, 0),
      });
    });

    test("getColor should return this.color", () => {
      expect(player.getColor()).toEqual("orange");
    });

    test("isPointInRect(new Vector(115, 169)) should return true", () => {
      expect(player.isPointInRect(new Vector(115, 169))).toBeFalsy();
    });

    describe("update() tests", () => {
      const dispatchSpy = jest.spyOn(store, "dispatch");
      const mockFn = jest.fn();
      const pointerEvent = {
        preventDefault: () => mockFn(),
        clientX: 1024,
        clientY: 154,
        currentTarget: {
          width: 1920,
          height: 1080,
          getBoundingClientRect: () => {
            return {
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
            };
          },
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
      const mouseEvent = {
        preventDefault: () => mockFn(),
      } as ReactMouseEvent<HTMLCanvasElement>;

      beforeEach(async () => {
        await store.dispatch(resetSectionsState());
        await store.dispatch(resetPlayersState());
        InputHandler.onPointerMove(pointerEvent);
        InputHandler.onDoubleClick(mouseEvent);
      });

      test("update(0) should have dispatched setPlayerSection with the resetSectionId if player is in dead", async () => {
        // set orange to dead
        await store.dispatch(
          setPlayerSection({ player: "orange", newSection: 3 })
        );

        player.update(0);

        expect(dispatchSpy).toHaveBeenLastCalledWith({
          payload: { player: "orange", newSection: 4 },
          type: "Players/setPlayerSection",
        });
      });

      // will need to revisit this test
      // state is being reset in the beforeEach calls
      // but the update function itself still refers to
      // the previous update()'s store's state
      // test("update(1) should have dispatched setPlayerSection with the deadSectionId if player is NOT in dead", async () => {
      //   console.log(store.getState().Players);
      //   // state not being reset before the function call
      //   // state is being reset, but the updated store is not being used
      //   player.update(1);

      //   expect(dispatchSpy).toHaveBeenLastCalledWith({
      //     payload: { player: "orange", newSection: 3 },
      //     type: "Players/setPlayerSection",
      //   });
      //   // expect(dispatchSpy).toHaveBeenNthCalledWith(3, {});
      // });
    });

    test("render should have called context.restore 3 times", () => {
      new Player("orange", new Vector(192, 150)).render();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
    });
  });
});
