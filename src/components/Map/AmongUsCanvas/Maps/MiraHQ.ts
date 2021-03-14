import GameMap from "../GameMap";
import { MIRAHQ_SCALE } from "constants/maps";

export default class MiraHQ extends GameMap {
  public constructor(
    image: HTMLImageElement,
    playersImage: HTMLImageElement,
    debug = false
  ) {
    super("MiraHQ", image, playersImage, MIRAHQ_SCALE, debug);

    // TODO - Add map tasks, zones, vents
  }
}
