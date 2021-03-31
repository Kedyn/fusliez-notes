import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  THE_AIRSHIP_SCALE,
} from "constants/maps";

import Layer from "utils/AUMT/Layer";
import Line from "utils/AUMT/Entities/Line";
import Map from "../Map";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class TheAirship extends Map {
  public constructor() {
    super("TheAirship", THE_AIRSHIP_SCALE);

    const areas = new Layer();

    areas.entities.push(
      new TextLine(
        i18n.t("maps.meetingRoom"),
        new Vector(7800, 800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.vault"),
        new Vector(3500, 1200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.brig"),
        new Vector(5300, 2000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.gapRoom"),
        new Vector(7000, 2000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.records"),
        new Vector(9700, 1600),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.lounge"),
        new Vector(11400, 2700),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.cockpit"),
        new Vector(1000, 3800),
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
        new Vector(2600, 3600),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.engineRoom"),
        new Vector(5000, 4100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.mainHall"),
        new Vector(7800, 3900),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.showers"),
        new Vector(10000, 3800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.cargoBay"),
        new Vector(13000, 4100),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.armory"),
        new Vector(2800, 5200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.viewingDeck"),
        new Vector(2600, 6600),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.kitchen"),
        new Vector(4400, 6300),
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
        new Vector(6900, 6600),
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
        new Vector(8900, 5800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.medical"),
        new Vector(10600, 6000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.layers.push(areas);
    // TODO - Add areas
    // TODO - Add tasks
    // TODO - Add zones

    this.layers.push(this.players);
  }
}
