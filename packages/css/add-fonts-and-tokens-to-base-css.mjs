// @ts-check
import { readFile, writeFile } from "node:fs/promises";
import browserslist from "browserslist";
import { transform, browserslistToTargets } from "lightningcss";

const fontsCss = await readFile(new URL("./node_modules/@postenbring/hedwig-tokens/tokens-output/css/fonts.css", import.meta.url), "utf8");
const tokensCss = await readFile(new URL("./node_modules/@postenbring/hedwig-tokens/tokens-output/css/tokens.css", import.meta.url), "utf8");

const oldFontsPath = "../../assets/fonts"

// Relative to the ./dist folder
const newFontsPath = "../node_modules/@postenbring/hedwig-tokens/assets/fonts"
const resultFontsCss = fontsCss.replace(new RegExp(oldFontsPath, 'g'), newFontsPath)

const finalCss = resultFontsCss + tokensCss;

const baseCss = await readFile(new URL("./dist/base.css", import.meta.url), "utf8");

const resultContent = finalCss + baseCss;

const resultFileName = "base.css"

const { code } = transform({
  filename: resultFileName,
  code: Buffer.from(resultContent),
  targets: browserslistToTargets(browserslist(">= 0.25%")),
  minify: true,
});

const resultFilePath = `./dist/${resultFileName}`


await writeFile(new URL(resultFilePath, import.meta.url), code);
