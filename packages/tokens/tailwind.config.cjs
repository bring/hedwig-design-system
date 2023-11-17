// @ts-check
const tokens = require("./tokens-output/tw-tokens.json");

/**
 * Remove attributes we don't want in the tailwind config
 *
 * @param {any} obj
 */
const prepare = (obj) => {
  delete obj["type"];
  delete obj["$type"];
  for (const child in Object.values(obj)) {
    if (typeof child === "object") {
      prepare(child);
    }
  }
};
prepare(tokens);

/**
 * @param {any} obj
 * @param {string} prefix
 * @returns
 */
function expandAndPrefix(obj, prefix) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    // @ts-ignore
    result[prefix + key] = value;
  }
  return result;
}

/**
 * @param {keyof typeof tokens["font-size"]} name
 * @returns
 */
function fontSize(name) {
  return [tokens["font-size"][name], tokens["line-height"][name]];
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      bold: tokens.fonts["posten-sans-bold"],
      medium: tokens.fonts["posten-sans-medium"],
      regular: tokens.fonts["posten-sans-regular"],
      light: tokens.fonts["posten-sans-light"],
    },
    fontSize: {
      "h1-display": fontSize("posten-h1-display"),
      "h1-display-min": fontSize("posten-h1-display-min"),
      "h1-display-max": fontSize("posten-h1-display-max"),

      h1: fontSize("posten-h1"),
      "h1-min": fontSize("posten-h1-min"),
      "h1-max": fontSize("posten-h1-max"),

      h2: fontSize("posten-h2"),
      "h2-min": fontSize("posten-h2-min"),
      "h2-max": fontSize("posten-h2-max"),

      h3: fontSize("header-h3"),
      "h3-min": fontSize("header-h3-min"),
      "h3-max": fontSize("header-h3-max"),

      body: fontSize("body"),
      "body-min": fontSize("body-min"),
      "body-max": fontSize("body-max"),

      "body-small": fontSize("body small"),
      "body-small-min": fontSize("body small-min"),
      "body-small-max": fontSize("body small-max"),

      technical: fontSize("technical"),
      "technical-min": fontSize("technical-min"),
      "technical-max": fontSize("technical-max"),

      caption: fontSize("caption"),
    },
    colors: {
      // The brand specifc tokens are themeable,
      // so they must be referneced by css variables
      signature: "var(--hds-brand-colors-signature)",
      darker: "var(--hds-brand-colors-darker)",
      dark: "var(--hds-brand-colors-dark)",
      light: "var(--hds-brand-colors-light)",
      lighter: "var(--hds-brand-colors-lighter)",
      "signature-hover": "var(--hds-brand-colors-signature-hover)",
      "light-hover": "var(--hds-brand-colors-light-hover)",

      ...expandAndPrefix(tokens["ui-colors"], "ui-"),
      ...expandAndPrefix(tokens["dark-mode-colors"], "dm-"),
    },
    spacing: {
      0: 0,
      ...tokens.spacing,
      DEFAULT: tokens.spacing["medium-2"],
    },
    listStyleType: {
      none: "none",
      DEFAULT: "disc",
    },
    borderStyle: {
      DEFAULT: "solid",
    },
    borderRadius: {
      0: 0,
      DEFAULT: tokens["border-radius"],
    },
    borderWidth: {
      0: 0,
      DEFAULT: tokens["stroke-default"],
      thick: tokens["stroke-thick"],
    },
    boxShadow: {
      DEFAULT: tokens["shadow-default"],
    },
    screens: tokens.breakpoints,
    opacity: {
      0: 0,
      ...tokens.opacity,
    },
    transitionTimingFunction: tokens["micro-animation"],
    transitionDuration: tokens["micro-animation-duration"],
    extend: {},
  },
  corePlugins: {
    fontWeight: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    borderStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    borderOpacity: false,
  },
};
