import LanguageDetector from "i18next-browser-languagedetector";
import csCZ from "assets/locales/cs-CZ/translation.json";
import deDE from "assets/locales/de-DE/translation.json";
import enUS from "assets/locales/en-US/translation.json";
import esMX from "assets/locales/es-MX/translation.json";
import faIR from "assets/locales/fa-IR/translation.json";
import frFR from "assets/locales/fr-FR/translation.json";
import heIL from "assets/locales/he-IL/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jaJP from "assets/locales/ja-JP/translation.json";
import mgMG from "assets/locales/mg-MG/translation.json";
import nlNL from "assets/locales/nl-NL/translation.json";
import plPL from "assets/locales/pl-PL/translation.json";
import ptBR from "assets/locales/pt-BR/translation.json";
import ptPT from "assets/locales/pt-PT/translation.json";
import ruRu from "assets/locales/ru-RU/translation.json";

const resources = {
  "cs-CZ": {
    translation: {
      ...csCZ,
    },
  },
  "de-DE": {
    translation: {
      ...deDE,
    },
  },
  "en-US": {
    translation: {
      ...enUS,
    },
  },
  "es-MX": {
    translation: {
      ...esMX,
    },
  },
  "fa-IR": {
    translation: {
      ...faIR,
    },
  },
  "fr-FR": {
    translation: {
      ...frFR,
    },
  },
  "he-IL": {
    translation: {
      ...heIL,
    },
  },
  "ja-JP": {
    translation: {
      ...jaJP,
    },
  },
  "mg-MG": {
    translation: {
      ...mgMG,
    },
  },
  "nl-NL": {
    translation: {
      ...nlNL,
    },
  },
  "pl-PL": {
    translation: {
      ...plPL,
    },
  },
  "pt-BR": {
    translation: {
      ...ptBR,
    },
  },
  "pt-PT": {
    translation: {
      ...ptPT,
    },
  },
  "ru-RU": {
    translation: {
      ...ruRu,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: (code) => {
      if (code === "ja") {
        return "ja-JP";
      }

      return "en-US";
    },
    debug: false,
    load: "currentOnly",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
