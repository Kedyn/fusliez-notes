import Layer from "utils/AUMT/Layer";
import { MIRAHQ_SCALE } from "constants/maps";
import Map from "../Map";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class MiraHQ extends Map {
  public constructor() {
    super("MiraHQ", MIRAHQ_SCALE);

    const center = true;
    const fontSize = 200;
    const strokeStyle = "rgba(0, 180, 200, 0.8)";
    const fillStyle = "rgba(255, 255, 255, 0.8)";
    const lineWidth = 30;

    // TODO - Add areas
    const areas = new Layer();

    areas.entities.push(
      new TextLine(
        i18n.t("maps.greenhouse"),
        new Vector(8000, 1900),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.office"),
        new Vector(7200, 3300),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.admin"),
        new Vector(8750, 3300),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.reactor"),
        new Vector(4000, 5200),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.laboratory"),
        new Vector(5800, 5200),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.decontamination"),
        new Vector(4900, 6000),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.launchpad"),
        new Vector(2000, 7100),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.lockerRoom"),
        new Vector(5900, 6800),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.communications"),
        new Vector(7300, 7100),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.medBay"),
        new Vector(7300, 8000),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.storage"),
        new Vector(8425, 6650),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.cafeteria"),
        new Vector(10000, 6650),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.balcony"),
        new Vector(9550, 8450),
        center,
        fontSize,
        strokeStyle,
        fillStyle,
        lineWidth
      )
    );

    this.layers.push(areas);
    // TODO - Add tasks
    // TODO - Add zones
    // TODO - Add vents/vent connections

    this.layers.push(this.players);
  }
}
