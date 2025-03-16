import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Load translations from JSON files
import LanguageDetector from 'i18next-browser-languagedetector'; // Detects browser language

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true, // Set to false in production
    interpolation: { escapeValue: false },
    detection: { order: ['querystring', 'localStorage', 'navigator'] },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Translation files location
    },
  });

export default i18n;
