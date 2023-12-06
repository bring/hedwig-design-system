// @ts-check
import { readFile, writeFile } from "node:fs/promises";
import browserslist from "browserslist";
import { transform, browserslistToTargets } from "lightningcss";

// Read the input file
const file = await readFile(new URL("./dist/index.css", import.meta.url), "utf8");

// Keyframes does not support nesting
// so we need to extract them and put them outside the scope we create
const [fileWithoutKeyframes, keyframes] = extractKeyframes(file);

// Finally write the scoped file
const scopedFile = `.kp-decorator-header-and-footer { ${fileWithoutKeyframes} }${keyframes}`;
const { code } = transform({
  filename: "scoped.css",
  code: Buffer.from(scopedFile),
  targets: browserslistToTargets(browserslist(">= 0.25%")),
  minify: true,
});

await writeFile(new URL("./dist/scoped.css", import.meta.url), code);

/**
 * Extracts keyframes from a CSS string
 *
 * @param {string} fromContent
 */
function extractKeyframes(fromContent) {
  /** @param {string} content */
  function findKeyframe(content) {
    // eslint-disable-next-line prefer-named-capture-group -- It's ok
    const start = content.search(/(@keyframes|@-webkit-keyframes)/);
    if (start === -1) return false;

    let end = -1;
    let c = 0;
    for (let i = start; i < content.length; i++) {
      if (content[i] === "{") {
        c += 1;
      } else if (content[i] === "}") {
        c -= 1;

        if (c === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) return false;
    return [start, end];
  }

  let result = fromContent;
  let keyframes = "";

  let currentKeyframe;
  while ((currentKeyframe = findKeyframe(result))) {
    keyframes += result.slice(currentKeyframe[0], currentKeyframe[1] + 1);
    result = result.slice(0, currentKeyframe[0]) + result.slice(currentKeyframe[1] + 1);
  }

  return [result, keyframes];
}
