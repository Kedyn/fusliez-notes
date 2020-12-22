import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { IPlayersState } from "utils/types/players";
import { NAMESPACE } from "constants/main";

export function getDefaultPlayersState(): IPlayersState {
  return {
    brown: {
      ...DEFAULT_PLAYERS_STATE.brown,
      position: {
        ...DEFAULT_PLAYERS_STATE.brown.position,
      },
    },
    red: {
      ...DEFAULT_PLAYERS_STATE.red,
      position: {
        ...DEFAULT_PLAYERS_STATE.red.position,
      },
    },
    orange: {
      ...DEFAULT_PLAYERS_STATE.orange,
      position: {
        ...DEFAULT_PLAYERS_STATE.orange.position,
      },
    },
    yellow: {
      ...DEFAULT_PLAYERS_STATE.yellow,
      position: {
        ...DEFAULT_PLAYERS_STATE.yellow.position,
      },
    },
    lime: {
      ...DEFAULT_PLAYERS_STATE.lime,
      position: {
        ...DEFAULT_PLAYERS_STATE.lime.position,
      },
    },
    green: {
      ...DEFAULT_PLAYERS_STATE.green,
      position: {
        ...DEFAULT_PLAYERS_STATE.green.position,
      },
    },
    cyan: {
      ...DEFAULT_PLAYERS_STATE.cyan,
      position: {
        ...DEFAULT_PLAYERS_STATE.cyan.position,
      },
    },
    blue: {
      ...DEFAULT_PLAYERS_STATE.blue,
      position: {
        ...DEFAULT_PLAYERS_STATE.blue.position,
      },
    },
    purple: {
      ...DEFAULT_PLAYERS_STATE.purple,
      position: {
        ...DEFAULT_PLAYERS_STATE.purple.position,
      },
    },
    pink: {
      ...DEFAULT_PLAYERS_STATE.pink,
      position: {
        ...DEFAULT_PLAYERS_STATE.pink.position,
      },
    },
    white: {
      ...DEFAULT_PLAYERS_STATE.white,
      position: {
        ...DEFAULT_PLAYERS_STATE.white.position,
      },
    },
    black: {
      ...DEFAULT_PLAYERS_STATE.black,
      position: {
        ...DEFAULT_PLAYERS_STATE.black.position,
      },
    },
  };
}

