---
"@postenbring/hedwig-react": patch
---

Add context in Fieldset to give error state to contained components

Providing an errorMessage to Fieldset will now also give contained Checkboxes or Radiobuttons
error styling and aria to indicate invalid state.

For Radiobuttons you are even better off using the already existing RadioGroup.
