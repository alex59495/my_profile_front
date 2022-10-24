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
      experiencesButtonLess: "See less",
      experiencesButtonMore: "Discover more",
      experienceDescriptionLW:
        "I did Le Wagon bootcamp between January 2020 and June 2020",
      experienceDescriptionFreelance:
        "<li>FullStack Developper <b>freelance</b> working on several professional and personal projects (RoR, React, NodeJS etc..).</li> <li>Teacher-Assistant at <b>Le Wagon</b>.</li>",
      experienceDescriptionSightcall:
        "<li>FullStack Developper at <b>Sightcall</b> working with multiple technologies (Ruby on Rails, EmberJS, ElasticSearch etc...)</li>",
      french: "French",
      introduction: "Hello, I'm Alexis",
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
      experiencesButtonLess: "Voir moins",
      experiencesButtonMore: "Voir plus",
      experienceDescriptionLW:
        "J'ai participé au Bootcamp du Wagon entre Janvier 2020 et Juin 2020",
      experienceDescriptionFreelance:
        "<li>Développeur Fullstack freelance travaillant sur plusieurs projets professionels et personnels (RoR, React, NodeJS etc..).</li><li>Teacher-Assistant <b>au Wagon</b>.</li>",
      experienceDescriptionSightcall:
        "<li>Développeur FullStack au sein de Sightcall travaillant avec différentes techno (Ruby on Rails, EmberJS, ElasticSearch etc...)</li>",
      french: "Français",
      introduction: "Salut, moi c'est Alexis",
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
      experiencesButtonLess: "Ver menos",
      experiencesButtonMore: "Ver mais",
      experienceDescriptionLW:
        "Particpei do Bootcamp do Le Wagon entre Janeiro 2020 e Junho 2020",
      experienceDescriptionFreelance:
        "<li>Desenvolvedor Fullstack freelance trabalhando em vários projetos profissionais e pessoais (RoR, React, NodeJS etc..).</li><li>Teacher-Assistant no <b>Le Wagon</b>.</li>",
      experienceDescriptionSightcall:
        "<li>Desenvolvedor FullStack na Sightcall trablahando com várias tecnologias (Ruby on Rails, EmberJS, ElasticSearch etc...)</li>",
      french: "Francês",
      introduction: "Oi, sou o Alexis",
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
