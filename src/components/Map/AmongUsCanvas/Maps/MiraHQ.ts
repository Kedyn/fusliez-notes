import CanvasText from "../Objects/CanvasText";
import GameMap from "../GameMap";
import { MIRAHQ_SCALE } from "constants/maps";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class MiraHQ extends GameMap {
  public constructor() {
    super("MiraHQ", MIRAHQ_SCALE);
  }

  public addObjects(): void {
    const fontSize = 200;

    // TODO - Add map areas
    // TODO - Add map tasks
    // TODO - zones
    // TODO - vents
    this.canvasObjects.push(
      new CanvasText(
        i18n.t("maps.greenhouse"),
        new Vector(7100, 1750),
        true,
        fontSize,
        undefined,
        undefined,
        40,
        undefined,
        true
      )
    );

    this.canvasObjects.push(
      new CanvasText(
        i18n.t("maps.admin"),
        new Vector(8300, 3050),
        true,
        fontSize,
        undefined,
        undefined,
        40
      )
    );

    this.canvasObjects.push(
      new CanvasText(
        i18n.t("maps.office"),
        new Vector(6800, 3100),
        true,
        fontSize,
        undefined,
        undefined,
        40
      )
    );

    this.canvasObjects.push(
      new CanvasText(
        i18n.t("maps.communications"),
        new Vector(6500, 6800),
        true,
        fontSize,
        undefined,
        undefined,
        40
      )
    );
  }
}
