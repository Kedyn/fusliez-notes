import {
  DEFAULT_DEAD_SECTION,
  DEFAULT_RESET_SECTION,
  DEFAULT_SECTIONS,
  DEFAULT_UNUSED_SECTION,
} from "constants/sections";
import {
  IMapsCharacter,
  IPlayer,
  IPlayersSection,
  IPlayersSectionsSlice,
  IUIStoreState,
} from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { NAMESPACE } from "constants/main";

function getInitialState(): IPlayersSectionsSlice {
  const localPlayersSectionsData: string | null = localStorage.getItem(
    `${NAMESPACE}sections`
  );

  if (localPlayersSectionsData) {
    const playersSectionsObject = JSON.parse(localPlayersSectionsData);

    return {
      resetSection: playersSectionsObject.resetSection ?? DEFAULT_RESET_SECTION,
      deadSection: playersSectionsObject.deadSection ?? DEFAULT_DEAD_SECTION,
      unusedSection:
        playersSectionsObject.unusedSection ?? DEFAULT_UNUSED_SECTION,
      sections: playersSectionsObject.sections ?? DEFAULT_SECTIONS,
    };
  }

  return {
    resetSection: DEFAULT_RESET_SECTION,
    deadSection: DEFAULT_DEAD_SECTION,
    unusedSection: DEFAULT_UNUSED_SECTION,
    sections: DEFAULT_SECTIONS,
  };
}

function getPlayersSectionsFromOriginalPositions(
  defaultSection: number,
  sections: Array<IPlayersSection>
): Array<IPlayersSection> {
  const newSections: Array<IPlayersSection> = [];
  let players: Array<IPlayer> = [];

  for (const section of sections) {
    newSections.push({
      ...section,

      players: [],
    });

    players = players.concat(section.players);
  }

  newSections[defaultSection].players = players;

  return newSections;
}

const PlayersSectionsSlice = createSlice({
  name: "PlayersSections",
  initialState: getInitialState(),
  reducers: {
    setResetSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      resetSection: action.payload,
    }),

    setDeadSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      deadSection: action.payload,
    }),

    setUnusedSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      unusedSection: action.payload,
    }),

    setPlayersSections: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<Array<IPlayersSection>>
    ) => {
      let newResetSection = -1;

      return {
        ...state,

        sections: [
          ...action.payload.map((section, index) => {
            if (section.id === state.resetSection) {
              newResetSection = index;
            }

            return {
              ...section,

              id: index,
            };
          }),
        ],

        defaultSection: newResetSection,
      };
    },

    setPlayersSectionsTitle: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<{
        index: number;
        title: string;
      }>
    ) => ({
      ...state,

      sections: [
        ...state.sections.map((section, index) => {
          if (index === action.payload.index) {
            return {
              ...section,

              title: action.payload.title,
            };
          }

          return section;
        }),
      ],
    }),

    setPlayersFromSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<{
        sectionId: number;
        players: Array<IPlayer>;
      }>
    ) => {
      return {
        ...state,

        sections: [
          ...state.sections.map((section) => {
            if (section.id === action.payload.sectionId) {
              return {
                ...section,

                players: action.payload.players,
              };
            }

            return section;
          }),
        ],
      };
    },

    resetPlayersSectionsPositions: (state: IPlayersSectionsSlice) => ({
      ...state,

      sections: getPlayersSectionsFromOriginalPositions(
        state.resetSection,
        state.sections
      ),
    }),

    resetPlayersSections: () => ({
      resetSection: DEFAULT_RESET_SECTION,
      deadSection: DEFAULT_DEAD_SECTION,
      unusedSection: DEFAULT_UNUSED_SECTION,
      sections: [...DEFAULT_SECTIONS.map((section) => section)],
    }),
  },
});

export const {
  setResetSection,

  setDeadSection,

  setUnusedSection,

  setPlayersSections,

  setPlayersSectionsTitle,

  setPlayersFromSection,

  resetPlayersSectionsPositions,

  resetPlayersSections,
} = PlayersSectionsSlice.actions;

export const getResetSectionId = (state: IUIStoreState): number =>
  state.PlayersSections.resetSection;

export const getDeadSectionId = (state: IUIStoreState): number =>
  state.PlayersSections.deadSection;

export const getUnusedSectionId = (state: IUIStoreState): number =>
  state.PlayersSections.unusedSection;

export const getPlayersSections = (
  state: IUIStoreState
): Array<IPlayersSection> => state.PlayersSections.sections;

export const getDefaultPlayersSection = (
  state: IUIStoreState
): IPlayersSection =>
  _ensure(
    state.PlayersSections.sections.find(
      (playersSection) => playersSection.id === getResetSectionId(state)
    )
  );

export const getDeadPlayersSection = (state: IUIStoreState): IPlayersSection =>
  _ensure(
    state.PlayersSections.sections.find(
      (playerSection) => playerSection.id === state.PlayersSections.deadSection
    )
  );

export const getUnusedPlayersSection = (
  state: IUIStoreState
): IPlayersSection =>
  _ensure(
    state.PlayersSections.sections.find(
      (playerSection) =>
        playerSection.id === state.PlayersSections.unusedSection
    )
  );

// ensure Array.prototype.find will not return `undefined`
function _ensure<T>(
  argument: T | undefined,
  message = "This value was promised to be there."
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}
export const getPlayersAsCharacter = (
  state: IUIStoreState
): Array<IMapsCharacter> => {
  const characters: Array<IMapsCharacter> = [];

  for (const section of state.PlayersSections.sections) {
    if (!section.players.length) continue;

    section.players.forEach((player) =>
      characters.push({
        id: player.color,
        playerName: player.playerName,
        x: 0,
        y: 0,
        section: section.id as number,
      })
    );
  }

  return characters;
};

export default PlayersSectionsSlice;
