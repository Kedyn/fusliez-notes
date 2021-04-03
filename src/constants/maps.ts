import { IMapLogos } from "utils/types/maps";
import { IRect } from "utils/types/shared";

export const MIRAHQ_SCALE = 2;
export const POLUS_SCALE = 4;
export const THE_AIRSHIP_SCALE = 2;
export const THE_SKELD_SCALE = 1;

export const LOGOS: IMapLogos = {
  MiraHQ: {
    x: 0,
    y: 0,
    w: 208,
    h: 45,
  },
  Polus: { x: 612, y: 0, w: 144, h: 45 },
  TheAirship: {
    x: 416,
    y: 0,
    w: 196,
    h: 42,
  },
  TheSkeld: {
    x: 208,
    y: 0,
    w: 208,
    h: 45,
  },
};

export const MAPS_ICON: IRect = {
  x: 757,
  y: 0,
  w: 45,
  h: 45,
};

export const AREAS_FONT_SIZE = 200;
export const AREAS_STROKE_STYLE = "rgba(0, 0, 0, 0.8)";
export const AREAS_FILL_STYLE = "rgba(255, 255, 255, 0.8)";
export const AREAS_LINE_WIDTH = 30;
