import type { HopeThemeLocaleData } from "../../shared";

export const brLocale: HopeThemeLocaleData = {
  lang: "pt-BR",

  navbarLocales: {
    langName: "Português",
    selectLangText: "Língua",
    selectLangAriaLabel: "Selecione a língua",
  },

  metaLocales: {
    prev: "Prev",
    next: "Next",
    lastUpdated: "Última atualização",
    editLink: "Editar esta página",
    contributors: "Contribuidores",
  },

  blogLocales: {
    article: "Artigos",
    articleList: "Lista de Artigos",
    category: "Categorias",
    tag: "Tags",
    timeline: "Linha do Tempo",
    timelineTitle: "Ontem, de novo!",
    all: "Todos",
    intro: "Intro Pessoal",
    star: "Estrela",
    slides: "Slides",
    encrypt: "Encriptado",
  },

  outlookLocales: {
    themeColor: "Cor do Tema",
    darkmode: "Modo do Tema",
    fullscreen: "Full Screen",
  },

  encryptLocales: {
    title: "Por favor, entre a senha",
    errorHint: "Por favor, entre a senha correta!",
  },

  routeLocales: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "404msg": [
      "Não há nada aqui.",
      "Como chegou até aqui?",
      "Isto é um Quatro-Zero-Quatro.",
      "Parece que temos alguns links quebrados.",
    ],
    back: "Voltar",
    home: "Leve-me para casa",
  },
};
