# @postenbring/hedwig-css

## 0.0.48

### Patch Changes

- c112dc7: :sparkles: make the posibility in show-more, to show less an explicit variant
- 1aa4278: More spacing tweaks on radio/check, fix radio dot color, remove disabled from stories

  More spacing tweaks on radiobuttons and checkboxes to make non-bounding-box variant align correctly.

  Radiobutton dot color was set to Signature, just like in Figma. However, it turns out Figma was wrong.

  Remove disabled variants from stories as we don't want to encourage using them.

- 4be7acc: :building_construction: update bundling and exports

  The css package's main entry point is now all the css we have, the
  components and all the side effects neeeded.

  if anyone has any special requirments they can still import each
  individual file if the wish.

  The react package now imports that all in one css export in a single
  entry point. An entry point without the css import is also available

- 0048318: Remove excessive padding and make radio/check label easier on screen readers
- f47d3d9: :recycle: use css inlined cheveron icon for accordion
- 54a0b68: :fire: remove no-bullets variant from the list component.

  people should rather use the ordered or unordered list components with the visual counter or bullet points.

  if the need something extra they need to style that themself using `ul`

  the special link-list component does just that.

  decided during hedwig meeting 14. march 2024

## 0.0.47

### Patch Changes

- 4a13d0d: :construction: implement a Skeleton component
- 891ce74: :lipstick: reset top margin on first element in StyledHtml

## 0.0.46

### Patch Changes

- 0b0d3de: :sparkles: Step indicator and Show more components

## 0.0.45

### Patch Changes

- affbc87: :lipstick: ensure correct default font for StyledHtml

## 0.0.44

### Patch Changes

- 3dc1334: Clarify usage of Card components

  The Card component should always be a clickable link, but the entire card should not be the actual link.
  Confused? Okay. So, to make life better for users with a screen reader, we should only make the heading
  of the card an actual link. However, we still want the entire card to be clickable for other users. We
  achieve this with some clever CSS.

  This also means the Card component can no longer have `as="a"`, and this is now prohibited through types.
  Futhermore the Card.Body.Header.Title component now requires an `as` prop to help HDS consumers understand
  they need to make this component a link of some sort. We also made the `as` prop required on Card.Body.Header
  to force consumers to set an appropriate heading level.

  We also made the little card arrow move on hover now :-)

- 6f998d3: :truck: rename `Prose` -> `StyledHtml`

  Not a perfect name, but a little better. As decided during a hedwig team meeting.

## 0.0.43

### Patch Changes

- b350cc2: Remove Container margin 0 top and bottom

## 0.0.42

### Patch Changes

- f5230a9: :iphone: set max width of modal to small and add some horisontal spacing when small

## 0.0.41

### Patch Changes

- 8605454: Add Fieldset, extract ErrorMessage and group form stuff

## 0.0.40

### Patch Changes

- 63123e7: :recycle: wrap Input, Textarea and Select in a new common wrapper InputGroup
- 6b8aadb: ## Accordion improvments

  ### 💫 Animations

  The open / close transitions are now animated. With just pure css 🎉

  ### Remove `variant="single" | "multiple"` in favor of `open` & `onOpenChange`

  I think a single accordion is a rare use case. In those cases it's easy enough to implement yourself, taking full control of the accordion

  ### Rename `trigger` -> `header`

  I saw that all the other systems called it this, so just renamed

  ### Support `indent` prop

  When you don't want left padding on the content. We have a case for this in `open-tracking`.

- 2cb7e81: :recycle: remove `-brand` prefix from tokens and rename `header-h3` -> `h3`
- Updated dependencies [2cb7e81]
  - @postenbring/hedwig-tokens@0.0.11

## 0.0.39

### Patch Changes

- 0509d61: :memo: Update docs
- Updated dependencies [0509d61]
  - @postenbring/hedwig-tokens@0.0.10

## 0.0.38

### Patch Changes

- f8466dc: :lipstick: Reset Card styles when wrapped as an `<a>` or a hedwig `<Link />`.

## 0.0.37

### Patch Changes

- 779c39d: :sparkles::construction: implement wysiwyg/prose/richtext/dynamic-content component. using `@extend` in css to re-use styles
- b5328a0: :lipstick: support nested lists and wrap margin selector in :where(\*) to lower it's specifity, allowing it to be overridden
- 0e936c0: :recycle: use @custom-media queries

## 0.0.36

### Patch Changes

- a1f5a96: Accessibility adjustments on Card component

## 0.0.35

### Patch Changes

- :technologist: make select variant optional, default to the default style

## 0.0.34

### Patch Changes

- 1d0bfa4: :lipstick: update Input with fixed height `58px` to match figma sketches

  support composing the tracking number search

## 0.0.33

### Patch Changes

- 58996a7: :lipstick: make container always use 100% width

  else we get into situations where the content inside get's smaller than we wish for

## 0.0.32

### Patch Changes

- 9c7eafd: First version of `<Card/>` component.

## 0.0.31

