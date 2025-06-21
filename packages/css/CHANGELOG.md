# @postenbring/hedwig-css

## 2.2.1

### Patch Changes

- cbb8105: Update Box radius and padding

## 2.2.0

### Minor Changes

- 85d26a2: Add Alert component

### Patch Changes

- d9fb852: Make Slim and Miniature cards links align when placed side-by-side

## 2.1.4

### Patch Changes

- 6ac09af: adjustment to border color on hover
- 3b65270: adjusted padding, new sizenames
- 724a528: new radius on figure

## 2.1.3

### Patch Changes

- 951924d: Set width of navbar menu label, by pure CSS instead of JS

## 2.1.2

### Patch Changes

- ceae386: Add and style .hds-card--slim class: it's the only card variant that needs margin-bottom on the media element. Remove overrides on other variants.

## 2.1.1

### Patch Changes

- 03987ec: Center the button contents for all buttons
- Updated dependencies [5fadb01]
  - @postenbring/hedwig-tokens@1.3.1

## 2.1.0

### Minor Changes

- 5fecc71: Added component ButtonList

### Patch Changes

- 1eb5642: Remove inline-block for buttons in cards. Update fullwidth-card example with buttonlist.

## 2.0.0

### Major Changes

- 2b7f2ae: Use icons with no padding in buttons

### Minor Changes

- ece5bcb: Buttons update

  Bring the buttons into the new 2.0 design

- accfaff: Fullwidth-card: optional disabling of the cropping behavior of images in fullwidth-cards
- fb067fa: Update token colors for posten

### Patch Changes

- 064012d: Bump the minor-and-patch group across 1 directory with 36 updates
- d980967: Bump the minor-and-patch group with 16 updates
- d5f7e24: Updated link colors and icon use
- Updated dependencies [064012d]
- Updated dependencies [d980967]
- Updated dependencies [fb067fa]
- Updated dependencies [d5f7e24]
  - @postenbring/hedwig-tokens@1.3.0

## 1.6.0

### Minor Changes

- 5b76f10: update link sizes and add support for icons

### Patch Changes

- c0ed57c: small visual fix to the posten secondary logo
- 9548df8: Updated the posten logo with new color
- a061fb1: Fullwidth-card: re-styled for responsive layout. Keeps layout and images nice regardless of their size or aspect ratio, or the length of the text next to them. Square source images are recommended.

## 1.5.2

### Patch Changes

- 33ca79f: Card adjustments

## 1.5.1

### Patch Changes

- 910b97c: Support use of Breadcrumbs without reset.css

## 1.5.0

### Minor Changes

- baba2e8: This is the new version of Hedwig cards.
  They come in four different variants:

  - Slim (default)
  - Miniature
  - Full width
  - Focus

## 1.4.2

### Patch Changes

- 9737781: Fix grid on Safari 18.2
- f6d3a1e: :lipstick: checkbox/radio-button: only show focus outline on focus-visible

## 1.4.1

### Patch Changes

- Updated dependencies [f7aafd6]
  - @postenbring/hedwig-tokens@1.2.0

## 1.4.0

### Minor Changes

- 24dd8ed: Change Bring signature colors to the Bring 2.0 colors
- 021068f: Update to the new version of the Bring logos

### Patch Changes

- Updated dependencies [24dd8ed]
  - @postenbring/hedwig-tokens@1.1.0

## 1.3.0

### Minor Changes

- 606f360: allow list to have the bullet point (marker) color changed

  needed by the error-summary component

## 1.2.1

### Patch Changes

- 393cf21: :wheelchair: hide empty error-message using other attributes than `display: none`

## 1.2.0

### Minor Changes

- d841186: ✨ Added support for new message type info

## 1.1.0

### Minor Changes

- 8dff0b5: :sparkles: new component, spinner 🎉

### Patch Changes

- 508b0e5: :lipstick: link-list: bump space between link list items to 16px to closer resemble hedwig legacy
- ee07f33: :lipstick: link-list: always `12` gap between items in link-list using `margin-top`

## 1.0.0

### Major Changes

- bc12777: :tada: Version 1.0.0 of Hedwig Design System

  From now on we won't do breaking changes without bumping the major version

### Patch Changes

