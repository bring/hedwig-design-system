# @postenbring/hedwig-react

## 2.2.1

### Patch Changes

- Updated dependencies [cbb8105]
  - @postenbring/hedwig-css@2.2.1

## 2.2.0

### Minor Changes

- 85d26a2: Add Alert component

### Patch Changes

- Updated dependencies [d9fb852]
- Updated dependencies [85d26a2]
  - @postenbring/hedwig-css@2.2.0

## 2.1.4

### Patch Changes

- 3b65270: adjusted padding, new sizenames
- 69bda07: Documentation changes only
- b39ae62: corrected small typo
- Updated dependencies [6ac09af]
- Updated dependencies [3b65270]
- Updated dependencies [724a528]
  - @postenbring/hedwig-css@2.1.4

## 2.1.3

### Patch Changes

- 951924d: Set width of navbar menu label, by pure CSS instead of JS
- Updated dependencies [951924d]
  - @postenbring/hedwig-css@2.1.3

## 2.1.2

### Patch Changes

- ceae386: Add and style .hds-card--slim class: it's the only card variant that needs margin-bottom on the media element. Remove overrides on other variants.
- Updated dependencies [ceae386]
  - @postenbring/hedwig-css@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [03987ec]
  - @postenbring/hedwig-css@2.1.1

## 2.1.0

### Minor Changes

- 5fecc71: Added component ButtonList

### Patch Changes

- Updated dependencies [5fecc71]
- Updated dependencies [1eb5642]
  - @postenbring/hedwig-css@2.1.0

## 2.0.0

### Major Changes

- b059e0f: removed deprecated variant medium
- 569d7b5: Remove deprecated prop values for buttons

### Minor Changes

- ece5bcb: Buttons update

  Bring the buttons into the new 2.0 design

- accfaff: Fullwidth-card: optional disabling of the cropping behavior of images in fullwidth-cards
- fb067fa: Update token colors for posten

### Patch Changes

- 064012d: Bump the minor-and-patch group across 1 directory with 36 updates
- d980967: Bump the minor-and-patch group with 16 updates
- d5f7e24: Updated link colors and icon use
- Updated dependencies [ece5bcb]
- Updated dependencies [064012d]
- Updated dependencies [accfaff]
- Updated dependencies [2b7f2ae]
- Updated dependencies [d980967]
- Updated dependencies [fb067fa]
- Updated dependencies [d5f7e24]
  - @postenbring/hedwig-css@2.0.0

## 1.5.0

### Minor Changes

- 5b76f10: update link sizes and add support for icons

### Patch Changes

- a061fb1: Fullwidth-card: re-styled for responsive layout. Keeps layout and images nice regardless of their size or aspect ratio, or the length of the text next to them. Square source images are recommended.
- Updated dependencies [c0ed57c]
- Updated dependencies [9548df8]
- Updated dependencies [5b76f10]
- Updated dependencies [a061fb1]
  - @postenbring/hedwig-css@1.6.0

## 1.4.2

### Patch Changes

- Updated dependencies [33ca79f]
  - @postenbring/hedwig-css@1.5.2

## 1.4.1

### Patch Changes

- Updated dependencies [910b97c]
  - @postenbring/hedwig-css@1.5.1

## 1.4.0

### Minor Changes

- baba2e8: This is the new version of Hedwig cards.
  They come in four different variants:

  - Slim (default)
  - Miniature
  - Full width
  - Focus

### Patch Changes

- 71f74f8: Allow for React 19 as peer dependency
- Updated dependencies [baba2e8]
  - @postenbring/hedwig-css@1.5.0

## 1.3.3

### Patch Changes

- Updated dependencies [9737781]
- Updated dependencies [f6d3a1e]
  - @postenbring/hedwig-css@1.4.2

## 1.3.2

### Patch Changes

- @postenbring/hedwig-css@1.4.1

## 1.3.1

### Patch Changes

- Updated dependencies [24dd8ed]
- Updated dependencies [021068f]
  - @postenbring/hedwig-css@1.4.0

## 1.3.0

### Minor Changes

- 606f360: allow list to have the bullet point (marker) color changed

  needed by the error-summary component

