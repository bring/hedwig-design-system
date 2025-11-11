/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync /*, unlinkSync*/ } from "node:fs";
import StyleDictionary from "style-dictionary-utils";
import { customTypography } from "./lib/typography";
import { customTokensParser } from "./lib/parser";
import { customFluidDimension } from "./lib/fluid-dimension";

const config = {
  cssVariablesPrefix: "hds",
};

// Custom tokens parser
StyleDictionary.registerParser(customTokensParser);

// Handle typography
StyleDictionary.registerTransform(customTypography);

// Handle fluid dimensions
StyleDictionary.registerTransform(customFluidDimension);

/**
 * CSS Variables output
 */
const cssTransforms = [
  ...StyleDictionary.transformGroup.css,
  "fontFamily/css",
  "shadow/css",
  "cubicBezier/css",
  "custom/typography",
  "custom/fluidDimension",
];
const forTailwindTransforms = [
  ...StyleDictionary.transformGroup.web,
  "name/cti/kebab",
  "shadow/css",
  "cubicBezier/css",
  "custom/fluidDimension",
];

function buildSharedCssVariables() {
  console.log("🤖 Building shared css variables");
  StyleDictionary.extend({
    source: ["tokens-source/shared.json"],
    platforms: {
      css: {
        options: {
          showFileHeader: false,
        },
        prefix: config.cssVariablesPrefix,
        transforms: cssTransforms,
        files: [
          {
            destination: "tokens-output/css/shared.css",
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
          options: {
            showFileHeader: false,
          },
          prefix: "hds",
          transforms: cssTransforms,
          files: [
            {
              filter: "isSource",
              destination: `tokens-output/css/${brand}.css`,
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

function buildThemeCssVariables() {
  for (const theme of ["dark", "light"]) {
    console.log(`🤖 Building ${theme} css variables`);
    StyleDictionary.extend({
      include: ["tokens-source/shared.json"],
      source: [`tokens-source/themes/${theme}.json`],
      platforms: {
        css: {
          options: {
            showFileHeader: false,
          },
          prefix: "hds",
          transforms: cssTransforms,
          files: [
            {
              filter: "isSource",
              destination: `tokens-output/css/${theme}.css`,
              format: "css/variables",
              options: {
                outputReferences: true,
              },
            },
          ],
        },
      },
    }).buildAllPlatforms();
  }
}
buildThemeCssVariables();

function buildColorCssVariables() {
  for (const color of ["bring"]) {
    console.log(`🤖 Building ${color} css variables`);
    StyleDictionary.extend({
      include: ["tokens-source/shared.json", "tokens-source/themes/dark.json"],
      source: [`tokens-source/colors/${color}.json`],
      platforms: {
        css: {
          options: {
            showFileHeader: false,
          },
          prefix: "hds",
          transforms: cssTransforms,
          files: [
            {
              filter: "isSource",
              destination: `tokens-output/css/colors/${color}.css`,
              format: "css/variables",
              options: {
                outputReferences: true,
              },
            },
          ],
        },
      },
    }).buildAllPlatforms();
  }
}
buildColorCssVariables();


function buildFinalCssVariables() {
  console.log("✨ Building final css variables");
  const postenCss = String(readFileSync(`${__dirname}/tokens-output/css/posten.css`));
  const bringCss = String(readFileSync(`${__dirname}/tokens-output/css/bring.css`));
  const sharedCss = String(readFileSync(`${__dirname}/tokens-output/css/shared.css`));
  //const lightCss = String(readFileSync(`${__dirname}/tokens-output/css/light.css`));
  //const darkCss = String(readFileSync(`${__dirname}/tokens-output/css/dark.css`));

  function extractVariables(fromString: string) {
    const variables = fromString.match(/--.+/g);
    if (!variables) throw new Error("no variables extracted");
    return variables.map(String);
  }
  function printVariables(variables: string[]) {
    return variables.map((variable) => `  ${variable}`).join("\n");
  }

  const final = `
:root {
${printVariables(extractVariables(sharedCss))}
}
:root, /* Default */
.hds-theme-posten {
${printVariables(extractVariables(postenCss))}
}
.hds-theme-bring {
${printVariables(extractVariables(bringCss))}
}
`;

  writeFileSync(`${__dirname}/tokens-output/css/tokens.css`, final, "utf8");
}
buildFinalCssVariables();
/*
function cssCleanup() {
  console.log("🧹 Cleanup after css building");
  // Delete css/bring.css, css/posten.css, css/shared.css
  const filesToDelete = ["bring", "posten", "shared"].map(
    (brand) => `${__dirname}/tokens-output/css/${brand}.css`,
  );
  for (const file of filesToDelete) {
    unlinkSync(file);
  }
}
cssCleanup();
*/
/**
 * Javascript and Json output
 */
StyleDictionary.extend({
  source: ["tokens-source/shared.json"],
  platforms: {
    javascript: {
      options: {
        showFileHeader: false,
      },
      transformGroup: "js",
      files: [
        {
          destination: "tokens-output/tokens.js",
          format: "javascript/es6",
          options: {
            outputStringLiterals: true,
          },
        },
        {
          destination: "tokens-output/tokens.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputStringLiterals: true,
          },
        },
      ],
    },

    tailwind: {
      options: {
        showFileHeader: false,
      },
      transforms: forTailwindTransforms,
      files: [
        {
          destination: "tokens-output/tw-tokens.json",
          format: "json/nested",
          options: {
            outputStringLiterals: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();
