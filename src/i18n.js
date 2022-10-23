import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      dateFreelance: "2021 - 2022",
      dateLeWagon: "January 2020 - June 2020",
      dateSightcall: "February 2022 - Actual",
      english: "English",
      french: "French",
      navbarIntroduction: "Introduction",
      navbarExperiences: "Experiences",
      navbarSkills: "Skills",
      navbarGame: "Game",
      portuguese: "Portuguese",
      searchPlaceholder: "Search for skills",
    },
  },
  fr: {
    translation: {
      dateFreelance: "2021 - 2022",
      dateLeWagon: "Janvier 2020 - Juin 2020",
      dateSightcall: "Février 2022 - Actuel",
      english: "Anglais",
      french: "Français",
      navbarIntroduction: "Présentation",
      navbarExperiences: "Expériences",
      navbarSkills: "Compétences",
      navbarGame: "Jeu",
      portuguese: "Portugais",
      searchPlaceholder: "Rechercher des compétences",
    },
  },
  pt: {
    translation: {
      dateFreelance: "2021 - 2022",
      dateLeWagon: "Janeiro 2020 - Junho 2020",
      dateSightcall: "Fevereiro 2022 - Atual",
      english: "Inglês",
      french: "Francês",
      navbarIntroduction: "Apresentação",
      navbarExperiences: "Experiências",
      navbarSkills: "Compêtencias",
      navbarGame: "Jogo",
      portuguese: "Portguês",
      searchPlaceholder: "Procurar compêtencias",
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
