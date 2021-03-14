import GameMap from "../GameMap";
import { POLUS_SCALE } from "constants/maps";

export default class Polus extends GameMap {
  public constructor(image: HTMLImageElement, playersImage: HTMLImageElement) {
    super("Polus", image, playersImage, POLUS_SCALE);

    // TODO - Add map tasks, zones, vents
  }
}