- 664860d: :tada: New component: Error Summary :sparkles:

### Patch Changes

- d774bb9: Change aria-live default and make it configurable via props
- Updated dependencies [606f360]
  - @postenbring/hedwig-css@1.3.0

## 1.2.2

### Patch Changes

- Updated dependencies [393cf21]
  - @postenbring/hedwig-css@1.2.1

## 1.2.1

### Patch Changes

- d61853f: :bug: Fix screen readers not picking up `Checkbox` error messages due to conditional rendering

  the `aria-live` attribute requires that the element exists in the DOM already for it to announce changes

## 1.2.0

### Minor Changes

- d841186: ✨ Added support for new message type info

### Patch Changes

- 6651c44: :lipstick: navbar: use `currentColor` in menu close icon
- Updated dependencies [d841186]
  - @postenbring/hedwig-css@1.2.0

## 1.1.0

### Minor Changes

- 8dff0b5: :sparkles: new component, spinner 🎉

### Patch Changes

- Updated dependencies [8dff0b5]
- Updated dependencies [508b0e5]
- Updated dependencies [ee07f33]
  - @postenbring/hedwig-css@1.1.0

## 1.0.0

### Major Changes

- bc12777: :tada: Version 1.0.0 of Hedwig Design System

  From now on we won't do breaking changes without bumping the major version

### Patch Changes

- Updated dependencies [bc12777]
  - @postenbring/hedwig-css@1.0.0

## 0.0.90

### Patch Changes

- Updated dependencies [97cae32]
- Updated dependencies [6b9ab7a]
  - @postenbring/hedwig-css@0.0.75

## 0.0.89

### Patch Changes

- bdbefc6: :sparkles: figure: port figure component from hedwig legacy
- Updated dependencies [bdbefc6]
  - @postenbring/hedwig-css@0.0.74

## 0.0.88

### Patch Changes

- c7a3175: :sparkles: blockquote component
- 83f4c38: :recycle: radio-button: rename `Radiobutton` to `RadioButton`

  Matching what the rest of the world seems to be doing.

- 4f6795b: :lipstick: navbar: use a larger close icon for the navbar
- Updated dependencies [c7a3175]
- Updated dependencies [20d3179]
- Updated dependencies [83f4c38]
  - @postenbring/hedwig-css@0.0.73

## 0.0.87

### Patch Changes

- Updated dependencies [0085306]
  - @postenbring/hedwig-css@0.0.72

## 0.0.86

### Patch Changes

- 84dbe08: :boom: react: don't import the css package by default in the react package.

  It's up the consumer to make sure the css is loaded. Usaully this is as simple as importing it.

  This has caused a lot of small issues when using HDS, giving more explicit controll looks to be the better option.

## 0.0.85

### Patch Changes

- Updated dependencies [7daed23]
- Updated dependencies [f635eed]
  - @postenbring/hedwig-css@0.0.71

## 0.0.84

### Patch Changes

- 82a533f: :children_crossing: warning-banner: make the clickable area bigger and set a max-width for the text
- 8b53fef: :recycle: badge: make badge variant as props, not prefix in component name
- 9c24e2b: :recycle: button: make button variants as props, not prefix in component name
- bbafdbd: :wheelchair: set aria-expanded with aria-controls on accordion and navbar
- Updated dependencies [82a533f]
- Updated dependencies [8b53fef]
- Updated dependencies [9c24e2b]
  - @postenbring/hedwig-css@0.0.70

## 0.0.83

### Patch Changes

- 7564a24: :sparkles: react: expose utils

## 0.0.82

### Patch Changes

- 4b3cb5f: :label: react: generate types using tsc complete with decleration maps, including `src/` folder

  - Faster type generation
  - Makes go to decleration nicer, same as in java/intellij when you get the actual source code

## 0.0.81

### Patch Changes

- :bug: accordion: fix regression with the `inert` state being toggled the wrong way

## 0.0.80

### Patch Changes

- 696c023: :recycle: navbar: update measurement code
- Updated dependencies [696c023]
  - @postenbring/hedwig-css@0.0.69

## 0.0.79

### Patch Changes

