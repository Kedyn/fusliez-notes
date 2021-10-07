import SectionsSlice, {
  getDeadSectionId,
  getResetSectionId,
  getSections,
  getSectionsState,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import store from "store";

describe("SectionsSlice tests", () => {
  const state = store.getState().Sections;

  beforeEach(() => {
    localStorage.clear();
  });

  test("setResetSection should return state with the new resetSection id", () => {
    expect(
      SectionsSlice.caseReducers.setResetSection(state, {
        payload: 0,
        type: "string",
      })
    ).toStrictEqual({ ...state, resetSection: 0 });
  });

  test("setDeadSection should return state with the new deadSection id", () => {
    expect(
      SectionsSlice.caseReducers.setDeadSection(state, {
        payload: 2,
        type: "string",
      })
    ).toStrictEqual({ ...state, deadSection: 2 });
  });

  test("setUnusedSection should return state with the new unusedSection id", () => {
    expect(
      SectionsSlice.caseReducers.setUnusedSection(state, {
        payload: 1,
        type: "string",
      })
    ).toStrictEqual({ ...state, unusedSection: 1 });
  });

  test("addNewSection should return state.sections with a new section", () => {
    expect(SectionsSlice.caseReducers.addNewSection(state)).toStrictEqual({
      ...state,
      sections: [
        ...state.sections,
        { id: state.sections.length, title: "", players: [] },
      ],
    });
  });

  test("delSection should return state.sections with a new section", () => {
    expect(
      SectionsSlice.caseReducers.delSection(state, {
        payload: 5,
        type: "string",
      })
    ).toStrictEqual({
      deadSection: 3,
      resetSection: 4,
      sections: [
        {
          id: 0,
          players: [],
          title: "main.lists.innocent",
        },
        {
          id: 1,
          players: [],
          title: "main.lists.suspicious",
        },
        {
          id: 2,
          players: [],
          title: "main.lists.evilHitList",
        },
        {
          id: 3,
          players: [],
          title: "main.lists.dead",
        },
        {
          id: 4,
          players: [
            {
              id: "banana",
            },
            {
              id: "black",
            },
            {
              id: "blue",
            },
            {
              id: "brown",
            },
            {
              id: "coral",
            },
            {
              id: "cyan",
            },
            {
              id: "gray",
            },
            {
              id: "green",
            },
            {
              id: "lime",
            },
            {
              id: "maroon",
            },
            {
              id: "orange",
            },
            {
              id: "pink",
            },
            {
              id: "purple",
            },
            {
              id: "red",
            },
            {
              id: "rose",
            },
            {
              id: "tan",
            },
            {
              id: "white",
            },
            {
              id: "yellow",
            },
          ],
          title: "main.lists.unknown",
        },
      ],
      unusedSection: 5,
    });

    expect(
      SectionsSlice.caseReducers.delSection(state, {
        payload: 0,
        type: "string",
      })
    ).toStrictEqual({
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
          players: [
            {
              id: "black",
            },
            {
              id: "blue",
            },
            {
              id: "brown",
            },
            {
              id: "cyan",
            },
            {
              id: "green",
            },
            {
              id: "lime",
            },
            {
              id: "orange",
            },
            {
              id: "pink",
            },
            {
              id: "purple",
            },
            {
              id: "red",
            },
            {
              id: "white",
            },
            {
              id: "yellow",
            },
          ],
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

  test("setSectionTitle should set a specific section's title to the payload", () => {
    expect(
      SectionsSlice.caseReducers.setSectionTitle(state, {
        payload: {
          section: 0,
          newTitle: "testing title",
        },
        type: "string",
      })
    ).toStrictEqual({
      ...state,
      sections: [
        {
          id: 0,
          players: [],
          title: "testing title",
        },
        ...state.sections.slice(1),
      ],
    });
  });

  test("setSectionPlayers should set a specific section with designated players", () => {
    expect(
      SectionsSlice.caseReducers.setSectionPlayers(state, {
        payload: { section: 0, newPlayers: [{ id: "black", name: "corpse" }] },
        type: "string",
      })
    ).toStrictEqual({
      ...state,
      sections: [
        {
          id: 0,
          players: [{ id: "black", name: "corpse" }],
          title: "main.lists.innocent",
        },
        ...state.sections.slice(1),
      ],
    });
  });

  test("movePlayersToResetSection should move all players back to resetSection", () => {
    expect(
      SectionsSlice.caseReducers.movePlayersToResetSection(state)
    ).toStrictEqual({
      ...state,
    });
  });

  test("setSections should set the sections", () => {
    expect(
      SectionsSlice.caseReducers.setSections(state, {
        payload: state.sections,
        type: "string",
      })
    ).toStrictEqual({ ...state });
  });

  test("resetSpecialSections should reset the special section ids", () => {
    expect(
      SectionsSlice.caseReducers.resetSpecialSections(state)
    ).toStrictEqual({ ...state });
  });

  test("resetSectionsState should reset the special section ids", () => {
    expect(SectionsSlice.caseReducers.resetSectionsState()).toStrictEqual({
      ...state,
    });
  });

  test("getResetSectionId should return the resetSection id", () => {
    expect(getResetSectionId(store.getState())).toEqual(
      store.getState().Sections.resetSection
    );
  });

  test("getDeadSectionId should return the deadSection id", () => {
    expect(getDeadSectionId(store.getState())).toEqual(
      store.getState().Sections.deadSection
    );
  });

  test("getUnusedSectionId should return the unusedSection id", () => {
    expect(getUnusedSectionId(store.getState())).toEqual(
      store.getState().Sections.unusedSection
    );
  });

  test("getSections should return the sections", () => {
    expect(getSections(store.getState())).toStrictEqual(
      store.getState().Sections.sections
    );
  });

  test("getSectionsState should return the sections", () => {
    expect(getSectionsState(store.getState())).toStrictEqual(
      store.getState().Sections
    );
  });
});
