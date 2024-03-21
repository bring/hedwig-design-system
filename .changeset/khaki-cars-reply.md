---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

Fix typed-classname CJS issue

Because we offer both CJS and ESM version of hedwig-react, we must also offer
a CJS (index.js) and ESM (index.mjs) version of typed-classname, so we can
accommodate both modes of building apps which use HDS.
