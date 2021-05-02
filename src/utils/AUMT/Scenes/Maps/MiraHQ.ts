import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  MIRAHQ_SCALE,
} from "constants/maps";

import Config from "utils/AUMT/Config";
import Layer from "utils/AUMT/Layer";
import MapScene from "../MapScene";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";

export default class MiraHQ extends MapScene {
  public constructor() {
    super("MiraHQ", MIRAHQ_SCALE);

    const areas = new Layer();

    this.texts.set(
      "greenhouse",
      new TextLine(
        Config.getI18n().t("maps.greenhouse"),
        new Vector(8000, 1900),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "office",
      new TextLine(
        Config.getI18n().t("maps.office"),
        new Vector(7200, 3300),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "admin",
      new TextLine(
        Config.getI18n().t("maps.admin"),
        new Vector(8750, 3300),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "reactor",
      new TextLine(
        Config.getI18n().t("maps.reactor"),
        new Vector(4000, 5200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "laboratory",
      new TextLine(
        Config.getI18n().t("maps.laboratory"),
        new Vector(5800, 5200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "decontamination",
      new TextLine(
        Config.getI18n().t("maps.decontamination"),
        new Vector(4900, 6000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "launchpad",
      new TextLine(
        Config.getI18n().t("maps.launchpad"),
        new Vector(2000, 7100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "lockerRoom",
      new TextLine(
        Config.getI18n().t("maps.lockerRoom"),
        new Vector(5900, 6800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "communications",
      new TextLine(
        Config.getI18n().t("maps.communications"),
        new Vector(7300, 7100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "medBay",
      new TextLine(
        Config.getI18n().t("maps.medBay"),
        new Vector(7300, 8000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "storage",
      new TextLine(
        Config.getI18n().t("maps.storage"),
        new Vector(8425, 6650),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "cafeteria",
      new TextLine(
        Config.getI18n().t("maps.cafeteria"),
        new Vector(10000, 6650),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "balcony",
      new TextLine(
        Config.getI18n().t("maps.balcony"),
        new Vector(9550, 8450),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.forEach((value) => areas.entities.push(value));

    this.layers.push(areas);

    this.layers.push(this.players);
  }
}
