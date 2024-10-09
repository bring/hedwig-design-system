---
"@postenbring/hedwig-react": patch
---

:bug: Fix screen readers not picking up `Checkbox` error messages due to conditional rendering

the `aria-live` attribute requires that the element exists in the DOM already for it to announce changes
