import type { DecoratorHeaderFooterData, DecoratorSearchSuggestions } from "./decorator-data";

/**
 * Trimmed-down, but shape-accurate, copies of what
 * www.posten.no/_/service/no.posten.website/header-footer-data and
 * www.bring.no/_/service/no.posten.bring/header-footer-data actually return.
 */
export const postenHeaderFooterData: DecoratorHeaderFooterData = {
  header: {
    loginLinks: [{ title: "Min side", relativePath: "/", absolutePath: "https://id.posten.no/" }],
    iconSection: [
      {
        title: "Kundeservice",
        relativePath: "/kundeservice",
        absolutePath: "https://www.posten.no/kundeservice",
        serviceIcon: "kundeservice",
      },
      {
        title: "English",
        relativePath: "/en",
        absolutePath: "https://www.posten.no/en",
        serviceIcon: "internasjonalt",
      },
    ],
    mainSections: [
      {
        heading: "Sende",
        items: [
          {
            title: "Sende i Norge",
            relativePath: "/bestill",
            absolutePath: "https://sending.posten.no/bestill",
          },
        ],
      },
    ],
    searchUrl: "https://www.posten.no/sok",
    searchButtonLabel: "Søk",
    searchPlaceholder: "Søk",
    searchAriaLabel: "Søk",
  },
  footer: {
    mainSections: [
      {
        heading: "Søk etter",
        items: [
          {
            title: "Finn oss på kartet",
            relativePath: "/kart",
            absolutePath: "https://www.posten.no/kart",
          },
        ],
      },
    ],
    buttons: [{ title: "For bedrifter", relativePath: "/", absolutePath: "https://www.bring.no" }],
    copyRightText: "En del av Posten Bring-konsernet",
    bottomLinks: [
      {
        title: "Personvern og sikkerhet",
        relativePath: "/personvern-sikkerhet",
        absolutePath: "https://www.posten.no/personvern-sikkerhet",
      },
    ],
  },
};

export const bringHeaderFooterData: DecoratorHeaderFooterData = {
  header: {
    loginLinks: [
      { title: "Mybring", relativePath: "/", absolutePath: "https://www.mybring.com" },
      { title: "Min Post", relativePath: "/", absolutePath: "https://eordre.posten.no/minpost" },
      {
        title: "Frimerkebutikken",
        relativePath: "/",
        absolutePath: "https://eordre.posten.no/frimerker",
      },
      { title: "Digipost", relativePath: "/", absolutePath: "https://www.digipost.no/innlogging/" },
    ],
    iconSection: [
      {
        title: "Spore en sending",
        relativePath: "/tjenester/spore",
        absolutePath: "https://www.bring.no/tjenester/spore",
        serviceIcon: "sporing",
      },
    ],
    mainSections: [
      {
        heading: "Sende",
        items: [
          {
            title: "Send pakke",
            relativePath: "/tjenester/sende-pakke",
            absolutePath: "https://www.bring.no/tjenester/sende-pakke",
          },
        ],
      },
    ],
    searchUrl: "https://www.bring.no/sok",
    searchButtonLabel: "Søk",
    searchPlaceholder: "Søk",
    searchAriaLabel: "Søk",
  },
  footer: {
    mainSections: [],
    buttons: [],
    copyRightText: "En del av Posten Bring-konsernet",
    bottomLinks: [],
  },
};

export const searchSuggestionsFixture: DecoratorSearchSuggestions = {
  total: 251,
  hits: [
    {
      absoluteUrl: "https://www.posten.no/sporing-kundeservice",
      heading: "Hjelp til Posten sporing",
      preface: "De mest stilte spørsmålene om sporing.",
    },
  ],
};
