# @postenbring/hedwig-tokens [![npm version](https://badge.fury.io/js/@postenbring%2Fhedwig-tokens.svg)](https://badge.fury.io/js/@postenbring%2Fhedwig-tokens)

Design tokens for [Hedwig Design System](https://github.com/bring/hedwig-design-system).

Font-size tokens use `rem`, with values equivalent to the original pixel sizes at a 16px root
font size. At that root size, fluid sizes interpolate between their bounds over viewports from
300px to 1200px. Their viewport-dependent increment uses the 16px baseline; changing the root
size scales the `rem` bounds but not that increment.
