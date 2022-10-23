import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      english: "English",
      french: "French",
      navbarIntroduction: "Introduction",
      navbarExperiences: "Experiences",
      navbarSkills: "Skills",
      navbarGame: "Game",
      portuguese: "Portuguese",
    },
  },
  fr: {
    translation: {
      english: "Anglais",
      french: "Français",
      navbarIntroduction: "Présentation",
      navbarExperiences: "Expériences",
      navbarSkills: "Compétences",
      navbarGame: "Jeu",
      portuguese: "Portugais",
    },
  },
  pt: {
    translation: {
      english: "Inglês",
      french: "Francês",
      navbarIntroduction: "Apresentação",
      navbarExperiences: "Experiências",
      navbarSkills: "Compêtencias",
      navbarGame: "Jogo",
      portuguese: "Portguês",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
