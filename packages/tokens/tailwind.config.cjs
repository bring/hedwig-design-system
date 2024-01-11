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
  for (const child of Object.values(obj)) {
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
 * @param {`var(--hds-${string})` | keyof typeof tokens["font-weight"]} fontWeightName
 * @returns
 */
function fontSize(name, fontWeightName) {
  let fontWeight;
  if (fontWeightName.startsWith("var(--hds-")) {
    fontWeight = fontWeightName;
  } else {
    // @ts-ignore -- It's ok, it's matched in the function signature
    fontWeight = tokens["font-weight"][fontWeightName];
  }
  return [
    tokens["font-size"][name],
    {
      lineHeight: tokens["line-height"][name],
      fontWeight,
    },
  ];
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      DEFAULT: tokens.fonts["posten-sans"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
      light: 300,
    },
    fontSize: {
      "h1-display": fontSize("posten-h1-display", "var(--hds-brand-font-weight-h1-display)"),
      "h1-display-min": fontSize(
        "posten-h1-display-min",
        "var(--hds-brand-font-weight-h1-display)",
      ),
      "h1-display-max": fontSize(
        "posten-h1-display-max",
        "var(--hds-brand-font-weight-h1-display)",
      ),

      h1: fontSize("posten-h1", "var(--hds-brand-font-weight-h1)"),
      "h1-min": fontSize("posten-h1-min", "var(--hds-brand-font-weight-h1)"),
      "h1-max": fontSize("posten-h1-max", "var(--hds-brand-font-weight-h1)"),

      h2: fontSize("posten-h2", "var(--hds-brand-font-weight-h2)"),
      "h2-min": fontSize("posten-h2-min", "var(--hds-brand-font-weight-h2)"),
      "h2-max": fontSize("posten-h2-max", "var(--hds-brand-font-weight-h2)"),

      h3: fontSize("header-h3", "header-h3"),
      "h3-min": fontSize("header-h3-min", "header-h3"),
      "h3-max": fontSize("header-h3-max", "header-h3"),

      "h3-title": fontSize("header-h3-title", "header-h3-title"),
      "h3-title-min": fontSize("header-h3-title-min", "header-h3-title"),
      "h3-title-max": fontSize("header-h3-title-max", "header-h3-title"),

      body: fontSize("body", "body"),
      "body-min": fontSize("body-min", "body"),
      "body-max": fontSize("body-max", "body"),

      "body-title": fontSize("body title", "body title"),
      "body-title-min": fontSize("body title-min", "body title"),
      "body-title-max": fontSize("body title-max", "body title"),

      "body-small": fontSize("body small", "body small"),
      "body-small-min": fontSize("body small-min", "body small"),
      "body-small-max": fontSize("body small-max", "body small"),

      "body-small-title": fontSize("body small title", "body small title"),
      "body-small-title-min": fontSize("body small title-min", "body small title"),
      "body-small-title-max": fontSize("body small title-max", "body small title"),

      technical: fontSize("technical", "technical"),
      "technical-min": fontSize("technical-min", "technical"),
      "technical-max": fontSize("technical-max", "technical"),

      "technical-title": fontSize("technical title", "technical title"),
      "technical-title-min": fontSize("technical title-min", "technical title"),
      "technical-title-max": fontSize("technical title-max", "technical title"),

      caption: fontSize("caption", "caption"),
      "caption-title": fontSize("caption title", "caption title"),
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
    screens: tokens.breakpoint,
    opacity: {
      0: 0,
      ...tokens.opacity,
    },
    transitionTimingFunction: tokens["micro-animation"],
    transitionDuration: tokens["micro-animation-duration"],
    extend: {},
  },
  corePlugins: {
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
