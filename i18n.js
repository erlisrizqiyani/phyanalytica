import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to our website",
        // tambahkan lebih banyak terjemahan disini
      }
    },
    de: {
      translation: {
        "welcome": "Willkommen auf unserer Webseite",
        // tambahkan lebih banyak terjemahan disini
      }
    }
  },
  lng: "en", // bahasa default
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // react sudah mengamankan dari XSS
  }
});

export default i18n;
