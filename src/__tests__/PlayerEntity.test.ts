import { PLAYER_IMAGE } from "constants/players";
import Player from "components/Map/AmongUsCanvas/Player";
import { Vector } from "utils/math/Vector";

describe("Player tests", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player(
      { name: "fuslie", color: "orange", section: 4 },
      new Vector(10, 100),
      // reset, dead, unused
      [4, 3, 5],
      new Image(),
      PLAYER_IMAGE.orange.alive,
      PLAYER_IMAGE.orange.dead
    );
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
});
