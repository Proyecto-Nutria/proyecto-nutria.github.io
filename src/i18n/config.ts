import i18n from 'i18next';
import translationEN from './en/translation.json';
import translationES from './es/translation.json';

import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // react-i18next options
    react: {
      useSuspense: false,
    },
  });
