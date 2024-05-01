---
"@postenbring/hedwig-react": patch
---

:zap::heavy_minus_sign: navbar: remove `focus-trap-react` in favor of small inline utility using the `inert` property

the `focus-trap-react` package increased the bundle by whopping `25kb` gzipped. Good ridance...

`inert` has 96% coverage in norway as of writing, more than good enough.
