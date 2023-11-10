/* eslint-disable no-console -- script */
import { readFileSync, writeFileSync } from "node:fs";
import StyleDictionaryPackage from "style-dictionary";

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

type Brand = "posten" | "bring";
const brands: Brand[] = ["posten", "bring"];
function getStyleDictionaryConfig(brand: Brand) {
  return {
    source: ["tokens/shared.json", `tokens/brands/${brand}.json`],
    platforms: {
      web: {
        prefix: "hds",
        transformGroup: "css",
        buildPath: `dist/web/${brand}/`,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

brands.forEach(function mapBrand(brand) {
  console.log("\n==============================================");
  console.log(`\nProcessing:  [${brand}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand));

  StyleDictionary.buildAllPlatforms();

  console.log("\nEnd processing");
});

const bringCss = String(readFileSync("./dist/web/bring/tokens.css"));
const postenCss = String(readFileSync("./dist/web/posten/tokens.css"));

const final =
  bringCss.replace(":root {", ".hds-theme-bring {") +
  postenCss.replace(":root {", ".hds-theme-posten {");

writeFileSync("./dist/web/tokens.css", final, "utf8");

console.log("\n==============================================");
console.log("\nBuild completed!");
