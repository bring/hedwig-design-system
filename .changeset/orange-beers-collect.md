---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

Clarify usage of Card components

The Card component should always be a clickable link, but the entire card should not be the actual link.
Confused? Okay. So, to make life better for users with a screen reader, we should only make the heading
of the card an actual link. However, we still want the entire card to be clickable for other users. We
achieve this with some clever CSS.

This also means the Card component can no longer have `as="a"`, and this is now prohibited through types.
Futhermore the Card.Body.Header.Title component now requires an `as` prop to help HDS consumers understand
they need to make this component a link of some sort. We also made the `as` prop required on Card.Body.Header
to force consumers to set an appropriate heading level.

We also made the little card arrow move on hover now :-)
