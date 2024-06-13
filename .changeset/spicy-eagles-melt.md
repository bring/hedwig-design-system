---
"@postenbring/hedwig-css": patch
---

:lipstick: list: don't use `display: flex`

margin collapse does not propegate outwards. This makes rendering `p` inside an `ul li` take more space than needed

https://stackoverflow.com/a/43882888
