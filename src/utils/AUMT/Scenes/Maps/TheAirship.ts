import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  THE_AIRSHIP_SCALE,
} from "constants/maps";

import Layer from "utils/AUMT/Layer";
import MapScene from "../MapScene";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class TheAirship extends MapScene {
  public constructor() {
    super("TheAirship", THE_AIRSHIP_SCALE);

    const areas = new Layer();

    this.texts.set(
      "meetingRoom",
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

    this.texts.set(
      "vault",
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

    this.texts.set(
      "brig",
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

    this.texts.set(
      "gapRoom",
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

    this.texts.set(
      "records",
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

    this.texts.set(
      "lounge",
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

    this.texts.set(
      "cockpit",
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

    this.texts.set(
      "communications",
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

    this.texts.set(
      "engineRoom",
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

    this.texts.set(
      "mainHall",
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

    this.texts.set(
      "showers",
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

    this.texts.set(
      "cargoBay",
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

    this.texts.set(
      "armory",
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

    this.texts.set(
      "viewingDeck",
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

    this.texts.set(
      "kitchen",
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

    this.texts.set(
      "security",
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

    this.texts.set(
      "electrical",
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

    this.texts.set(
      "medical",
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

    this.texts.forEach((value) => areas.entities.push(value));

    this.layers.push(areas);

    this.layers.push(this.players);
  }
}
