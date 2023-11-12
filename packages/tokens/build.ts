/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync } from "node:fs";
import StyleDictionary from "style-dictionary-utils";
import { customTypography } from "./lib/typography";
import { customTokensParser } from "./lib/parser";

const config = {
  cssVariablesPrefix: "hds",
};

// Custom tokens parser
StyleDictionary.registerParser(customTokensParser);

// Handle typography
StyleDictionary.registerTransform({
  name: "hedwig/typography",
  ...customTypography,
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
    source: ["tokens-source/shared.json"],
    platforms: {
      css: {
        prefix: config.cssVariablesPrefix,
        transforms: cssTransforms,
        files: [
          {
            destination: "tokens-output/variables/shared.css",
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
      include: ["tokens-source/shared.json"],
      source: [`tokens-source/brands/${brand}.json`],
      platforms: {
        css: {
          prefix: "hds",
          transforms: cssTransforms,
          files: [
            {
              filter: "isSource",
              destination: `tokens-output/variables/${brand}.css`,
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
  const postenCss = String(readFileSync(`${__dirname}/tokens-output/variables/posten.css`));
  const bringCss = String(readFileSync(`${__dirname}/tokens-output/variables/bring.css`));
  const sharedCss = String(readFileSync(`${__dirname}/tokens-output/variables/shared.css`));

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

  writeFileSync(`${__dirname}/tokens-output/variables/final.css`, final, "utf8");
}
buildFinalCssVariables();
