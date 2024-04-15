---
"@postenbring/hedwig-css": patch
---

:bug: fix building nested `@extend`'s

when extending a class that where also extending something else, it did not follow the path. Leading to the final bundle having `@extend` references.
