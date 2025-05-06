import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";
import deTranslations from "./locales/de.json";

// Function to get language from URL query parameter
const getLanguageFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "de"; // Default to German if no lang parameter
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
      de: {
        translation: deTranslations,
      },
    },
    fallbackLng: "de", // Set German as fallback language
    lng: getLanguageFromQuery(), // Set initial language from query parameter
    detection: {
      order: ["querystring", "navigator"], // Check query string first, then browser language
      lookupQuerystring: "lang", // Look for 'lang' in query string
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Listen for URL changes to update language
window.addEventListener("popstate", () => {
  const newLang = getLanguageFromQuery();
  if (i18n.language !== newLang) {
    i18n.changeLanguage(newLang);
  }
});

export default i18n;
