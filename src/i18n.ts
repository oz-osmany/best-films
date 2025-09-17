import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import deFooter from "./locales/de/footer.json";
import enFooter from "./locales/en/footer.json";
import deHome from "./locales/de/home.json";
import enHome from "./locales/en/home.json";
import enMovie from "./locales/en/movie.json";
import deMovie from "./locales/de/movie.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    supportedLngs: ["de", "en"],
    resources: {
      de: { footer: deFooter, home: deHome, movie: deMovie },
      en: { footer: enFooter, home: enHome, movie: enMovie },
    },
   ns: ['footer','home','movie'],
  defaultNS: 'footer',
  interpolation: { escapeValue: false },
  });

export default i18n;
