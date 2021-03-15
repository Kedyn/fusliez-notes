import GameMap from "../GameMap";
import { THE_SKELD_SCALE } from "constants/maps";

export default class TheSkeld extends GameMap {
  public constructor() {
    super("TheSkeld", THE_SKELD_SCALE);
  }

  public addObjects(): void {
    const fontSize = 200;

    // TODO - Add map areas
    // TODO - Add map tasks
    // TODO - zones
    // TODO - vents
  }
}
