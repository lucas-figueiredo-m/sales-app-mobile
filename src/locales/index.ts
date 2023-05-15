import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localeList/en';
import pt from './localeList/pt';

const i18nResources = {
  en: { translation: en },
  pt: { translation: pt },
};

i18n.use(initReactI18next).init({
  resources: i18nResources,
  compatibilityJSON: 'v3',
  // lng: 'pt'
  fallbackLng: 'pt',
});

export default i18n;