- 6439979: :adhesive_bandage: fix missing ref wiring

## 0.0.78

### Patch Changes

- 6572d8d: :construction::recycle: navbar: fix types

## 0.0.77

### Patch Changes

- c403fa8: :recycle: big refactor removing `as` prop in favor of `asChild`

  For reasoning see Digdir/Designsystemet docummentation on the subject

  - https://www.designsystemet.no/grunnleggende/for-utviklere/komposisjon
  - https://github.com/digdir/designsystemet/issues/1124

  Other changes

  - Adding `forwardRef` on all components
  - Only one level of dot notation `Card.MediaImg` vs `Card.Media.Img`

- Updated dependencies [c403fa8]
  - @postenbring/hedwig-css@0.0.68

## 0.0.76

### Patch Changes

- 6ad0d21: :wrench: react: set a more explicit side-effects definition
- Updated dependencies [1c0978b]
  - @postenbring/hedwig-css@0.0.67

## 0.0.75

### Patch Changes

- 0a13d64: :zap::heavy_minus_sign: navbar: remove `focus-trap-react` in favor of small inline utility using the `inert` property

  the `focus-trap-react` package increased the bundle by whopping `25kb` gzipped. Good ridance...

  `inert` has 96% coverage in norway as of writing, more than good enough.

- Updated dependencies [5da92eb]
  - @postenbring/hedwig-css@0.0.66

## 0.0.74

### Patch Changes

- Updated dependencies [ec0c2b1]
  - @postenbring/hedwig-css@0.0.65

## 0.0.73

### Patch Changes

- befdf94: :wrench: update HelpText api
- Updated dependencies [f79bce1]
  - @postenbring/hedwig-css@0.0.64

## 0.0.72

### Patch Changes

- d15f6f8: :recycle: auto-animate-height: use transitionend event to handle callbacks after transition is done
- 294d77b: :label: allow non `li` react types in the `Breadcrumbs` component

  Needed when using abstractions upon `li` or doing conditional rendering