- Updated dependencies [bc12777]
  - @postenbring/hedwig-tokens@1.0.0

## 0.0.75

### Patch Changes

- 97cae32: :lipstick: fix font declaration for `strong` and `b`

  nesting a `strong` inside an `i` broke the `font-style` decleration

- 6b9ab7a: :lipstick: list: don't use `display: flex`

  margin collapse does not propegate outwards. This makes rendering `p` inside an `ul li` take more space than needed

  https://stackoverflow.com/a/43882888

## 0.0.74

### Patch Changes

- bdbefc6: :sparkles: figure: port figure component from hedwig legacy

## 0.0.73

### Patch Changes

- c7a3175: :sparkles: blockquote component
- 20d3179: :sparkles: styled-html: add table support
- 83f4c38: :recycle: radio-button: rename `Radiobutton` to `RadioButton`

  Matching what the rest of the world seems to be doing.

- Updated dependencies [83f4c38]
  - @postenbring/hedwig-tokens@0.0.16

## 0.0.72

### Patch Changes

- 0085306: :lipstick: help-text: replaced border-bottom with text decoration
- Updated dependencies [3435c56]
  - @postenbring/hedwig-tokens@0.0.15

## 0.0.71

### Patch Changes

- 7daed23: Make menu contents scrollable when content is longer than screen
- f635eed: :fire: typography: Posten Sans Light for Bring brand is deprecated and replaced with Posten Sans Medium
- Updated dependencies [f635eed]
  - @postenbring/hedwig-tokens@0.0.14

## 0.0.70

### Patch Changes

- 82a533f: :children_crossing: warning-banner: make the clickable area bigger and set a max-width for the text
- 8b53fef: :recycle: badge: make badge variant as props, not prefix in component name
- 9c24e2b: :recycle: button: make button variants as props, not prefix in component name

## 0.0.69

### Patch Changes

- 696c023: :recycle: navbar: update measurement code

## 0.0.68

### Patch Changes

- c403fa8: :recycle: big refactor removing `as` prop in favor of `asChild`

  For reasoning see Digdir/Designsystemet docummentation on the subject

  - https://www.designsystemet.no/grunnleggende/for-utviklere/komposisjon
  - https://github.com/digdir/designsystemet/issues/1124

  Other changes

  - Adding `forwardRef` on all components
  - Only one level of dot notation `Card.MediaImg` vs `Card.Media.Img`

## 0.0.67

### Patch Changes

- 1c0978b: :lipstick::wheelchair: new error styling for form components with black error text

  also fixup border stuff:

  - Remove default transparent border.
  - Always border bottom
  - Remove bottom border radius, matching figma
  - Remove transition for border increase, it caused jank on firefox and safari

## 0.0.66

### Patch Changes

- 5da92eb: :wheelchair: increase contrast on input focused state

## 0.0.65

### Patch Changes

- ec0c2b1: :lipstick: step-indicator: Set active step color to `signature`. This matches the posten app and is less confusing when there are less steps.

## 0.0.64

### Patch Changes

- f79bce1: :lipstick: body.css: add some reset's/overrides for some more html elements

  hedwig legacy also sets these, so we need to set them to able to live side-by-side hedwig legacy for some time

## 0.0.63

### Patch Changes