### Patch Changes

- 5b5676c: Added styling for flex, pretty much a copy of whats in Hedwig today
- Updated dependencies [11e31f5]
  - @postenbring/hedwig-tokens@0.0.9

## 0.0.30

### Patch Changes

- 5f8dbd4: styling for containers, and some updates to example app
- 4e7c846: Make body font specificity align with legacy Hedwig
- Updated dependencies [6f1f198]
  - @postenbring/hedwig-tokens@0.0.8

## 0.0.29

### Patch Changes

- aabf5e9: :lipstick: update badge styling to match figma sketches

## 0.0.28

### Patch Changes

- e614cc1: :lipstick: fixup spacing issues for description list

## 0.0.27

### Patch Changes

- 85d5d12: :building_construction: update to the expected prop spreading api

## 0.0.26

### Patch Changes

- d1a73c5: :lipstick: update accordion divider height and color to match figma (again)

## 0.0.25

### Patch Changes

- e387d19: :lipstick: update accordion divider height and color to match figma

## 0.0.24

### Patch Changes

- 7a2c020: :recycle: Rename `Dropdown` -> `Select` and rewrite to match `Input`
- 738f520: Release Textarea styling and component
- 8a2ea33: :truck: rename badge variant `primary` -> `lighter`
- 08ff783: Renamed package Dropdown to Select, added some styling
- 2d2945d: :arrow_up: bump dependencies
- Updated dependencies [2d2945d]
  - @postenbring/hedwig-tokens@0.0.7

## 0.0.23

### Patch Changes

- 28543d9: Finished initial Input styling and component

## 0.0.22

### Patch Changes

- a03703a: :lipstick: fix border width on button

## 0.0.21

### Patch Changes

- 89ca3d3: :lipstick: set `min-height` instead of `height` on buttons. The text inside might wrap, usually on smaller devices

## 0.0.20

### Patch Changes

- 7b07be1: :lipstick: make `<a>` styled as button have centered text, as is the button style

## 0.0.19

### Patch Changes

- 4695c56: :lipstick: fix description term styling

## 0.0.18

### Patch Changes

- Updated dependencies [5011816]
  - @postenbring/hedwig-tokens@0.0.6

## 0.0.17

### Patch Changes

- b5cc49d: :lipstick: drag element selectors out of :root

## 0.0.16

### Patch Changes

- 8ff1148: :lipstick: default typography for h1,h2,h3,h4,h5,h6
- 54e525a: Adding baseline component for `<Tabs/>`

## 0.0.15

### Patch Changes

- 9dd2249: override h1,h2,h3,h4,h5,h6 font family

## 0.0.14

### Patch Changes

- c5597ea: ✨ One `Posten Sans` font-family with multiple `font-weight` for choosing the correct font file to use
- 5d814e8: Added dropdown component
- Updated dependencies [c5597ea]
  - @postenbring/hedwig-tokens@0.0.5

## 0.0.13

### Patch Changes

- 67d4df7: :construction: add WIP modal

## 0.0.12

### Patch Changes

- 6d01b04: Adding component for Bread > Crumbs > Are > Here

## 0.0.11

### Patch Changes

- 2e340d0: :lipstick: update list styling

## 0.0.10

### Patch Changes

- Updated dependencies [20c62c5]
  - @postenbring/hedwig-tokens@0.0.4

## 0.0.9

### Patch Changes

- 090a3e5: Added proper icon for accordion (svg)

## 0.0.8

### Patch Changes

- b49b65b: :sparkles: make Link overrideable, so it can be used as a button

## 0.0.7

### Patch Changes

- 811c3b0: :lipstick: add `Message.Title` and `Message.Description` helper components to `Message` & Fix 2px missing margin for the first text so it matches the icon
- 8baa704: ✨ Button Icon variant and ✨ Button as a link

## 0.0.6

### Patch Changes

- correctly include typed-classname in npm package

## 0.0.5

### Patch Changes

- fa82315: use tokens/variables instead of hardcoded dimensions whenever applicable
- 179fcb0: Adding description lists to the mix for hedwig components
- f26bdb2: Adding support for List components!
- 54cdfb5: Adding new component for Accordion
- cc4c78c: Various minor technical changes
- d219982: :sparkles: Box and Message component
- 1e0a73f: Add Input component and styling

## 0.0.4

### Patch Changes

- d0febe5: fix badge & add some comments for button tokens
- 2bb6767: fix typed-classname
- 1a909d1: Added badge component
- 8cdb781: setup stylelint for css package

## 0.0.3

### Patch Changes

- b016d25: :technologist: add helper type helper for the css classnames
- e36751d: :construction_worker: begin on typography module
- fa20f99: fix button sizing based on sketches in figma/zeroheight

## 0.0.2

### Patch Changes

- 1d84f3c: :sparkles: add Link component
- 9d31ff5: fix font, transition, and responsive mobile width for button
- a0a4916: use updated tokens and add base styling

## 0.0.1

### Patch Changes

- start publishing
