import {
  getDefaultSectionsState,
  getInitialSectionsState,
  movePlayersToSection,
} from "store/shared/sections";

import { ISectionsState } from "utils/types/sections";
import { NAMESPACE } from "constants/main";

describe("shared/sections tests", () => {
  test("getInitialSectionsState should parse data in local storage if it exists", () => {
    const defaultSectionsState: ISectionsState = getDefaultSectionsState();
    localStorage.setItem(
      `${NAMESPACE}sections`,
      JSON.stringify(defaultSectionsState)
    );
    expect(getInitialSectionsState()).toStrictEqual(defaultSectionsState);
  });

  test("getInitialSectionsState should parse data in local storage and fill in the missing keys/values", () => {
    const defaultSectionsState: ISectionsState = getDefaultSectionsState();
    localStorage.setItem(`${NAMESPACE}sections`, JSON.stringify({}));
    expect(getInitialSectionsState()).toStrictEqual(defaultSectionsState);
  });

  test("movePlayersToSection should move a section's players to a new section", () => {
    const defaultSectionsState: ISectionsState = getDefaultSectionsState();

    expect(
      movePlayersToSection(defaultSectionsState.sections, 0)
    ).toStrictEqual([
      {
        id: 0,
        title: "main.lists.innocent",
        players: [
          { id: "banana" },
          { id: "black" },
          { id: "blue" },
          { id: "brown" },
          { id: "coral" },
          { id: "cyan" },
          { id: "gray" },
          { id: "green" },
          { id: "lime" },
          { id: "maroon" },
          { id: "orange" },
          { id: "pink" },
          { id: "purple" },
          { id: "red" },
          { id: "rose" },
          { id: "tan" },
          { id: "white" },
          { id: "yellow" },
        ],
      },
      { id: 1, title: "main.lists.suspicious", players: [] },
      { id: 2, title: "main.lists.evilHitList", players: [] },
      { id: 3, title: "main.lists.dead", players: [] },
      { id: 4, title: "main.lists.unknown", players: [] },
      { id: 5, title: "main.lists.unused", players: [] },
    ]);
  });
});
