// @ts-check
import { readFile, writeFile } from "node:fs/promises";
import browserslist from "browserslist";
import { transform, browserslistToTargets } from "lightningcss";

// Read the input file
const file = await readFile(new URL("./dist/index.css", import.meta.url), "utf8");

const scopedFile = `.kp-decorator-header-and-footer { ${file} }`;

const { code } = transform({
  filename: "scoped.css",
  code: Buffer.from(scopedFile),
  targets: browserslistToTargets(browserslist(">= 0.25%")),
  minify: true,
});

await writeFile(new URL("./dist/scoped.css", import.meta.url), code);
