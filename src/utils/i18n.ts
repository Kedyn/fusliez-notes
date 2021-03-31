import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
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

    backend: {
      loadPath: "./assets/locales/{{lng}}/{{ns}}.json",
    },

    react: {
      useSuspense: (global as any).__DEV__ ? false : true,
      wait: true,
    },
  });

export default i18n;
