import { ILanguage } from "utils/types/interface";
import { ISettingsState } from "utils/types/settings";

export const DEFAULT_SETTINGS_STATE: ISettingsState = {
  showNames: true,
  isColorBlind: false,
};

export const AVAILABLE_LANGUAGES: Array<ILanguage> = [
  {
    id: "en-US",
    label: "English (US)",
  },
  {
    id: "es-MX",
    label: "Spanish (MX)",
  },
  {
    id: "pt-BR",
    label: "Portuguese (BR)",
  },
  {
    id: "ru-RU",
    label: "Russian (RU)",
  },
  {
    id: "de-DE",
    label: "German (DE)",
  },
  {
    id: "fa-IR",
    label: "Persian (IR)",
  },
  {
    id: "pl-PL",
    label: "Polish (PL)",
  },
  {
    id: "fr-FR",
    label: "French (FR)",
  },
  {
    id: "cs-CZ",
    label: "Czech (CZ)",
  },
  {
    id: "he-IL",
    label: "Hebrew (IL)",
  },
  {
    id: "mg-MG",
    label: "Malagasy (MG)",
  },
  {
    id: "ja-JA",
    label: "Japanese (JA)",
  },
];
