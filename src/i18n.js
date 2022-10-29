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
      experienceDescriptionLW: `
        <div>Le Wagon est le leader mondial des bootcamps intensifs dans la Tech. I participated in the Wagon Bootcamp between January 2020 and June 2020 to learn the basics of web development that I was able to develop afterwards.</div>
        <br><br>
        <li>Learning and mastering the basics of web development: Ruby, SQL, Javascript, HTML, CSS, Ruby on Rails</li>
        <li>Development of web-applications such as market place and social network</li>
        <li>Discovery of best practices and teamwork in a dynamic and stimulating environment</li>`,
      experienceDescriptionFreelance: `
        <div>Fullstack freelance developer working on several professional and personal projects while continuing to deepen my knowledge on new technologies/frameworks.</div>
        <br><br>
        <li>Participation in the Résonances project: collaborative work platform using mind-mapping logic</li>
        <li>Teacher-Assistant at the Wagon to help new students</li>
        <li>Participation in the 2Mão project in partnership with Banco Carrefour Brasil</li>
        <li>Development of personal side projects (NodeJS, React etc...)</li>
        `,
      experienceDescriptionSightcall: `
        <div>The leading video assistance platform for businesses, Sightcall is a SaaS video assistance solution that integrates the tools and features needed to quickly and efficiently resolve customer and field technician issues.</div>
        <br><br>
        <li>Maintenance and development of the core API (Ruby, RoR) around the JSON API specifications</li>
        <li>Development of Front-End projects around finite state machines</li>
        <li>Work in SCRUM format with two-week sprints</li>
        <li>Use of multiple technologies and frameworks: ElasticSearch, Kibana, EmberJS, Ruby, Ruby on Rails etc...</li>
        `,
      french: "French",
      gameTitle:
        "If you want to challenge me, you can try to beat my record at Snake !",
      gameCannotPlay:
        "It seems that you are trying to access this page with a mobile. Unfortunately you can only play the game on computer.",
      gameAlexisHighscore: "Alexis' highscore",
      gameCurrentScore: "Actual score",
      gameHighScore: "Your highscore",
      introduction_text_1: "Hi, I'm Alexis! Welcome to my personal website",
      introduction_text_2:
        "Graduated as an Urban System engineer at the University of Technology of Compiègne (UTC), I made a carrer change to web development in 2020. I participated to the Bootcamp Le Wagon between January and June 2020.",
      introduction_text_3:
        "After almost a year of experience as a freelance developer working on professional and personal projects I joined Sightcall as a Fullstack Developer in February 2022.",
      introduction_text_4:
        "I love taking on new technical challenges, working with new technologies and with a teamates.",
      introduction_text_5:
        "I am always open to new challenges so don't hesitate to contact me!",
      introduction: "Hello, I'm Alexis !",
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
      experienceDescriptionLW: `
        <div>Le Wagon est le leader mondial des bootcamps intensifs dans la Tech. J'ai participé au Bootcamp du Wagon entre Janvier 2020 et Juin 2020 pour apprendre les bases du développement web que j'ai pu développer par la suite.</div>
        <br> 
        <li>Apprentissage et maitrise des bases du développement web : Ruby, SQL, Javascript, HTML, CSS, Ruby on Rails</li>
        <li>Développement de web-application de types market place et réseau social</li>
        <li>Découverte des bonnes pratiques et du travail en équipe au sein d'environnement dynamique et stimulant</li>
        `,
      experienceDescriptionFreelance: `
        <div>Développeur Fullstack freelance travaillant sur plusieurs projets professionels et personnels tout en continuant d'approfondir mes connaissances sur des nouvelles technologies/framework.</div>
        <br><br>
        <li>Participation au projet Résonances : plateforme de travail collaboratif utilisant une logique de mind-mapping</li>
        <li>Teacher-Assistant au Wagon pour aider les nouveaux étudiants</li>
        <li>Participation au projet 2Mão en partenariat avec Banco Carrefour Brasil</li>
        <li>Dévelopement de projets personnels annexes (NodeJS, React etc...)</li>
        `,
      experienceDescriptionSightcall: `
        <div>Plate-forme leader de la vidéo assistance pour les entreprises, Sightcall est une solution SaaS de vidéo assistance intégrant des outils et fonctionnalités nécessaires pour résoudre rapidement et efficacement les problèmes des clients et des techniciens sur le terrain.</div>
        <br>
        <li>Maintien et développement de l'API centrale (Ruby, RoR) autour des spécififcations JSON API</li>
        <li>Développement de projets Front-End autour des machines à états finis</li>
        <li>Travail en format SCRUM avec des sprints de deux semaines</li>
        <li>Utilisation de technologies et frameworks multiples : ElasticSearch, Kibana, EmberJS, Ruby, Ruby on Rails etc..</li>
        `,
      french: "Français",
      gameTitle:
        "Si tu as envie de me défier, tu peux essayer de battre mon record à Snake !",
      gameCannotPlay:
        "Oups, il semblerait que tu soit sur téléphone, malheureusement tu ne peux jouer au jeu que sur Ordinateur.",
      gameAlexisHighscore: "Meilleur score d'Alexis",
      gameCurrentScore: "Score actuel",
      gameHighScore: "Ton meilleur score",
      introduction_text_1:
        "Salut, moi c'est Alexis ! Bienvenue sur mon site perso.",
      introduction_text_2:
        "Formé comme ingénieur Système Urbain à l'Université de Technologie de Compiègne (UTC), je me suis redirigé vers le développement Web en 2020 en participant au Bootcamp Le Wagon entre Janvier et Juin 2020.",
      introduction_text_3:
        "Après une expérience de près d'un an comme développeur freelance travaillant sur des projets profesionnels et personnels j'ai rejoint Sightcall en tant que Développeur Fullstack en février 2022.",
      introduction_text_4:
        "J'adore relever des nouveaux challenges techniques, travailler sur de nouvelles technos et travailler en équipe.",
      introduction_text_5:
        "Je suis toujours ouvert à de nouveaux défis alors n'hésite pas à me contacter !",
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
      experienceDescriptionLW: `
        <div>O Wagon é o líder mundial em bootcamps de tecnologia intensiva. Participei do Wagon Bootcamp entre janeiro de 2020 e junho de 2020 para aprender os fundamentos do desenvolvimento da web que pude desenvolver posteriormente.</div>
        <br>
        <li>Aprender e dominar os conceitos básicos do desenvolvimento web: Ruby, SQL, Javascript, HTML, CSS, Ruby on Rails</li>
        <li>Desenvolvimento de aplicações web, como mercado e rede social</li>
        <li>Descobrir as melhores práticas e o trabalho em equipe em um ambiente dinâmico e estimulante</li>`,
      experienceDescriptionFreelance: `
        <div>Desenvolvedor freelance Fullstack trabalhando em vários projetos profissionais e pessoais enquanto continuo a aprofundar meu conhecimento de novas tecnologias/frameworks.</div>
        <li>Participação no projeto Resonances: plataforma de trabalho colaborativo utilizando a lógica de mind-mapping</li>
        <li>Professor-Assistente no Le Wagon para ajudar os novos alunos</li>
        <li>Participação no projeto 2Mão em parceria com o Banco Carrefour Brasil</li>
        <li>Desenvolvimento de projetos pessoais (NodeJS, Reage, etc...)</li>
      `,
      experienceDescriptionSightcall: `
        <div>Plataforma líder de assistência em vídeo para empresas, Sightcall é uma solução de assistência em vídeo SaaS que integra as ferramentas e recursos necessários para resolver rápida e eficientemente os problemas dos clientes e dos técnicos de campo.</div>
        <li>Manutenção e desenvolvimento da API (Ruby, RoR) usando as especificações JSON API</li>
        <li>Desenvolvimento de projetos Front-End com máquinas de estado finito</li>
        <li>Trabalhando no formato SCRUM com duas semanas de sprints</li>
        <li>Usando múltiplas tecnologias e framework: ElasticSearch, Kibana, EmberJS, Ruby, Ruby on Rails etc...</li>
      `,
      french: "Francês",
      gameTitle:
        "Se você quer me desafiar, pode tentar bater me record no Snake !",
      gameAlexisHighscore: "Recorde de Alexis",
      gameCannotPlay:
        "Eita, parece que você está num smarthphone, ineflizmente so pode jogar o jogo num computador.",
      gameCurrentScore: "Pontuação atual",
      gameHighScore: "Recorde atual",
      introduction_text_1: "Olá, sou Alexis! Bem-vindo ao meu site pessoal",
      introduction_text_2:
        "Graduei como engenheiro de sistema urbano na Universidade de Tecnologia de Compiègne (UTC), e me entrei no mundo da tecnologia em 2020, participando do Bootcamp Le Wagon entre janeiro e junho de 2020",
      introduction_text_3:
        "Após quase um ano de experiência como desenvolvedor freelance trabalhando em projetos profissionais e pessoais, entrei na Sightcall como desenvolvedor Fullstack em fevereiro de 2022",
      introduction_text_4:
        "Adoro assumir novos desafios técnicos, trabalhar com novas tecnologias e trabalhar em equipe",
      introduction_text_5:
        "Estou sempre aberto a novos desafios, portanto não hesite em me contatar",
      introduction: "Oi, sou o Alexis !",
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
