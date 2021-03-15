import CanvasText from "../Objects/CanvasText";
import GameMap from "../GameMap";
import { MIRAHQ_SCALE } from "constants/maps";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class MiraHQ extends GameMap {
  public constructor() {
    super("MiraHQ", MIRAHQ_SCALE);

    // TODO - Add map areas
    // TODO - Add map tasks
    // TODO - zones
    // TODO - vents
    this.canvasObjects.push(
      new CanvasText(
        i18n.t("maps.greenhouse"),
        new Vector(3555, 155),
        true,
        100
      )
    );

    console.log(i18n.t("maps.greenhouse"));
  }
}
