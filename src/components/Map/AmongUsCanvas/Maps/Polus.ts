import GameMap from "../GameMap";
import { POLUS_SCALE } from "constants/maps";

export default class Polus extends GameMap {
  public constructor() {
    super("Polus", POLUS_SCALE);
  }

  public addObjects(): void {
    const fontSize = 200;

    // TODO - Add map areas
    // TODO - Add map tasks
    // TODO - zones
    // TODO - vents
  }
}
