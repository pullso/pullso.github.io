const db = [
  {
    id: 1,
    description:
      "Приложение для ведения домашней бухгалтерии. Можно зарегистироваться и создать свой аккаунт. Задать свои категории трат и бюджет в категориях. Посмотреть инфорграфику трат.<br> Использовал VUE, Firebase, Materialize-css, Vue-charts.",
    link: "https://budget-plan.vercel.app/",
    img: "img/portfolio/crm.png",
    title: "Приложение: CRM бухгалтерия",
    categories: ["vue", "Firebase", "Materialize-css"],
    mobileSupport: false,
  },
  {
    id: 1,
    description:
      "Приложение обращается к серверу и получает базу данных ТОП 250 фильмов. После выводит их на страницу и в зависимости от выбранного фильма меняет фон сайта.<br> Использовал VUE, AXIOS, BOOTSTRAP-VUE.",
    link: "https://pullso.github.io/movies-app/",
    img: "img/portfolio/5.png",
    title: "Приложение: TОП 250 фильмов",
    categories: ["vue", "bootstrap-vue", "axios"],
    mobileSupport: true,
  },
  {
    id: 6,
    description:
      "Приложение для подсчета бюджета, работающие в браузере без перезагрузки.<br />Использовал VUE, ELEMENT-UI.",
    link: "https://pullso.github.io/budget-app/",
    img: "img/portfolio/8.png",
    title: "Приложение: Бюджет",
    categories: ["vue", "Element-UI"],
    mobileSupport: true,
  },
  {
    id: 8,
    description:
      "Верстка лендинга для юридической компании. Сделана мобильная адаптация. <br/> Использовал HTML, Bootstrap, Sass.",
    link: "https://pullso.github.io/landing_flex/",
    img: "img/portfolio/1.png",
    title: "Лендинг для Юр.компании",
    categories: ["HTML", "ScSS", "SLICK"],
    mobileSupport: true,
  },
  {
    id: 5,
    description:
      "Усовершенствованный список задач с подключенным оформлением от Materialize-css. Приложение работает в браузере без перезагрузки. <br/> Использовал VUE, Materialize-css, Vuex, Router.",
    link: "https://pullso.github.io/todo-vue",
    img: "img/portfolio/15.png",
    title: "Приложение: Менеджер задач",
    categories: ["VUE", "Materialize-css", "SLICK"],
    mobileSupport: false,
  },
  {
    id: 6,
    description:
      " Креативный лендинг с примером нестандартного расположения элементов. Смотрится стильно <br/> Использовал HTML, Bootstrap, Sass.",
    link: "https://pullso.github.io/gravity-langing",
    img: "img/portfolio/4.png",
    title: "Креативный лендинг",
    categories: ["HTML", "Bootstrap"],
    mobileSupport: true,
  },
  {
    id: 2,
    description:
      "Сервис по поиску дешевых авиабилетов по всему миру. С дополнительной подгрузкой городов из API <br /> Использовал JS, Webpack, API, Materialize-css",
    link: "https://pullso.github.io/aviatickets/dist/",
    img: "img/portfolio/7.png",
    title: "Сервис аналог Aviasales",
    categories: ["JavaScript", "Materialize-Css"],
    mobileSupport: false,
  },
  {
    id: 11,
    description:
      "Создание формы авторизации и регистрации пользователей. С дополнительной подгрузкой городов из API(вводите на английском языке) <br /> Использовал HTML, CSS, Bootstrap, JS, Webpack, API",
    link: "https://pullso.github.io/login-page/dist/",
    img: "img/portfolio/6.png",
    title: "Проект: Регистрация и логин",
    categories: ["JavaScript", "Bootsrap", "API"],
    mobileSupport: false,
  },
  {
    id: 6,
    description:
      "Разработка идеи, дизайна, верстка, создание видеофона.Сделана мобильная адаптация. <br /> Использовал Pug, Flex, Scss, WOW.js, Animate.css,Font-Awesome, Parcel.",
    link: "https://pullso.github.io/old-site-project/",
    img: "img/portfolio/13.png",
    title: "Сайт визитка с проектами",
    categories: ["PUG", "SCSS", "Parcel"],
    mobileSupport: true,
  },
  {
    id: 5,
    description:
      "Оживление меню, слайдеров на сайте. Написание своих классов в объекто-ориентированном стиле. Автоматизация плееров видео.<br /> Использовал Javascript, Youtube API",
    link: "https://javascript-site-project-oop.vercel.app/",
    img:
      "http://mini.s-shot.ru/1024x768/400/jpeg/?https://javascript-site-project-oop.vercel.app/",
    title: "Сайт с слайдерами, плеерами на JS",
    categories: ["Javascript"],
    mobileSupport: false,
  },
  {
    id: 4,
    description:
      "Простейший конструктор сайтов на JS. Можно вставить разные блоки: текст, заголовок, картинку и таблицу",
    link: "https://js-constructor-delta.vercel.app/",
    img: "img/portfolio/constructor.png",
    title: "Конструктор сайтов на JS",
    categories: ["Javascript"],
    mobileSupport: false,
  },
  {
    id: 3,
    description:
      "Тетрис на Javascript. С музыкальными эффектами и постепенным увеличением сложности.",
    link: "https://pullso.github.io/tetris-js/",
    img: "img/portfolio/tetris.png",
    title: "Тетрис на JS",
    categories: ["Javascript"],
    mobileSupport: false,
  },
  {
    id: 10,
    description:
      "Приложение с возможность задать вопрос автору. После нажатия кнопки отправить - вопрос улетает в базу данных. Есть возможность посмотреть все вопросы с аккаунта администратора.",
    link: "https://js-podcast-2w8n6p31l.vercel.app/",
    img: "img/portfolio/podcats.png",
    title: "Приложение: Задать вопрос",
    categories: ["Javascript", "GOOGLE AUTH API"],
    mobileSupport: false,
  },
  {
    id: 5,
    description:
      "Бот с шутками, комиксами, курсом валют и погодой написанный на Node js",
    link: "https://t.me/PullsoBot",
    img: "img/portfolio/bot.png",
    title: "Telegram Bot на NodeJS",
    categories: ["NODEJS", "javascript"],
    mobileSupport: true,
  },
];

export default db;
