# @postenbring/hedwig-react

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
