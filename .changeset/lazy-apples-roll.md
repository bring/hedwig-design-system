---
"@postenbring/hedwig-css": patch
---

:lipstick::wheelchair: new error styling for form components with black error text

also fixup border stuff:

- Remove default transparent border.
- Always border bottom
- Remove bottom border radius, matching figma
- Remove transition for border increase, it caused jank on firefox and safari