- 6cb8ac8: :sparkles: HelpText component

  Implementation inspired by the HelpText components from [NAV's Aksel](https://aksel.nav.no/komponenter/core/helptext) and [Digidir's Designsystemet](https://storybook.designsystemet.no/?path=/docs/komponenter-helptext--docs)

  And behaviour from NRK's help text component found in articles, e.g. [this one](https://www.nrk.no/tromsogfinnmark/legger-frem-dokumentasjon-som-skal-vise-kommunistisk-kupp-i-rod-ungdom-1.16845270)

- e361dc3: :adhesive_bandage: description-list: fix missing forwardRef
- 3887615: :fire: remove deprecated fill value `outlined` in favour of `outline`
- 2a66e3e: :truck: rename `Breadcrumb` folder to `Breadcrumbs` to match component name
- Updated dependencies [b0da455]
- Updated dependencies [6cb8ac8]
- Updated dependencies [2a66e3e]
  - @postenbring/hedwig-css@0.0.63

## 0.0.71

### Patch Changes

- Updated dependencies [4e993e8]
- Updated dependencies [96af4b1]
- Updated dependencies [3d68008]
  - @postenbring/hedwig-css@0.0.62

## 0.0.70

### Patch Changes

- Updated dependencies [11f5aad]
  - @postenbring/hedwig-css@0.0.61

## 0.0.69

### Patch Changes

- 21c8a0b: :sparkles: support gapX and gapY in Grid and Stack components
- Updated dependencies [21c8a0b]
  - @postenbring/hedwig-css@0.0.60

## 0.0.68

### Patch Changes

- adbf63b: :sparkles::construction: `Grid` component
- Updated dependencies [adbf63b]
  - @postenbring/hedwig-css@0.0.59

## 0.0.67

### Patch Changes

- 93bf245: Add DatePicker component
- 32e4bbf: Add another export option for components
- Updated dependencies [93bf245]
- Updated dependencies [36c3b52]
  - @postenbring/hedwig-css@0.0.58

## 0.0.66

### Patch Changes

- 4c41daa: :sparkles::construction: new `HStack`, `VStack` and `Stack` component
- 68d6d96: Remove internal wrapper in Fieldset and add CSS variable to adjust spacing
- Updated dependencies [4c41daa]
- Updated dependencies [68d6d96]
  - @postenbring/hedwig-css@0.0.57

## 0.0.65

### Patch Changes

- c1a572c: Add capability to Checkbox to display error message

  This change adds the prop `errorMessage` which takes a `ReactNode`.
  You should now only use `hasError` when your checkbox is part of a fieldset which will show the error message.
  Use `errorMessage` when your checkbox is standalone (not part of a fieldset). Doing this will add error styling,
  and display the error message. The component will take care of aria to connect the error message to the checkbox.

- be80492: Radiobutton and RadioGroup should require prop children
- 4065b13: :construction: implement PoC/WIP footer
- 81a33b2: :recycle: accordion: use `data-state="open"` and `data-state="closed"` for managing open/close state.

  [same as radix-ui](https://www.radix-ui.com/primitives/docs/components/accordion#item)

  gets rid of three classnames with three different conventions

  - `hds-accordion-item__expanded`
  - `hds-accordion-item-header--open`
  - `hds-accordion-item-content--closed`

- 8ec9588: :dizzy: animate the `tabs` marker

  using pseudo selector for the animation, with `border-bottom` and `border-top` as the fallback and default.

  This way we avoid any initial jittering while still getting the animation when the user clicks. The selected tab will be marked correctly while js waits to load. This is called progressive enhancement.

  Animation technique inspired by Kevin Powell https://www.youtube.com/watch?v=h2AOXBeVrgI

- c3625fe: Add context in Fieldset to give error state to contained components

  Providing an errorMessage to Fieldset will now also give contained Checkboxes or Radiobuttons
  error styling and aria to indicate invalid state.

  For Radiobuttons you are even better off using the already existing RadioGroup.

- Updated dependencies [c1a572c]
- Updated dependencies [4065b13]
- Updated dependencies [ed15248]
- Updated dependencies [935159b]
- Updated dependencies [81a33b2]
- Updated dependencies [acbd14d]
- Updated dependencies [2a45026]
- Updated dependencies [8ec9588]
- Updated dependencies [7926d76]
- Updated dependencies [6fb32cc]
- Updated dependencies [2e7e983]
- Updated dependencies [218f2b9]
  - @postenbring/hedwig-css@0.0.56

## 0.0.64

### Patch Changes

- fbc1166: :dizzy: add `animation` prop to `Skeleton`, allowing for no animation
- Updated dependencies [fbc1166]
- Updated dependencies [c20703b]
- Updated dependencies [22abb03]
  - @postenbring/hedwig-css@0.0.55

## 0.0.63

### Patch Changes

- add forwardRef to ShowMoreButton and StepIndicator

## 0.0.62

### Patch Changes

- d7d14a8: :bug: fix auto-animate-height not showing the latest children if triggered again during an animation

## 0.0.61

### Patch Changes

- f4fff54: Add component RadioGroup to wrap around Radiobuttons, making life a bit easier

## 0.0.60

### Patch Changes

- Updated dependencies [da7ef96]
  - @postenbring/hedwig-css@0.0.54

## 0.0.59

### Patch Changes

- 7e3fdb6: Lower specificity on fieldset margin and bring component out of WIP status
- Updated dependencies [7e3fdb6]
  - @postenbring/hedwig-css@0.0.53

## 0.0.58

### Patch Changes

- e8a430f: Fix typed-classname CJS issue

  Because we offer both CJS and ESM version of hedwig-react, we must also offer
  a CJS (index.js) and ESM (index.mjs) version of typed-classname, so we can
  accommodate both modes of building apps which use HDS.

- Updated dependencies [e8a430f]
  - @postenbring/hedwig-css@0.0.52

## 0.0.57

### Patch Changes

- @postenbring/hedwig-css@0.0.51

## 0.0.56

### Patch Changes

- 9f8b884: :recycle::sparkles: `hds-text` utility classes for the typography styles
- f5889f1: :sparkles: `Text` component
- Updated dependencies [9f8b884]
  - @postenbring/hedwig-css@0.0.50

## 0.0.55

### Patch Changes

- 3766818: :adhesive_bandage: fix css not loading when using `@postenbring/hedwig-react` during development in a fresh vite project
- 8e87e04: :recycle: use css icons for warning-banner
- Updated dependencies [8e87e04]
  - @postenbring/hedwig-css@0.0.49

## 0.0.54

### Patch Changes

- e40464f: :wrench: update StepIndicator api after feedback
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

- Updated dependencies [c112dc7]
- Updated dependencies [1aa4278]
- Updated dependencies [4be7acc]
- Updated dependencies [0048318]
- Updated dependencies [f47d3d9]
- Updated dependencies [54a0b68]
  - @postenbring/hedwig-css@0.0.48

## 0.0.53

### Patch Changes

- 5a35c59: :hammer: use `experimentalDts` to build typescript declerations for the react package

  The normal `dts` flag causes an out of memory exception when running on CI

  Could probably be changing up our build, e.g. fewer entry points, only bundle for ESM. If the new declerations causes problems we will have to do that

## 0.0.52

### Patch Changes

- 4a13d0d: :construction: implement a Skeleton component
- 8aa8630: :fire: remove unused prop from Link component
- Updated dependencies [4a13d0d]
- Updated dependencies [891ce74]
  - @postenbring/hedwig-css@0.0.47

## 0.0.51

### Patch Changes

- 0b0d3de: :sparkles: Step indicator and Show more components
- Updated dependencies [0b0d3de]
  - @postenbring/hedwig-css@0.0.46

## 0.0.50

### Patch Changes

- Updated dependencies [affbc87]
  - @postenbring/hedwig-css@0.0.45

## 0.0.49

### Patch Changes

- 3cea428: :sparkles: `aria-live: assertive` on error messages

  as discussed with consultant from Inklud.

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

- b256239: :wrench: use `outline` instead of `outlined`

      deprecate `outlined` without breaking existing usage

- 6f998d3: :truck: rename `Prose` -> `StyledHtml`

  Not a perfect name, but a little better. As decided during a hedwig team meeting.

- Updated dependencies [3dc1334]
- Updated dependencies [6f998d3]
  - @postenbring/hedwig-css@0.0.44

## 0.0.48

### Patch Changes

- Updated dependencies [b350cc2]
  - @postenbring/hedwig-css@0.0.43

## 0.0.47

### Patch Changes

- Updated dependencies [f5230a9]
  - @postenbring/hedwig-css@0.0.42

## 0.0.46

### Patch Changes

- 6af13de: :sparkles: expose Prose component

## 0.0.45

### Patch Changes

- 8605454: Add Fieldset, extract ErrorMessage and group form stuff
- Updated dependencies [8605454]
  - @postenbring/hedwig-css@0.0.41

## 0.0.44

### Patch Changes

- c95d7a7: :memo: &lt;span&gt; instead of &lt;a&gt; as default tag on card arrow, as default is that the whole card is a link.

## 0.0.43

### Patch Changes

- 374ec36: For Input, Select, Textarea. Pass className and style to the InputGroup, not the inner component. This what a consumer would expect. Also what everyone else does.

## 0.0.42

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

- Updated dependencies [63123e7]
- Updated dependencies [6b8aadb]
- Updated dependencies [2cb7e81]
  - @postenbring/hedwig-css@0.0.40

## 0.0.41

### Patch Changes

- 0509d61: :memo: Update docs
- Updated dependencies [0509d61]
  - @postenbring/hedwig-css@0.0.39

## 0.0.40

### Patch Changes

- f8466dc: :lipstick: Reset Card styles when wrapped as an `<a>` or a hedwig `<Link />`.
- Updated dependencies [f8466dc]
  - @postenbring/hedwig-css@0.0.38

## 0.0.39

### Patch Changes

- 67638bf: :recycle: update component exports
- 779c39d: :sparkles::construction: implement wysiwyg/prose/richtext/dynamic-content component. using `@extend` in css to re-use styles
- Updated dependencies [779c39d]
- Updated dependencies [b5328a0]
- Updated dependencies [0e936c0]
  - @postenbring/hedwig-css@0.0.37

## 0.0.38

### Patch Changes

- a1f5a96: Accessibility adjustments on Card component
- Updated dependencies [a1f5a96]
  - @postenbring/hedwig-css@0.0.36

## 0.0.37

### Patch Changes

- :technologist: make select variant optional, default to the default style
- Updated dependencies
  - @postenbring/hedwig-css@0.0.35

## 0.0.36

### Patch Changes

- 1d0bfa4: :lipstick: update Input with fixed height `58px` to match figma sketches

  support composing the tracking number search

- Updated dependencies [1d0bfa4]
  - @postenbring/hedwig-css@0.0.34

## 0.0.35

### Patch Changes

- Updated dependencies [58996a7]
  - @postenbring/hedwig-css@0.0.33

## 0.0.34

### Patch Changes

- 9c7eafd: First version of `<Card/>` component.
- 7346d02: :sparkles: container component in react
- Updated dependencies [9c7eafd]
  - @postenbring/hedwig-css@0.0.32

## 0.0.33

### Patch Changes

- Updated dependencies [5b5676c]
  - @postenbring/hedwig-css@0.0.31

## 0.0.32

### Patch Changes

- Updated dependencies [5f8dbd4]
- Updated dependencies [4e7c846]
  - @postenbring/hedwig-css@0.0.30

## 0.0.31

### Patch Changes

- aabf5e9: :lipstick: update badge styling to match figma sketches
- Updated dependencies [aabf5e9]
  - @postenbring/hedwig-css@0.0.29

## 0.0.30

### Patch Changes

- e614cc1: :lipstick: fixup spacing issues for description list
- Updated dependencies [e614cc1]
  - @postenbring/hedwig-css@0.0.28

## 0.0.29

### Patch Changes

- 85d5d12: :building_construction: update to the expected prop spreading api
- Updated dependencies [85d5d12]
  - @postenbring/hedwig-css@0.0.27

## 0.0.28

### Patch Changes

- Updated dependencies [d1a73c5]
  - @postenbring/hedwig-css@0.0.26

## 0.0.27

### Patch Changes

- Updated dependencies [e387d19]
  - @postenbring/hedwig-css@0.0.25

## 0.0.26

### Patch Changes

- 7a2c020: :recycle: Rename `Dropdown` -> `Select` and rewrite to match `Input`
- 738f520: Release Textarea styling and component
- 8a2ea33: :truck: rename badge variant `primary` -> `lighter`
- 08ff783: Renamed package Dropdown to Select, added some styling
- 2d2945d: :arrow_up: bump dependencies
- 2261893: :technologist: update accordion api
- Updated dependencies [7a2c020]
- Updated dependencies [738f520]
- Updated dependencies [8a2ea33]
- Updated dependencies [08ff783]
- Updated dependencies [2d2945d]
  - @postenbring/hedwig-css@0.0.24

## 0.0.25

### Patch Changes

- 5626c6d: Exporting input

## 0.0.24

### Patch Changes

- 28543d9: Finished initial Input styling and component
- Updated dependencies [28543d9]
  - @postenbring/hedwig-css@0.0.23

## 0.0.23

### Patch Changes

- Updated dependencies [a03703a]
  - @postenbring/hedwig-css@0.0.22

## 0.0.22

### Patch Changes

- Updated dependencies [89ca3d3]
  - @postenbring/hedwig-css@0.0.21

## 0.0.21

### Patch Changes

- Updated dependencies [7b07be1]
  - @postenbring/hedwig-css@0.0.20

## 0.0.20

### Patch Changes

- Updated dependencies [4695c56]
  - @postenbring/hedwig-css@0.0.19

## 0.0.19

### Patch Changes

- @postenbring/hedwig-css@0.0.18

## 0.0.18

### Patch Changes

- Updated dependencies [b5cc49d]
  - @postenbring/hedwig-css@0.0.17

## 0.0.17

### Patch Changes

- 54e525a: Adding baseline component for `<Tabs/>`
- Updated dependencies [8ff1148]
- Updated dependencies [54e525a]
  - @postenbring/hedwig-css@0.0.16

## 0.0.16

### Patch Changes

- 9dd2249: override h1,h2,h3,h4,h5,h6 font family
- Updated dependencies [9dd2249]
  - @postenbring/hedwig-css@0.0.15

## 0.0.15

### Patch Changes

- 5d814e8: Added dropdown component
- Updated dependencies [c5597ea]
- Updated dependencies [5d814e8]
  - @postenbring/hedwig-css@0.0.14

## 0.0.14

### Patch Changes

- 67d4df7: :construction: add WIP modal
- Updated dependencies [67d4df7]
  - @postenbring/hedwig-css@0.0.13

## 0.0.13

### Patch Changes

- 6d01b04: Adding component for Bread > Crumbs > Are > Here
- Updated dependencies [6d01b04]
  - @postenbring/hedwig-css@0.0.12

## 0.0.12

### Patch Changes

- de791ec: make children prop optional to allow for dangerouslySetInnerHTML usage

## 0.0.11

### Patch Changes

- 2e340d0: :lipstick: update list styling
- Updated dependencies [2e340d0]
  - @postenbring/hedwig-css@0.0.11

## 0.0.10

### Patch Changes

- @postenbring/hedwig-css@0.0.10

## 0.0.9

### Patch Changes

- 090a3e5: Added proper icon for accordion (svg)
- Updated dependencies [090a3e5]
  - @postenbring/hedwig-css@0.0.9

## 0.0.8

### Patch Changes

- b49b65b: :sparkles: make Link overrideable, so it can be used as a button
- Updated dependencies [b49b65b]
  - @postenbring/hedwig-css@0.0.8

## 0.0.7

### Patch Changes

- 811c3b0: :lipstick: add `Message.Title` and `Message.Description` helper components to `Message` & Fix 2px missing margin for the first text so it matches the icon
- 8baa704: ✨ Button Icon variant and ✨ Button as a link
- Updated dependencies [811c3b0]
- Updated dependencies [8baa704]
  - @postenbring/hedwig-css@0.0.7

## 0.0.6

### Patch Changes

- Updated dependencies
  - @postenbring/hedwig-css@0.0.6

## 0.0.5

### Patch Changes

- 179fcb0: Adding description lists to the mix for hedwig components
- f26bdb2: Adding support for List components!
- 54cdfb5: Adding new component for Accordion
- cc4c78c: Various minor technical changes
- d219982: :sparkles: Box and Message component
- 1e0a73f: Add Input component and styling
- a5a9054: ✨ New component for LinkList
- Updated dependencies [fa82315]
- Updated dependencies [179fcb0]
- Updated dependencies [f26bdb2]
- Updated dependencies [54cdfb5]
- Updated dependencies [cc4c78c]
- Updated dependencies [d219982]
- Updated dependencies [1e0a73f]
- Updated dependencies [430b517]
- Updated dependencies [856c871]
- Updated dependencies [321c814]
  - @postenbring/hedwig-css@0.0.5
  - @postenbring/hedwig-tokens@0.0.3

## 0.0.4

### Patch Changes

- 2bb6767: fix typed-classname
- 1a909d1: Added badge component
- ae1af04: export interface types and use star exports
- Updated dependencies [ef9551a]
- Updated dependencies [d0febe5]
- Updated dependencies [2bb6767]
- Updated dependencies [8cdb781]
- Updated dependencies [1a909d1]
- Updated dependencies [8cdb781]
  - @postenbring/hedwig-tokens@0.0.2
  - @postenbring/hedwig-css@0.0.4

## 0.0.3

### Patch Changes

- 1d84f3c: :sparkles: add Link component
- 9d31ff5: fix font, transition, and responsive mobile width for button
- a0a4916: include update tokens and base css
- Updated dependencies [1d84f3c]
- Updated dependencies [9d31ff5]
- Updated dependencies [a0a4916]
- Updated dependencies [a0a4916]
  - @postenbring/hedwig-css@0.0.2
  - @postenbring/hedwig-tokens@0.0.1

## 0.0.2

### Patch Changes

- patch test

## 0.0.1

### Patch Changes

- start publishing
- Updated dependencies
  - @postenbring/hedwig-css@0.0.1
