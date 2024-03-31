---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

:dizzy: animate the `tabs` marker

using pseudo selector for the animation, with `border-bottom` and `border-top` as the fallback and default.

This way we avoid any initial jittering while still getting the animation when the user clicks. The selected tab will be marked correctly while js waits to load. This is called progressive enhancement.

Animation technique inspired by Kevin Powell https://www.youtube.com/watch?v=h2AOXBeVrgI
