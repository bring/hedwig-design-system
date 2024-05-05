---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

:recycle: big refactor removing `as` prop in favor of `asChild`

For reasoning see Digdir/Designsystemet docummentation on the subject

- https://www.designsystemet.no/grunnleggende/for-utviklere/komposisjon
- https://github.com/digdir/designsystemet/issues/1124

Other changes

- Adding `forwardRef` on all components
- Only one level of dot notation `Card.MediaImg` vs `Card.Media.Img`
