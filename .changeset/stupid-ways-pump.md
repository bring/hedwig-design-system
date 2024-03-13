---
"@postenbring/hedwig-react": patch
---

:hammer: use `experimentalDts` to build typescript declerations for the react package

The normal `dts` flag causes an out of memory exception when running on CI

Could probably be changing up our build, e.g. fewer entry points, only bundle for ESM. If the new declerations causes problems we will have to do that
