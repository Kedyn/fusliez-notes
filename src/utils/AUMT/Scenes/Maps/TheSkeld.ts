import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  THE_SKELD_SCALE,
} from "constants/maps";

import Config from "utils/AUMT/Config";
import Layer from "utils/AUMT/Layer";
import MapScene from "../MapScene";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";

export default class TheSkeld extends MapScene {
  public constructor() {
    super("TheSkeld", THE_SKELD_SCALE);

    const areas = new Layer();

    this.texts.set(
      "upperEngine",
      new TextLine(
        Config.getI18n().t("maps.upperEngine"),
        new Vector(1800 * 1.5, 1400 * 1.5),
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
        new Vector(4800 * 1.5, 1400 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "weapons",
      new TextLine(
        Config.getI18n().t("maps.weapons"),
        new Vector(6600 * 1.5, 1100 * 1.5),
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
        new Vector(1200 * 1.5, 2200 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "security",
      new TextLine(
        Config.getI18n().t("maps.security"),
        new Vector(2600 * 1.5, 2200 * 1.5),
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
        new Vector(3400 * 1.5, 1800 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "o2",
      new TextLine(
        Config.getI18n().t("maps.o2"),
        new Vector(6200 * 1.5, 1900 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "navigation",
      new TextLine(
        Config.getI18n().t("maps.navigation"),
        new Vector(7600 * 1.5, 2100 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "lowerEngine",
      new TextLine(
        Config.getI18n().t("maps.lowerEngine"),
        new Vector(1800 * 1.5, 3000 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "electrical",
      new TextLine(
        Config.getI18n().t("maps.electrical"),
        new Vector(3600 * 1.5, 2800 * 1.5),
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
        new Vector(4700 * 1.5, 3300 * 1.5),
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
        new Vector(5800 * 1.5, 3000 * 1.5),
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
        new Vector(5800 * 1.5, 4000 * 1.5),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.texts.set(
      "shields",
      new TextLine(
        Config.getI18n().t("maps.shields"),
        new Vector(6400 * 1.5, 3500 * 1.5),
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
