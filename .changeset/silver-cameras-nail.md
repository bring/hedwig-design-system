---
"@postenbring/hedwig-react": patch
---

:boom: react: don't import the css package by default in the react package.

It's up the consumer to make sure the css is loaded. Usaully this is as simple as importing it.

This has caused a lot of small issues when using HDS, giving more explicit controll looks to be the better option.
