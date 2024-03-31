---
"@postenbring/hedwig-css": patch
---

:lipstick::recycle: use native `text-decoration` for link underlines

using `text-decoration-thickness` and `text-underline-offset`, two properties that where not supported when the link component in hedwig legacy was originally made.