- b0da455: :adhesive_bandage: stack: fix missing initial justify
- 6cb8ac8: :sparkles: HelpText component

  Implementation inspired by the HelpText components from [NAV's Aksel](https://aksel.nav.no/komponenter/core/helptext) and [Digidir's Designsystemet](https://storybook.designsystemet.no/?path=/docs/komponenter-helptext--docs)

  And behaviour from NRK's help text component found in articles, e.g. [this one](https://www.nrk.no/tromsogfinnmark/legger-frem-dokumentasjon-som-skal-vise-kommunistisk-kupp-i-rod-ungdom-1.16845270)

- 2a66e3e: :truck: rename `Breadcrumb` folder to `Breadcrumbs` to match component name
- Updated dependencies [3956336]
  - @postenbring/hedwig-tokens@0.0.13

## 0.0.62

### Patch Changes

- 4e993e8: :dizzy: button: only transition the color values
- 96af4b1: :dizzy: only transition the color properties

  this fixes the flickering behaviour of font's suddenly scaling down or up when multiple css's are competing.

- 3d68008: :lipstick: remove double spacing on link lists

## 0.0.61

### Patch Changes

- 11f5aad: :bug: fix building nested `@extend`'s

  when extending a class that where also extending something else, it did not follow the path. Leading to the final bundle having `@extend` references.

## 0.0.60

### Patch Changes

- 21c8a0b: :sparkles: support gapX and gapY in Grid and Stack components

## 0.0.59

### Patch Changes

- adbf63b: :sparkles::construction: `Grid` component

## 0.0.58

### Patch Changes

- 93bf245: Add DatePicker component
- 36c3b52: :wrench: use `exports` in css package.json to fix some import issues

## 0.0.57

### Patch Changes

- 4c41daa: :sparkles::construction: new `HStack`, `VStack` and `Stack` component
- 68d6d96: Remove internal wrapper in Fieldset and add CSS variable to adjust spacing

## 0.0.56

### Patch Changes

- c1a572c: Add capability to Checkbox to display error message

  This change adds the prop `errorMessage` which takes a `ReactNode`.
  You should now only use `hasError` when your checkbox is part of a fieldset which will show the error message.
  Use `errorMessage` when your checkbox is standalone (not part of a fieldset). Doing this will add error styling,
  and display the error message. The component will take care of aria to connect the error message to the checkbox.

- 4065b13: :construction: implement PoC/WIP footer
- ed15248: :lipstick: fix button color for warning banner on iOS
- 935159b: :children_crossing: increase click area on tabs, making the easier to hit
- 81a33b2: :recycle: accordion: use `data-state="open"` and `data-state="closed"` for managing open/close state.

  [same as radix-ui](https://www.radix-ui.com/primitives/docs/components/accordion#item)

  gets rid of three classnames with three different conventions

  - `hds-accordion-item__expanded`
  - `hds-accordion-item-header--open`
  - `hds-accordion-item-content--closed`

- acbd14d: Fix Fieldset spacing to push error message a bit down
- 2a45026: Make spacings in Fieldset easily overridable
- 8ec9588: :dizzy: animate the `tabs` marker

  using pseudo selector for the animation, with `border-bottom` and `border-top` as the fallback and default.

  This way we avoid any initial jittering while still getting the animation when the user clicks. The selected tab will be marked correctly while js waits to load. This is called progressive enhancement.

  Animation technique inspired by Kevin Powell https://www.youtube.com/watch?v=h2AOXBeVrgI

- 7926d76: :lipstick::recycle: use native `text-decoration` for link underlines

  using `text-decoration-thickness` and `text-underline-offset`, two properties that where not supported when the link component in hedwig legacy was originally made.

- 6fb32cc: :sparkles: add margin-bottom utility classes, e.g. `hds-mb-24` and `hds-mb-24-32`
- 2e7e983: :lipstick: set `button` color explicitlly to fix blue colored buttons on ios.
- 218f2b9: :children_crossing: use the `inert` property to disable tabbing a disabled accordion's content

  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert

## 0.0.55

### Patch Changes

- fbc1166: :dizzy: add `animation` prop to `Skeleton`, allowing for no animation
- c20703b: :lipstick: style `a` tags automaticly in the `LinkList` component
- 22abb03: :lipstick: add some top margin of nested lists

## 0.0.54

### Patch Changes

- da7ef96: Fix visual bug causing radiobutton and checkbox with bounding box to increase height when they have error state

## 0.0.53

### Patch Changes

- 7e3fdb6: Lower specificity on fieldset margin and bring component out of WIP status

## 0.0.52

### Patch Changes

- e8a430f: Fix typed-classname CJS issue

  Because we offer both CJS and ESM version of hedwig-react, we must also offer
  a CJS (index.js) and ESM (index.mjs) version of typed-classname, so we can
  accommodate both modes of building apps which use HDS.

## 0.0.51

### Patch Changes

- Updated dependencies [16137bd]
  - @postenbring/hedwig-tokens@0.0.12

## 0.0.50

### Patch Changes

- 9f8b884: :recycle::sparkles: `hds-text` utility classes for the typography styles

## 0.0.49

### Patch Changes

- 8e87e04: :recycle: use css icons for warning-banner

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
