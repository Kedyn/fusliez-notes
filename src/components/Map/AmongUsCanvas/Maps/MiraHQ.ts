import GameMap from "../GameMap";
import { MIRAHQ_SCALE } from "constants/maps";
import i18n from "utils/i18n";

export default class MiraHQ extends GameMap {
  public constructor(
    image: HTMLImageElement,
    playersImage: HTMLImageElement,
    debug = false
  ) {
    super("MiraHQ", image, playersImage, MIRAHQ_SCALE, debug);

    // TODO - Add map areas
    // TODO - Add map tasks
    // TODO - zones
    // TODO - vents

    console.log(i18n.t("maps.greenhouse"));
  }
}
