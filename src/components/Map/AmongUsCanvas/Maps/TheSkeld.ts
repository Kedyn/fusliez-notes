import GameMap from "../GameMap";
import { THE_SKELD_SCALE } from "constants/maps";

export default class TheSkeld extends GameMap {
  public constructor(image: HTMLImageElement, playersImage: HTMLImageElement) {
    super("TheSkeld", image, playersImage, THE_SKELD_SCALE);

    // TODO - Add map tasks, zones, vents
  }
}
