import {
  DEFAULT_DEAD_SECTION,
  DEFAULT_RESET_SECTION,
  DEFAULT_SECTIONS,
  DEFAULT_UNUSED_SECTION,
} from "constants/sections";
import {
  ISection,
  ISectionsState,
  ISpecialSections,
} from "utils/types/sections";

import { ItemInterface } from "react-sortablejs";
import { NAMESPACE } from "constants/main";

export function getDefaultSpecialSections(): ISpecialSections {
  return {
    resetSection: DEFAULT_RESET_SECTION,
    deadSection: DEFAULT_DEAD_SECTION,
    unusedSection: DEFAULT_UNUSED_SECTION,
  };
}

export function getDefaultSections(): Array<ISection> {
  return [
    ...DEFAULT_SECTIONS.map((section) => ({
      id: section.id,
      title: section.title,
      players: [...section.players.map((player) => ({ id: player.id }))],
    })),
  ];
}

export function getDefaultSectionsState(): ISectionsState {
  return {
    ...getDefaultSpecialSections(),
    sections: getDefaultSections(),
  };
}

export function getInitialSectionsState(): ISectionsState {
  const localSectionsData: string | null = localStorage.getItem(
    `${NAMESPACE}sections`
  );

  if (localSectionsData) {
    const sectionsObject = JSON.parse(localSectionsData);

    return {
      resetSection: sectionsObject.resetSection ?? DEFAULT_RESET_SECTION,
      deadSection: sectionsObject.deadSection ?? DEFAULT_DEAD_SECTION,
      unusedSection: sectionsObject.unusedSection ?? DEFAULT_UNUSED_SECTION,
      sections: sectionsObject.sections ?? getDefaultSections(),
    };
  }

  return getDefaultSectionsState();
}

export function movePlayersToSection(
  sections: Array<ISection>,
  to: number
): Array<ISection> {
  const newSections: Array<ISection> = [];

  let players: Array<ItemInterface> = [];

  for (const section of sections) {
    newSections.push({
      ...section,

      players: [],
    });

    players = players.concat(section.players);
  }

  newSections[to].players = players;

  return newSections;
}
