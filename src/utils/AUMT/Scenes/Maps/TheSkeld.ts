import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  THE_SKELD_SCALE,
} from "constants/maps";

import Layer from "utils/AUMT/Layer";
import Map from "../Map";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class TheSkeld extends Map {
  public constructor() {
    super("TheSkeld", THE_SKELD_SCALE);

    const areas = new Layer();

    areas.entities.push(
      new TextLine(
        i18n.t("maps.upperEngine"),
        new Vector(1800, 1400),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.cafeteria"),
        new Vector(4800, 1400),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.weapons"),
        new Vector(6600, 1100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.reactor"),
        new Vector(1200, 2200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.security"),
        new Vector(2600, 2200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.medBay"),
        new Vector(3400, 1800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.o2"),
        new Vector(6200, 1900),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.navigation"),
        new Vector(7600, 2100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.lowerEngine"),
        new Vector(1800, 3000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.electrical"),
        new Vector(3600, 2800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.storage"),
        new Vector(4700, 3300),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.admin"),
        new Vector(5800, 3000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.communications"),
        new Vector(5800, 4000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.shields"),
        new Vector(6400, 3500),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.layers.push(areas);
    // TODO - Add tasks
    // TODO - Add zones
    // TODO - Add vents/vent connections

    this.layers.push(this.players);
  }
}
