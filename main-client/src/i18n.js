import i18n from "i18next";
import { initReactI18next } from "react-i18next"; 

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        announcements: "announcements",
        about: "about",
        account : 'account',
        blog : 'blog'
      },
    },
    ar: {
      translation: {
        announcements: "اعلانات",
        about: "حول",
        blog : 'المدونة',
        account: 'الحساب',
      },
    },
    fr: {
      translation: {
        announcements: "annonces this is a test",
        about: "À Propos de Nous",
        account : 'compte',
        blog : 'blog'

      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
