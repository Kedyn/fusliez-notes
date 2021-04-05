import { ILanguage } from "utils/types/interface";
import { ISettingsState } from "utils/types/settings";

export const DEFAULT_SETTINGS_STATE: ISettingsState = {
  showNames: true,
  isColorBlind: false,
  initMapWithAllPlayers: false,
  mapPlayersScale: 1.0,
};

export const AVAILABLE_LANGUAGES: Array<ILanguage> = [
  {
    id: "en-US",
    label: "English (US)",
  },
  {
    id: "es-MX",
    label: "Español (MX)",
  },
  {
    id: "pt-BR",
    label: "Português (BR)",
  },
  {
    id: "ru-RU",
    label: "Русский (RU)",
  },
  {
    id: "de-DE",
    label: "Deutsch (DE)",
  },
  {
    id: "fa-IR",
    label: "فارسی (IR)",
  },
  {
    id: "pl-PL",
    label: "Polskie (PL)",
  },
  {
    id: "fr-FR",
    label: "Français (FR)",
  },
  {
    id: "cs-CZ",
    label: "Čeština (CZ)",
  },
  {
    id: "he-IL",
    label: "עִברִית (IL)",
  },
  {
    id: "mg-MG",
    label: "Malagasy (MG)",
  },
  {
    id: "ja-JP",
    label: "日本語 (JA)",
  },
];
