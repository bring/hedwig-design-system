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
 *
 * @param {Record<string, unknown>} obj
 * @param {string} key
 */
function omitKey(obj, key) {
  const { [key]: _, ...rest } = obj;
  return rest;
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
    },
    lineHeight: tokens["line-height"],
    fontSize: {
      "h1-display": fontSize("posten-h1-display", "var(--hds-font-weight-h1-display)"),
      "h1-display-min": fontSize("posten-h1-display-min", "var(--hds-font-weight-h1-display)"),
      "h1-display-max": fontSize("posten-h1-display-max", "var(--hds-font-weight-h1-display)"),

      h1: fontSize("posten-h1", "var(--hds-font-weight-h1)"),
      "h1-min": fontSize("posten-h1-min", "var(--hds-font-weight-h1)"),
      "h1-max": fontSize("posten-h1-max", "var(--hds-font-weight-h1)"),

      h2: fontSize("posten-h2", "var(--hds-font-weight-h2)"),
      "h2-min": fontSize("posten-h2-min", "var(--hds-font-weight-h2)"),
      "h2-max": fontSize("posten-h2-max", "var(--hds-font-weight-h2)"),

      h3: fontSize("h3", "h3"),
      "h3-min": fontSize("h3-min", "h3"),
      "h3-max": fontSize("h3-max", "h3"),

      "h3-title": fontSize("h3-title", "h3-title"),
      "h3-title-min": fontSize("h3-title-min", "h3-title"),
      "h3-title-max": fontSize("h3-title-max", "h3-title"),

      body: fontSize("body", "body"),
      "body-min": fontSize("body-min", "body"),
      "body-max": fontSize("body-max", "body"),

      "body-title": fontSize("body-title", "body-title"),
      "body-title-min": fontSize("body-title-min", "body-title"),
      "body-title-max": fontSize("body-title-max", "body-title"),

      "body-small": fontSize("body-small", "body-small"),
      "body-small-min": fontSize("body-small-min", "body-small"),
      "body-small-max": fontSize("body-small-max", "body-small"),

      "body-small-title": fontSize("body-small-title", "body-small-title"),
      "body-small-title-min": fontSize("body-small-title-min", "body-small-title"),
      "body-small-title-max": fontSize("body-small-title-max", "body-small-title"),

      technical: fontSize("technical", "technical"),
      "technical-min": fontSize("technical-min", "technical"),
      "technical-max": fontSize("technical-max", "technical"),

      "technical-title": fontSize("technical-title", "technical-title"),
      "technical-title-min": fontSize("technical-title-min", "technical-title"),
      "technical-title-max": fontSize("technical-title-max", "technical-title"),

      caption: fontSize("caption", "caption"),
      "caption-title": fontSize("caption-title", "caption-title"),
    },
    colors: {
      // The brand specifc tokens are themeable,
      // so they must be referenced by css variables
      // @deprecated Use the new color scheme instead
      signature: "var(--hds-colors-signature)",
      // @deprecated Use the new color scheme instead
      darker: "var(--hds-colors-darker)",
      // @deprecated Use the new color scheme instead
      dark: "var(--hds-colors-dark)",
      // @deprecated Use the new color scheme instead
      light: "var(--hds-colors-light)",
      // @deprecated Use the new color scheme instead
      lighter: "var(--hds-colors-lighter)",
      // @deprecated Use the new color scheme instead
      "signature-hover": "var(--hds-colors-signature-hover)",
      // @deprecated Use the new color scheme instead
      "light-hover": "var(--hds-colors-light-hover)",

      // @deprecated Use the new color scheme instead
      ...expandAndPrefix(tokens["ui-colors"], "ui-"),
      // @deprecated Use the new color scheme instead
      ...expandAndPrefix(tokens["dark-mode-colors"], "dm-"),

      // New color scheme — brand-themed (resolves via active brand)
      "hds-bg-default": "var(--hds-colors-bg-default)",
      "hds-bg-tinted": "var(--hds-colors-bg-tinted)",
      "hds-surface-default": "var(--hds-colors-surface-default)",
      "hds-surface-tinted": "var(--hds-colors-surface-tinted)",
      "hds-surface-hover": "var(--hds-colors-surface-hover)",
      "hds-surface-active": "var(--hds-colors-surface-active)",
      "hds-border-default": "var(--hds-colors-border-default)",
      "hds-border-strong": "var(--hds-colors-border-strong)",
      "hds-text-subtle": "var(--hds-colors-text-subtle)",
      "hds-text-default": "var(--hds-colors-text-default)",
      "hds-base-default": "var(--hds-colors-base-default)",
      "hds-base-hover": "var(--hds-colors-base-hover)",
      "hds-base-active": "var(--hds-colors-base-active)",
      "hds-base-contrast-default": "var(--hds-colors-base-contrast-default)",

      // Neutral colors
      "hds-neutral-bg-default": "var(--hds-colors-neutral-bg-default)",
      "hds-neutral-bg-tinted": "var(--hds-colors-neutral-bg-tinted)",
      "hds-neutral-surface-default": "var(--hds-colors-neutral-surface-default)",
      "hds-neutral-surface-tinted": "var(--hds-colors-neutral-surface-tinted)",
      "hds-neutral-surface-hover": "var(--hds-colors-neutral-surface-hover)",
      "hds-neutral-surface-active": "var(--hds-colors-neutral-surface-active)",
      "hds-neutral-border-default": "var(--hds-colors-neutral-border-default)",
      "hds-neutral-border-strong": "var(--hds-colors-neutral-border-strong)",
      "hds-neutral-text-subtle": "var(--hds-colors-neutral-text-subtle)",
      "hds-neutral-text-default": "var(--hds-colors-neutral-text-default)",
      "hds-neutral-base-default": "var(--hds-colors-neutral-base-default)",
      "hds-neutral-base-hover": "var(--hds-colors-neutral-base-hover)",
      "hds-neutral-base-active": "var(--hds-colors-neutral-base-active)",
      "hds-neutral-base-contrast-default": "var(--hds-colors-neutral-base-contrast-default)",

      // Semantic colors
      "hds-error-surface-default": "var(--hds-colors-error-surface-default)",
      "hds-error-border-default": "var(--hds-colors-error-border-default)",
      "hds-error-border-strong": "var(--hds-colors-error-border-strong)",
      "hds-error-text-default": "var(--hds-colors-error-text-default)",
      "hds-error-base-default": "var(--hds-colors-error-base-default)",
      "hds-error-base-contrast-default": "var(--hds-colors-error-base-contrast-default)",

      "hds-warning-surface-default": "var(--hds-colors-warning-surface-default)",
      "hds-warning-border-default": "var(--hds-colors-warning-border-default)",
      "hds-warning-border-strong": "var(--hds-colors-warning-border-strong)",
      "hds-warning-text-default": "var(--hds-colors-warning-text-default)",
      "hds-warning-base-default": "var(--hds-colors-warning-base-default)",
      "hds-warning-base-contrast-default": "var(--hds-colors-warning-base-contrast-default)",

      "hds-success-surface-default": "var(--hds-colors-success-surface-default)",
      "hds-success-border-default": "var(--hds-colors-success-border-default)",
      "hds-success-border-strong": "var(--hds-colors-success-border-strong)",
      "hds-success-text-default": "var(--hds-colors-success-text-default)",
      "hds-success-base-default": "var(--hds-colors-success-base-default)",
      "hds-success-base-contrast-default": "var(--hds-colors-success-base-contrast-default)",

      "hds-info-surface-default": "var(--hds-colors-info-surface-default)",
      "hds-info-border-default": "var(--hds-colors-info-border-default)",
      "hds-info-border-strong": "var(--hds-colors-info-border-strong)",
      "hds-info-text-default": "var(--hds-colors-info-text-default)",
      "hds-info-base-default": "var(--hds-colors-info-base-default)",
      "hds-info-base-contrast-default": "var(--hds-colors-info-base-contrast-default)",
    },
    spacing: {
      0: 0,
      ...tokens.spacing,
      DEFAULT: tokens.spacing["24"],
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
      DEFAULT: tokens["border-radius"]["_"],
      ...omitKey(tokens["border-radius"], "_"),
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
    transitionTimingFunction: {
      DEFAULT: tokens["micro-animation"]["easing-normal"],
      ...tokens["micro-animation"],
    },
    transitionDuration: {
      DEFAULT: tokens["micro-animation-duration"].normal,
      ...tokens["micro-animation-duration"],
    },
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
