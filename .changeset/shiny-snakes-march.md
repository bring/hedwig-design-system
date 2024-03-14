---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

:building_construction: update bundling and exports

The css package's main entry point is now all the css we have, the
components and all the side effects neeeded.

if anyone has any special requirments they can still import each
individual file if the wish.

The react package now imports that all in one css export in a single
entry point. An entry point without the css import is also available
