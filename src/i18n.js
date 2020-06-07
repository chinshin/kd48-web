import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enSrc from '../public/locale-resources/en-us.json';
import cnSrc from '../public/locale-resources/zh-cn.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: { ...enSrc },
  },
  zh: {
    translation: { ...cnSrc },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: 'zh',
  });

export default i18n;
