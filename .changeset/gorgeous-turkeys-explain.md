---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

:recycle: accordion: use `data-state="open"` and `data-state="closed"` for managing open/close state.

[same as radix-ui](https://www.radix-ui.com/primitives/docs/components/accordion#item)

gets rid of three classnames with three different conventions

- `hds-accordion-item__expanded`
- `hds-accordion-item-header--open`
- `hds-accordion-item-content--closed`
