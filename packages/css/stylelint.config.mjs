import * as url from "node:url";

/**
 * @typedef {import('stylelint').Config} Config
 * @type {Config}
 */
// eslint-disable-next-line import/no-default-export -- Config
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-value-no-unknown-custom-properties"],
  rules: {
    // Custom property pattern kebab-case, with optional underscore prefix for internal use
    "custom-property-pattern": [
      "^([a-z_][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: "Expected custom property name to be kebab-case",
        severity: "warning",
      },
    ],
    // We use postcss-extend-rule to reuse classes
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend"],
      },
    ],

    // Make sure we don't misspell the tokens
    "csstools/value-no-unknown-custom-properties": [
      true,
      {
        importFrom: [
          url.fileURLToPath(new URL("../tokens/tokens-output/css/tokens.css", import.meta.url)),
        ],
      },
    ],

    // Recommended to be disabled when using a lot of nesting
    "no-descending-specificity": [null],

    // Copied from: https://github.com/humanmade/coding-standards/issues/193#issuecomment-1405099508
    /** selector class pattern must match [BEM CSS](https://en.bem.info/methodology/css) - [Regex](https://regexr.com/3apms) */
    "selector-class-pattern": [
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
      {
        /** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
        resolveNestedSelectors: true,
        /** Custom message */
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
  },
};
