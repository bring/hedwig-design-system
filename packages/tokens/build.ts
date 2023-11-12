/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync } from "node:fs";
import StyleDictionary from "style-dictionary-utils";
import { w3cTokenJsonParser } from "style-dictionary-utils/dist/parser/w3c-token-json-parser";
import { hedwigTypography } from "./transforms/typography";

// Handle $type, $value, $description
StyleDictionary.registerParser(w3cTokenJsonParser);

// Handle typography
StyleDictionary.registerTransform({
  name: "hedwig/typography",
  ...hedwigTypography,
});
const cssTransforms = [...StyleDictionary.transformGroup.css, "hedwig/typography", "shadow/css"];

function buildSharedCssVariables() {
  console.log("🤖 Building shared css variables");
  StyleDictionary.extend({
    source: ["tokens/shared.json"],
    platforms: {
      css: {
        prefix: "hds",
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
