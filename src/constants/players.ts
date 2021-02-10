import { IPlayersImages, IPlayersState } from "utils/types/players";

import { DEFAULT_RESET_SECTION } from "./sections";

export const DEFAULT_PLAYERS_STATE: IPlayersState = {
  black: {
    name: "",
    color: "black",
    position: {
      x: 0,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  blue: {
    name: "",
    color: "blue",
    position: {
      x: 148,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  brown: {
    name: "",
    color: "brown",
    position: {
      x: 296,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  cyan: {
    name: "",
    color: "cyan",
    position: {
      x: 444,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  green: {
    name: "",
    color: "green",
    position: {
      x: 592,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  lime: {
    name: "",
    color: "lime",
    position: {
      x: 740,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  orange: {
    name: "",
    color: "orange",
    position: {
      x: 888,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  pink: {
    name: "",
    color: "pink",
    position: {
      x: 1036,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  purple: {
    name: "",
    color: "purple",
    position: {
      x: 1184,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  red: {
    name: "",
    color: "red",
    position: {
      x: 1332,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  white: {
    name: "",
    color: "white",
    position: {
      x: 1480,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
  yellow: {
    name: "",
    color: "yellow",
    position: {
      x: 1628,
      y: 880,
    },
    section: DEFAULT_RESET_SECTION,
  },
};

export const PLAYER_IMAGE: IPlayersImages = {
  black: {
    alive: {
      x: 0,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 0,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  blue: {
    alive: {
      x: 148,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 124,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  brown: {
    alive: {
      x: 296,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 248,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  cyan: {
    alive: {
      x: 444,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 372,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  green: {
    alive: {
      x: 592,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 496,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  lime: {
    alive: {
      x: 740,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 620,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  orange: {
    alive: {
      x: 888,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 744,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  pink: {
    alive: {
      x: 1036,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 868,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  purple: {
    alive: {
      x: 1184,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 992,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  red: {
    alive: {
      x: 1332,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1116,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  white: {
    alive: {
      x: 1480,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1240,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  yellow: {
    alive: {
      x: 1628,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1364,
      y: 198,
      w: 124,
      h: 117,
    },
  },
};