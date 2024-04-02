---
"@postenbring/hedwig-react": patch
"@postenbring/hedwig-css": patch
---

Add capability to Checkbox to display error message

This change adds the prop `errorMessage` which takes a `ReactNode`.
You should now only use `hasError` when your checkbox is part of a fieldset which will show the error message.
Use `errorMessage` when your checkbox is standalone (not part of a fieldset). Doing this will add error styling,
and display the error message. The component will take care of aria to connect the error message to the checkbox.
