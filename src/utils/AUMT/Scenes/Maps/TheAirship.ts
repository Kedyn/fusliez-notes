import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  THE_AIRSHIP_SCALE,
} from "constants/maps";

import Layer from "utils/AUMT/Layer";
import Map from "../Map";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";

export default class TheAirship extends Map {
  public constructor() {
    super("TheAirship", THE_AIRSHIP_SCALE);

    const areas = new Layer();

    areas.entities.push(
      new TextLine(
        "Coming soon...",
        new Vector(960, 540),
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
    // TODO - Add vents/vent connections

    this.layers.push(this.players);
  }
}
