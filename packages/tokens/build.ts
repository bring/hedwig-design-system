/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync } from "node:fs";
import type { DesignTokens } from "style-dictionary-utils";
import StyleDictionary from "style-dictionary-utils";
import { w3cTokenJsonParser } from "style-dictionary-utils/dist/parser/w3c-token-json-parser";
import { hedwigTypography } from "./transforms/typography";

const config = {
  cssVariablesPrefix: "hds",
};

/**
 * Custom tokens parser
 * - Handle w3c token spec
 * - Apply the type property to all tokens
 */
StyleDictionary.registerParser({
  pattern: w3cTokenJsonParser.pattern,
  parse: (options) => {
    // Handle $type, $value, $description
    const result = w3cTokenJsonParser.parse(options) as DesignTokens;

    // Ensure type is set on all tokens,
    // by setting the parent type on every child.
    //
    // This is needed because the transformer matchers don't have access to the parent types
    // and thus will not be applied.
    // This is a shortcoming of the current version of style-dictionary
    function applyTypeToEachChild(obj: Partial<DesignTokens>, parentType?: string) {
      const type =
        (obj.type as string | undefined) ?? (obj.$type as string | undefined) ?? parentType;
      if (obj.value !== undefined) {
        // @ts-expect-error -- If value is set, it's safe to set type as well
        obj.type = type;
      }
      for (const child of Object.values(obj)) {
        if (typeof child === "object") {
          applyTypeToEachChild(child, type);
        }
      }
    }
    applyTypeToEachChild(result);
    return result;
  },
});

// Handle typography
StyleDictionary.registerTransform({
  name: "hedwig/typography",
  ...hedwigTypography,
});

const cssTransforms = [
  ...StyleDictionary.transformGroup.css,
  "fontFamily/css",
  "shadow/css",
  "cubicBezier/css",
  "hedwig/typography",
];

function buildSharedCssVariables() {
  console.log("🤖 Building shared css variables");
  StyleDictionary.extend({
    source: ["tokens/shared.json"],
    platforms: {
      css: {
        prefix: config.cssVariablesPrefix,
        transforms: cssTransforms,
        files: [
          {
            destination: "dist/variables/shared.css",
            format: "css/variables",
          },
        ],
      },
    },
  }).buildAllPlatforms();
}
buildSharedCssVariables();

function buildBrandCssVariables() {
  for (const brand of ["posten", "bring"]) {
    console.log(`🤖 Building ${brand} css variables`);
    StyleDictionary.extend({
      include: ["tokens/shared.json"],
      source: [`tokens/brands/${brand}.json`],
      platforms: {
        css: {
          prefix: "hds",
          transforms: cssTransforms,
          files: [
            {
              filter: "isSource",
              destination: `dist/variables/${brand}.css`,
              format: "css/variables",
              options: {
                outputReferences: false,
              },
            },
          ],
        },
      },
    }).buildAllPlatforms();
  }
}
buildBrandCssVariables();

function buildFinalCssVariables() {
  console.log("✨ Building final css variables");
  const postenCss = String(readFileSync(`${__dirname}/dist/variables/posten.css`));
  const bringCss = String(readFileSync(`${__dirname}/dist/variables/bring.css`));
  const sharedCss = String(readFileSync(`${__dirname}/dist/variables/shared.css`));

  function extractVariables(fromString: string) {
    const variables = fromString.match(/--.+/g);
    if (!variables) throw new Error("no variables extracted");
    return variables.map(String);
  }
  function printVariables(variables: string[]) {
    return variables.map((variable) => `  ${variable}`).join("\n");
  }

  const final = `
.hds-theme-posten, .hds-theme-bring {
${printVariables(extractVariables(sharedCss))}
}
.hds-theme-posten {
${printVariables(extractVariables(postenCss))}
}
.hds-theme-bring {
${printVariables(extractVariables(bringCss))}
}
`;

  writeFileSync(`${__dirname}/dist/variables/final.css`, final, "utf8");
}
buildFinalCssVariables();
