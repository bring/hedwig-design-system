/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import StyleDictionary from "style-dictionary-utils";
import { customTypography } from "./lib/typography";
import { customTokensParser } from "./lib/parser";
import { customFluidDimension } from "./lib/fluid-dimension";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type JsonObject = Record<string, unknown>;

function readJsonObject(filePath: string): JsonObject {
  const parsed: unknown = JSON.parse(String(readFileSync(filePath, "utf8")));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`Expected a JSON object at ${filePath}`);
  }
  return parsed as JsonObject;
}

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
      include: ["tokens-source/shared-colors.json"],
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
                outputReferences: false,
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
  for (const color of ["bring", "posten", "neutral", "info", "success", "warning", "error"]) {
    console.log(`🤖 Building ${color} css variables`);
    StyleDictionary.extend({
      include: ["tokens-source/shared-colors.json", "tokens-source/themes/dark.json"],
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
              destination: `tokens-output/css/color-${color}.css`,
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
  const lightVariables = printVariables(
    extractVariables(String(readFileSync(`${__dirname}/tokens-output/css/light.css`))),
  );
  const darkVariables = printVariables(
    extractVariables(String(readFileSync(`${__dirname}/tokens-output/css/dark.css`))),
  );

  function extractVariables(fromString: string) {
    const variables = fromString.match(/--.+/g);
    if (!variables) throw new Error("no variables extracted");
    return variables.map(String);
  }

  function filterH1andH2Variables(fromString: string) {
    const variables = fromString.match(/--hds-typography-h1.+/g)?.map(String) ?? [];
    const h2Variables = fromString.match(/--hds-typography-h2.+/g)?.map(String) ?? [];
    return [...variables, ...h2Variables];
  }

  function printVariables(variables: string[]) {
    return variables.map((variable) => `  ${variable}`).join("\n");
  }
  function colorLayer(color: string, extraCss?: string) {
    const colorCss = String(readFileSync(`${__dirname}/tokens-output/css/color-${color}.css`));
    return `
@layer hds.theme.color {
[data-color="${color}"], [data-color="${color}"] [data-color-scheme] {
${printVariables(extractVariables(colorCss))}
${extraCss ? printVariables(extractVariables(extraCss)) : ""}
}}`;
  }

  const final = `
:root {
${printVariables(extractVariables(sharedCss))}
}
@layer hds.theme.color-scheme.light {
:root, [data-color-scheme="light"] {
${lightVariables}
  color-scheme: light;
}}
@media (prefers-color-scheme: light) {
  [data-color-scheme="auto"] {
${lightVariables}
  color-scheme: light;
}}
@layer hds.theme.color-scheme.dark {
[data-color-scheme="dark"] {
${darkVariables}
  color-scheme: dark;
}}
@media (prefers-color-scheme: dark) {
  [data-color-scheme="auto"] {
${darkVariables}
  color-scheme: dark;
}}
${colorLayer("bring", printVariables(filterH1andH2Variables(bringCss)))}
${colorLayer("posten", printVariables(filterH1andH2Variables(postenCss)))}
${colorLayer("neutral")}
${colorLayer("info")}
${colorLayer("success")}
${colorLayer("warning")}
${colorLayer("error")}
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

function cssCleanup() {
  console.log("🧹 Cleanup after css building");
  // Delete temporary css files
  const filesToDelete = [
    "bring",
    "posten",
    "shared",
    "dark",
    "light",
    "color-bring",
    "color-posten",
    "color-neutral",
    "color-info",
    "color-success",
    "color-warning",
    "color-error",
  ].map((brand) => `${__dirname}/tokens-output/css/${brand}.css`);
  for (const file of filesToDelete) {
    unlinkSync(file);
  }
}
cssCleanup();

/**
 * Javascript and Json output
 */
StyleDictionary.extend({
  include: ["tokens-source/shared-colors.json"],
  source: ["tokens-source/shared.json", "tokens-source/themes/light.json"],
  platforms: {
    javascript: {
      options: {
        showFileHeader: false,
      },
      transformGroup: "js",
      files: [
        {
          filter: "isSource",
          destination: "tokens-output/tokens.js",
          format: "javascript/es6",
          options: {
            outputStringLiterals: true,
          },
        },
        {
          filter: "isSource",
          destination: "tokens-output/tokens.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputStringLiterals: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

// Build dark theme tokens with remapped keys (colors-X → colors-X-dark) then append to main JS/TS outputs
const darkSourceRaw = readJsonObject(`${__dirname}/tokens-source/themes/dark.json`);
const darkSourceRemapped: JsonObject = {};
for (const [key, value] of Object.entries(darkSourceRaw)) {
  darkSourceRemapped[`${key}-dark`] = value;
}
// Write temp file to tokens-output (not watched) to avoid infinite loop
const darkTempSourcePath = `${__dirname}/tokens-output/dark-temp.json`;
writeFileSync(darkTempSourcePath, JSON.stringify(darkSourceRemapped, null, 2), "utf8");

StyleDictionary.extend({
  include: ["tokens-source/shared-colors.json"],
  source: ["tokens-output/dark-temp.json"],
  platforms: {
    javascript: {
      options: {
        showFileHeader: false,
      },
      transformGroup: "js",
      files: [
        {
          filter: "isSource",
          destination: "tokens-output/tokens-dark-temp.js",
          format: "javascript/es6",
          options: {
            outputStringLiterals: true,
          },
        },
        {
          filter: "isSource",
          destination: "tokens-output/tokens-dark-temp.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputStringLiterals: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

const darkTempJs = String(readFileSync(`${__dirname}/tokens-output/tokens-dark-temp.js`, "utf8"));
const darkTempDts = String(
  readFileSync(`${__dirname}/tokens-output/tokens-dark-temp.d.ts`, "utf8"),
);
const mainJs = String(readFileSync(`${__dirname}/tokens-output/tokens.js`, "utf8"));
const mainDts = String(readFileSync(`${__dirname}/tokens-output/tokens.d.ts`, "utf8"));
writeFileSync(`${__dirname}/tokens-output/tokens.js`, `${mainJs}\n${darkTempJs}`, "utf8");
writeFileSync(`${__dirname}/tokens-output/tokens.d.ts`, `${mainDts}\n${darkTempDts}`, "utf8");
unlinkSync(darkTempSourcePath);
unlinkSync(`${__dirname}/tokens-output/tokens-dark-temp.js`);
unlinkSync(`${__dirname}/tokens-output/tokens-dark-temp.d.ts`);

StyleDictionary.extend({
  include: ["tokens-source/shared-colors.json"],
  source: ["tokens-source/shared.json", "tokens-source/themes/light.json"],
  platforms: {
    tailwind: {
      options: {
        showFileHeader: false,
      },
      transforms: forTailwindTransforms,
      files: [
        {
          filter: "isSource",
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

StyleDictionary.extend({
  include: ["tokens-source/shared-colors.json"],
  source: ["tokens-source/themes/dark.json"],
  platforms: {
    tailwind: {
      options: {
        showFileHeader: false,
      },
      transforms: forTailwindTransforms,
      files: [
        {
          filter: "isSource",
          destination: "tokens-output/tw-tokens.dark.json",
          format: "json/nested",
          options: {
            outputStringLiterals: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

const twTokensPath = `${__dirname}/tokens-output/tw-tokens.json`;
const twTokensDarkPath = `${__dirname}/tokens-output/tw-tokens.dark.json`;
const twTokens = readJsonObject(twTokensPath);
const twTokensDark = readJsonObject(twTokensDarkPath);
const sharedTokensSource = readJsonObject(`${__dirname}/tokens-source/shared.json`);
const lightThemeSource = readJsonObject(`${__dirname}/tokens-source/themes/light.json`);
const darkThemeSource = readJsonObject(`${__dirname}/tokens-source/themes/dark.json`);

const semanticColorGroups = new Set([
  "colors-bring",
  "colors-posten",
  "colors-neutral",
  "colors-warning",
  "colors-success",
  "colors-info",
  "colors-error",
]);

const generatedGroupTypes: Record<string, string> = {
  "font-size": "dimension",
  "line-height": "dimension",
  "font-weight": "number",
  "border-radius": "dimension",
};

function applyGroupMetadata(
  target: Record<string, unknown>,
  key: string,
  source: Record<string, unknown>,
) {
  const sourceValue = source[key];
  const targetValue = target[key];
  if (
    !sourceValue ||
    typeof sourceValue !== "object" ||
    !targetValue ||
    typeof targetValue !== "object"
  ) {
    return;
  }

  const sourceGroup = sourceValue as Record<string, unknown>;
  const targetGroup = targetValue as Record<string, unknown>;

  if ("$type" in sourceGroup) {
    targetGroup.$type = sourceGroup.$type;
  }
  if ("_deprecated" in sourceGroup) {
    targetGroup._deprecated = sourceGroup._deprecated;
  }
}

function orderGroupWithTypeFirst(group: Record<string, unknown>) {
  if (!("$type" in group)) {
    return group;
  }

  const { $type, _deprecated, ...rest } = group;
  return {
    $type,
    ...(_deprecated === undefined ? {} : { _deprecated }),
    ...rest,
  };
}

for (const key of Object.keys(sharedTokensSource)) {
  applyGroupMetadata(twTokens, key, sharedTokensSource);
}

for (const key of Object.keys(lightThemeSource)) {
  applyGroupMetadata(twTokens, key, lightThemeSource);
}

for (const [key, type] of Object.entries(generatedGroupTypes)) {
  if (key in twTokens && typeof twTokens[key] === "object" && twTokens[key] !== null) {
    const group = twTokens[key] as Record<string, unknown>;
    if (!("$type" in group) && !("type" in group)) {
      group.$type = type;
    }
  }
}

for (const key of semanticColorGroups) {
  if (key in twTokens && typeof twTokens[key] === "object" && twTokens[key] !== null) {
    const existing = twTokens[key] as JsonObject;
    twTokens[key] = {
      colorScheme: "light",
      ...existing,
    };
  }
}

for (const [key, value] of Object.entries(twTokensDark)) {
  const darkKey = `${key}-dark`;
  const valueObj =
    typeof value === "object" && value !== null && !Array.isArray(value)
      ? (value as JsonObject)
      : {};
  twTokens[darkKey] = {
    colorScheme: "dark",
    ...valueObj,
  };
  applyGroupMetadata(twTokens, darkKey, {
    [darkKey]: darkThemeSource[key],
  });
}

for (const [key, value] of Object.entries(twTokens)) {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    twTokens[key] = orderGroupWithTypeFirst(value as Record<string, unknown>);
  }
}

writeFileSync(twTokensPath, JSON.stringify(twTokens, null, 2), "utf8");
unlinkSync(twTokensDarkPath);