export function getInitialPlayersState(): IPlayersState {
  const localPlayersData: string | null = localStorage.getItem(
    `${NAMESPACE}players`
  );

  if (localPlayersData) {
    const playersObject = JSON.parse(localPlayersData);

    return {
      brown: {
        name: playersObject.brown.name ?? DEFAULT_PLAYERS_STATE.brown.name,
        color: "brown",
        position: {
          x:
            playersObject.brown.position.x ??
            DEFAULT_PLAYERS_STATE.brown.position.x,
          y:
            playersObject.brown.position.y ??
            DEFAULT_PLAYERS_STATE.brown.position.y,
        },
        isDead:
          playersObject.brown.isDead ?? DEFAULT_PLAYERS_STATE.brown.isDead,
        isUsed:
          playersObject.brown.isUsed ?? DEFAULT_PLAYERS_STATE.brown.isUsed,
      },
      red: {
        name: playersObject.red.isUsed ?? DEFAULT_PLAYERS_STATE.red.isUsed,
        color: "red",
        position: {
          x:
            playersObject.red.position.x ??
            DEFAULT_PLAYERS_STATE.red.position.x,
          y:
            playersObject.red.position.y ??
            DEFAULT_PLAYERS_STATE.red.position.y,
        },
        isDead: playersObject.red.isDead ?? DEFAULT_PLAYERS_STATE.red.isDead,
        isUsed: playersObject.red.isUsed ?? DEFAULT_PLAYERS_STATE.red.isUsed,
      },
      orange: {
        name: playersObject.orange.name ?? DEFAULT_PLAYERS_STATE.orange.name,
        color: "orange",
        position: {
          x:
            playersObject.orange.position.x ??
            DEFAULT_PLAYERS_STATE.orange.position.x,
          y:
            playersObject.orange.position.y ??
            DEFAULT_PLAYERS_STATE.orange.position.y,
        },
        isDead:
          playersObject.orange.isDead ?? DEFAULT_PLAYERS_STATE.orange.isDead,
        isUsed:
          playersObject.orange.isUsed ?? DEFAULT_PLAYERS_STATE.orange.isUsed,
      },
      yellow: {
        name: playersObject.yellow.name ?? DEFAULT_PLAYERS_STATE.yellow.name,
        color: "yellow",
        position: {
          x:
            playersObject.yellow.position.x ??
            DEFAULT_PLAYERS_STATE.yellow.position.x,
          y:
            playersObject.yellow.position.y ??
            DEFAULT_PLAYERS_STATE.yellow.position.y,
        },
        isDead:
          playersObject.yellow.isDead ?? DEFAULT_PLAYERS_STATE.yellow.isDead,
        isUsed:
          playersObject.yellow.isUsed ?? DEFAULT_PLAYERS_STATE.yellow.isUsed,
      },
      lime: {
        name: playersObject.lime.name ?? DEFAULT_PLAYERS_STATE.lime.name,
        color: "lime",
        position: {
          x:
            playersObject.lime.position.x ??
            DEFAULT_PLAYERS_STATE.lime.position.x,
          y:
            playersObject.lime.position.y ??
            DEFAULT_PLAYERS_STATE.lime.position.y,
        },
        isDead: playersObject.lime.isDead ?? DEFAULT_PLAYERS_STATE.lime.isDead,
        isUsed: playersObject.lime.isUsed ?? DEFAULT_PLAYERS_STATE.lime.isUsed,
      },
      green: {
        name: playersObject.green.name ?? DEFAULT_PLAYERS_STATE.green.name,
        color: "green",
        position: {
          x:
            playersObject.green.position.x ??
            DEFAULT_PLAYERS_STATE.green.position.x,
          y:
            playersObject.green.position.y ??
            DEFAULT_PLAYERS_STATE.green.position.y,
        },
        isDead:
          playersObject.green.isDead ?? DEFAULT_PLAYERS_STATE.green.isUsed,
        isUsed:
          playersObject.green.isUsed ?? DEFAULT_PLAYERS_STATE.green.isUsed,
      },
      cyan: {
        name: playersObject.cyan.name ?? DEFAULT_PLAYERS_STATE.cyan.name,
        color: "cyan",
        position: {
          x:
            playersObject.cyan.position.x ??
            DEFAULT_PLAYERS_STATE.cyan.position.x,
          y:
            playersObject.cyan.position.x ??
            DEFAULT_PLAYERS_STATE.cyan.position.x,
        },
        isDead: playersObject.cyan.isDead ?? DEFAULT_PLAYERS_STATE.cyan.isDead,
        isUsed: playersObject.cyan.isUsed ?? DEFAULT_PLAYERS_STATE.cyan.isUsed,
      },
      blue: {
        name: playersObject.blue.name ?? DEFAULT_PLAYERS_STATE.blue.name,
        color: "blue",
        position: {
          x:
            playersObject.blue.position.x ??
            DEFAULT_PLAYERS_STATE.blue.position.x,
          y:
            playersObject.blue.position.x ??
            DEFAULT_PLAYERS_STATE.blue.position.x,
        },
        isDead: playersObject.blue.isDead ?? DEFAULT_PLAYERS_STATE.blue.isDead,
        isUsed: playersObject.blue.isUsed ?? DEFAULT_PLAYERS_STATE.blue.isUsed,
      },
      purple: {
        name: playersObject.purple.name ?? DEFAULT_PLAYERS_STATE.purple.name,
        color: "purple",
        position: {
          x:
            playersObject.purple.position.x ??
            DEFAULT_PLAYERS_STATE.purple.position.x,
          y:
            playersObject.purple.position.x ??
            DEFAULT_PLAYERS_STATE.purple.position.x,
        },
        isDead:
          playersObject.purple.isDead ?? DEFAULT_PLAYERS_STATE.purple.isDead,
        isUsed:
          playersObject.purple.isUsed ?? DEFAULT_PLAYERS_STATE.purple.isUsed,
      },
      pink: {
        name: playersObject.pink.name ?? DEFAULT_PLAYERS_STATE.pink.name,
        color: "pink",
        position: {
          x:
            playersObject.pink.position.x ??
            DEFAULT_PLAYERS_STATE.pink.position.x,
          y:
            playersObject.pink.position.x ??
            DEFAULT_PLAYERS_STATE.pink.position.x,
        },
        isDead: playersObject.pink.isDead ?? DEFAULT_PLAYERS_STATE.pink.isDead,
        isUsed: playersObject.pink.isUsed ?? DEFAULT_PLAYERS_STATE.pink.isUsed,
      },
      white: {
        name: playersObject.white.name ?? DEFAULT_PLAYERS_STATE.white.name,
        color: "white",
        position: {
          x:
            playersObject.white.position.x ??
            DEFAULT_PLAYERS_STATE.white.position.x,
          y:
            playersObject.white.position.x ??
            DEFAULT_PLAYERS_STATE.white.position.x,
        },
        isDead:
          playersObject.white.isDead ?? DEFAULT_PLAYERS_STATE.white.isDead,
        isUsed:
          playersObject.white.isUsed ?? DEFAULT_PLAYERS_STATE.white.isUsed,
      },
      black: {
        name: playersObject.black.name ?? DEFAULT_PLAYERS_STATE.black.name,
        color: "black",
        position: {
          x:
            playersObject.black.position.x ??
            DEFAULT_PLAYERS_STATE.black.position.x,
          y:
            playersObject.black.position.x ??
            DEFAULT_PLAYERS_STATE.black.position.x,
        },
        isDead:
          playersObject.black.isDead ?? DEFAULT_PLAYERS_STATE.black.isDead,
        isUsed:
          playersObject.black.isUsed ?? DEFAULT_PLAYERS_STATE.black.isUsed,
      },
    };
  }

  return getDefaultPlayersState();
}
