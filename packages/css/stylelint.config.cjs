/**
 * @typedef {import('stylelint').Config} Config
 * @type {Config}
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-value-no-unknown-custom-properties"],
  rules: {
    /** Make sure we don't misspell the tokens */
    "csstools/value-no-unknown-custom-properties": [
      true,
      {
        importFrom: [`${__dirname}/../tokens/tokens-output/css/tokens.css`],
      },
    ],

    // Disabled for now, since we use both css @import url() and scss @import "" at the same time
    "import-notation": [null],

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
