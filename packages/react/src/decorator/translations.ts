import type { DecoratorLang } from "./decorator-data";

/**
 * Subset of kp-decorator's translations.ts covering the strings the
 * `Decorator` chrome renders itself (not app content).
 */
const translations = {
  "to-the-front-page": {
    no: "Til forsiden",
    en: "To the front page",
    da: "Til forsiden",
    sv: "Till förstasidan",
    fi: "Etusivulle",
    nl: "Naar de voorpagina",
    pl: "Na stronę główną",
  },
  menu: {
    no: "Meny",
    en: "Menu",
    da: "Menu",
    sv: "Meny",
    fi: "Valikko",
    nl: "Menu",
    pl: "Menu",
  },
  close: {
    no: "Lukk",
    en: "Close",
    da: "Luk",
    sv: "Stäng",
    fi: "Sulje",
    nl: "Sluit",
    pl: "Zamknij",
  },
  login: {
    no: "Logg inn",
    en: "Log in",
    da: "Log ind",
    sv: "Logga in",
    fi: "Kirjaudu sisään",
    nl: "Inloggen",
    pl: "Zaloguj się",
  },
  "login.where": {
    no: "Hvor vil du logge inn?",
    en: "Where to log in?",
    da: "Hvor vil du logge ind?",
    sv: "Var vill du logga in?",
    fi: "Minne haluat kirjautua?",
    nl: "Waar wilt u inloggen?",
    pl: "Gdzie chcesz się zalogować?",
  },
} as const satisfies Record<string, Record<DecoratorLang, string>>;

export function getTranslate(lang: DecoratorLang) {
  return (key: keyof typeof translations) => translations[key][lang];
}
