import { Action, AnyAction, Dispatch } from "redux";
import {
  ISection,
  ISetSectionPlayersPayload,
  ISetSectionTitlePayload,
} from "utils/types/sections";

import { NAMESPACE } from "constants/main";
import { SectionsMiddleware } from "store/middleware/SectionsMiddleware";
import { getDefaultSectionsState } from "store/shared/sections";
import { resetSectionsState } from "store/slices/SectionsSlice";
import store from "store";

describe("SectionsMiddleware tests", () => {
  const action = ({
    type,
    payload,
  }: {
    type: string;
    payload?:
      | number
      | string
      | ISetSectionTitlePayload
      | ISetSectionPlayersPayload
      | Array<ISection>;
  }) => {
    return {
      type,
      payload,
    };
  };

  const next = ((action: Action) => {
    return action;
  }) as Dispatch<AnyAction>;

  const storageSpy = jest.spyOn(localStorage, "setItem");

  beforeEach(() => {
    store.dispatch(resetSectionsState());
    jest.clearAllMocks();
  });

  test("Sections/setResetSection should set reset section to the payload", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setResetSection",
        payload: 1,
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      ...getDefaultSectionsState(),
      resetSection: 1,
    });
  });

  test("Sections/setDeadSection should set dead section to the payload", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setDeadSection",
        payload: 2,
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      ...getDefaultSectionsState(),
      deadSection: 2,
    });
  });

  test("Sections/setUnusedSection should set unused section to the payload", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setUnusedSection",
        payload: 3,
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      ...getDefaultSectionsState(),
      unusedSection: 3,
    });
  });

  test("Sections/addNewSection should add a new section", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/addNewSection",
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      ...getDefaultSectionsState(),
      sections: [
        ...getDefaultSectionsState().sections,
        { id: 6, title: "", players: [] },
      ],
    });
  });

  test("Sections/delSection with id 0 should delete the first section", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/delSection",
        payload: 0,
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      deadSection: 2,
      resetSection: 3,
      sections: [
        {
          id: 0,
          players: [],
          title: "main.lists.suspicious",
        },
        {
          id: 1,
          players: [],
          title: "main.lists.evilHitList",
        },
        {
          id: 2,
          players: [],
          title: "main.lists.dead",
        },
        {
          id: 3,
          players: [...getDefaultSectionsState().sections[4].players],
          title: "main.lists.unknown",
        },
        {
          id: 4,
          players: [],
          title: "main.lists.unused",
        },
      ],
      unusedSection: 4,
    });
  });

  test("Sections/setSectionTitle should set specific section with the new title", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setSectionTitle",
        payload: {
          section: 3,
          newTitle: "dead/voted out",
        },
      })
    );

    const sections = localStorage.getItem(`${NAMESPACE}sections`);

    expect(JSON.parse(sections as string)).toStrictEqual({
      ...getDefaultSectionsState(),
      sections: [
        ...getDefaultSectionsState().sections.filter(({ id }) => id !== 3),
        { id: 3, title: "dead/voted out", players: [] },
      ].sort((a, b) => (a.id as number) - (b.id as number)),
    });
  });

  test("Sections/setSectionPlayers should set specific section with the players", () => {
    const defaultPlayers = getDefaultSectionsState().sections[4].players;

    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setSectionPlayers",
        payload: {
          section: 1,
          newPlayers: defaultPlayers,
        },
      })
    );

    expect(storageSpy).toHaveBeenLastCalledWith(
      "fusliez-notes-sections",
      '{"resetSection":4,"deadSection":3,"unusedSection":5,"sections":[{"id":0,"title":"main.lists.innocent","players":[]},{"id":1,"title":"main.lists.suspicious","players":[{"id":"banana"},{"id":"black"},{"id":"blue"},{"id":"brown"},{"id":"coral"},{"id":"cyan"},{"id":"gray"},{"id":"green"},{"id":"lime"},{"id":"maroon"},{"id":"orange"},{"id":"pink"},{"id":"purple"},{"id":"red"},{"id":"rose"},{"id":"tan"},{"id":"white"},{"id":"yellow"}]},{"id":2,"title":"main.lists.evilHitList","players":[]},{"id":3,"title":"main.lists.dead","players":[]},{"id":4,"title":"main.lists.unknown","players":[{"id":"banana"},{"id":"black"},{"id":"blue"},{"id":"brown"},{"id":"coral"},{"id":"cyan"},{"id":"gray"},{"id":"green"},{"id":"lime"},{"id":"maroon"},{"id":"orange"},{"id":"pink"},{"id":"purple"},{"id":"red"},{"id":"rose"},{"id":"tan"},{"id":"white"},{"id":"yellow"}]},{"id":5,"title":"main.lists.unused","players":[]}]}'
    );
  });

  test("Sections/movePlayersToResetSection should move all player to reset section", () => {
    const defaultPlayers = getDefaultSectionsState().sections[4].players;

    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setSectionPlayers",
        payload: {
          section: 0,
          newPlayers: defaultPlayers,
        },
      })
    );

    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/movePlayersToResetSection",
      })
    );

    expect(storageSpy).toHaveBeenLastCalledWith(
      "fusliez-notes-sections",
      '{"resetSection":4,"deadSection":3,"unusedSection":5,"sections":[{"id":0,"title":"main.lists.innocent","players":[]},{"id":1,"title":"main.lists.suspicious","players":[]},{"id":2,"title":"main.lists.evilHitList","players":[]},{"id":3,"title":"main.lists.dead","players":[]},{"id":4,"title":"main.lists.unknown","players":[{"id":"banana"},{"id":"black"},{"id":"blue"},{"id":"brown"},{"id":"coral"},{"id":"cyan"},{"id":"gray"},{"id":"green"},{"id":"lime"},{"id":"maroon"},{"id":"orange"},{"id":"pink"},{"id":"purple"},{"id":"red"},{"id":"rose"},{"id":"tan"},{"id":"white"},{"id":"yellow"}]},{"id":5,"title":"main.lists.unused","players":[]}]}'
    );
  });

  test("Sections/setSections should set sections to payload", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/setSections",
        payload: [
          { id: 0, title: "main.lists.innocent", players: [] },
          { id: 1, title: "main.lists.suspicious", players: [] },
          {
            id: 2,
            title: "main.lists.evilHitList",
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
          { id: 3, title: "main.lists.dead", players: [] },
          {
            id: 4,
            title: "main.lists.unknown",
            players: [],
          },
          { id: 5, title: "main.lists.unused", players: [] },
        ],
      })
    );

    expect(storageSpy).toHaveBeenLastCalledWith(
      "fusliez-notes-sections",
      '{"resetSection":4,"deadSection":3,"unusedSection":5,"sections":[{"id":0,"title":"main.lists.innocent","players":[]},{"id":1,"title":"main.lists.suspicious","players":[]},{"id":2,"title":"main.lists.evilHitList","players":[{"id":"banana"},{"id":"black"},{"id":"blue"},{"id":"brown"},{"id":"coral"},{"id":"cyan"},{"id":"gray"},{"id":"green"},{"id":"lime"},{"id":"maroon"},{"id":"orange"},{"id":"pink"},{"id":"purple"},{"id":"red"},{"id":"rose"},{"id":"tan"},{"id":"white"},{"id":"yellow"}]},{"id":3,"title":"main.lists.dead","players":[]},{"id":4,"title":"main.lists.unknown","players":[]},{"id":5,"title":"main.lists.unused","players":[]}]}'
    );
  });

  test("Sections/resetSpecialSections should reset all special sections' ids", () => {
    SectionsMiddleware(store)(next)(
      action({
        type: "Sections/resetSpecialSections",
      })
    );

    expect(storageSpy).toHaveBeenLastCalledWith(
      "fusliez-notes-sections",
      '{"resetSection":4,"deadSection":3,"unusedSection":5,"sections":[{"id":0,"title":"main.lists.innocent","players":[]},{"id":1,"title":"main.lists.suspicious","players":[]},{"id":2,"title":"main.lists.evilHitList","players":[]},{"id":3,"title":"main.lists.dead","players":[]},{"id":4,"title":"main.lists.unknown","players":[{"id":"banana"},{"id":"black"},{"id":"blue"},{"id":"brown"},{"id":"coral"},{"id":"cyan"},{"id":"gray"},{"id":"green"},{"id":"lime"},{"id":"maroon"},{"id":"orange"},{"id":"pink"},{"id":"purple"},{"id":"red"},{"id":"rose"},{"id":"tan"},{"id":"white"},{"id":"yellow"}]},{"id":5,"title":"main.lists.unused","players":[]}]}'
    );
  });

  test("invalid action type should not have called local storage's setItem", () => {
    SectionsMiddleware(store)(next)(action({ type: "Sections" }));

    expect(storageSpy).toHaveBeenCalledTimes(0);
  });
});
