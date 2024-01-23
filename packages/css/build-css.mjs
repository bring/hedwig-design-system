// @ts-check
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { bundle, transform, browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import { globby } from "globby";

/**
 * A basic @extend implementation
 * @type {Pick<import("lightningcss").BundleOptions<{}>, "customAtRules" | "visitor">}
 */
const customExtend = {
  customAtRules: {
    extend: {
      prelude: "<url>",
    },
  },
  visitor: {
    Rule: {
      custom: {
        extend(rule) {
          const [file, className] = rule.prelude.value.url.split(":");
          const f = readFileSync(new URL(file, import.meta.url), "utf8");
          let result;
          transform({
            code: Buffer.from(f),
            filename: file,
            minify: false,
            visitor: {
              Rule(rule) {
                if (rule.type !== "style") return;
                const selectors = rule.value.selectors.flat(2);

                if (!result && selectors.some((s) => s.type === "class" && s.name === className)) {
                  result = {
                    ...rule,
                    value: { ...rule.value, selectors: [[{ type: "nesting" }]] },
                  };
                }
              },
            },
          });

          if (!result) throw new Error(`Could not find ${className} in ${file}`);
          return result;
        },
      },
    },
  },
};

/**
 * @param {string} path
 */
function bundleFile(path) {
  return bundle({
    filename: path,
    minify: true,
    sourceMap: true,
    targets: browserslistToTargets(browserslist(">= 0.25%")),

    drafts: {
      customMedia: true,
    },

    ...customExtend,
  });
}

const OUTDIR = new URL("./dist/", import.meta.url);

/** @param {URL} path */
function compileCss(path) {
  const filename = path.pathname.split("/").at(-1);
  if (!filename) throw new Error(`Invalid path: ${path}`);

  const { code, map } = bundleFile(path.pathname);
  writeFileSync(new URL(filename, OUTDIR), code);
  if (map) {
    writeFileSync(new URL(`${filename}.map`, OUTDIR), map);
  }

  return { code, map };
}

// Ensure ./dist exists
if (!existsSync(OUTDIR)) {
  mkdirSync(OUTDIR);
}

// Compile all css files found in src
const paths = await globby("./src/**/*.css");
for (const path of paths) {
  compileCss(new URL(path, import.meta.url));
}
