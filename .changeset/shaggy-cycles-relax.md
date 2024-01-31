---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

## Accordion improvments

### 💫 Animations

The open / close transitions are now animated. With just pure css 🎉

### Remove `variant="single" | "multiple"` in favor of `open` & `onOpenChange`

I think a single accordion is a rare use case. In those cases it's easy enough to implement yourself, taking full control of the accordion

### Rename `trigger` -> `header`

I saw that all the other systems called it this, so just renamed

### Support `indent` prop

When you don't want left padding on the content. We have a case for this in `open-tracking`.
