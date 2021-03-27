import { MOUSE_BUTTON } from "constants/mouse";
import { PLAYER_IMAGE } from "constants/players";
import Player from "components/Map/AmongUsCanvas/Player";
import { Vector } from "utils/math/Vector";

describe("Player tests", () => {
  let player: Player;
  let canvasSpy: jest.SpyInstance;
  let strokeTextSpy: jest.SpyInstance;

  beforeEach(() => {
    const canvas = document.createElement("canvas").getContext("2d");

    player = new Player(
      { name: "fuslie", color: "orange", section: 4 },
      new Vector(10, 100),
      // reset, dead, unused
      [4, 3, 5],
      new Image(),
      PLAYER_IMAGE.orange.alive,
      PLAYER_IMAGE.orange.dead
    );

    if (canvas) {
      player.setContext(canvas);
      canvasSpy = jest.spyOn(canvas, "drawImage");
      strokeTextSpy = jest.spyOn(canvas, "strokeText");
    }
  });

  test("updatePlayer if data.section === deadSectionId", () => {
    player.updatePlayer({ name: "fuslie", color: "orange", section: 3 }, [
      4,
      3,
      5,
    ]);

    expect(player.getImageRect()).toStrictEqual(PLAYER_IMAGE.orange.dead);
  });

  test("this.draggable should be false if data.section === unusedSectionId", () => {
    player.updatePlayer({ name: "fuslie", color: "orange", section: 5 }, [
      4,
      3,
      5,
    ]);

    expect(player.getDraggable()).toBeFalsy();
  });

  describe("render method", () => {
    describe("section === unusedSectionId", () => {
      test("context should not have called strokeText", () => {
        player.updatePlayer({ name: "fuslie", color: "orange", section: 5 }, [
          4,
          3,
          5,
        ]);
        player.render();
        expect(strokeTextSpy).toHaveBeenCalledTimes(0);
      });
    });

    describe("section !== unusedSectionId", () => {
      test("should have called strokeText once if data.name", () => {
        player.render();
        expect(strokeTextSpy).toHaveBeenCalledTimes(1);
      });

      test("should have shadowColor #c2d2e3 if element is active", () => {
        player.onMouseDown(MOUSE_BUTTON.LEFT, new Vector(12, 115));
        player.render();
        expect(player.isActive()).toBeTruthy();
        expect(
          player
            .getContext()
            .__getEvents()
            .filter(({ type }) => type === "shadowColor")[0]
        ).toStrictEqual({
          type: "shadowColor",
          transform: [1, 0, 0, 1, 0, 0],
          props: { value: "#c2d2e3" },
        });
      });

      test("else path for data.name", () => {
        player.updatePlayer({ name: "", color: "orange", section: 4 }, [
          4,
          3,
          5,
        ]);
        player.render();

        expect(strokeTextSpy).toHaveBeenCalledTimes(0);
      });
    });
  });
});
