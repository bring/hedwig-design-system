/**
 * Focus a form field while showing the associated legend or label in the viewport.
 *
 * Gives the user a better context of what field they are focusing on.
 *
 * Copied from https://github.com/alphagov/govuk-frontend/blob/cbf4ef1e329711be5b78a92bda6ba84a7db9ca40/packages/govuk-frontend/src/govuk/components/error-summary/error-summary.mjs#L60-L108
 */
export function focusWithLegendOrLabelInViewport(id: string) {
  const input = document.getElementById(id);
  if (!input) {
    return false;
  }

  const legendOrLabel = maybeLegendForInput(input) ?? labelForInput(input);
  if (!legendOrLabel) {
    return false;
  }

  legendOrLabel.scrollIntoView();
  input.focus({ preventScroll: true });

  return true;
}

function maybeLegendForInput(input: HTMLElement) {
  const fieldset = input.closest("fieldset");
  if (!fieldset) {
    return null;
  }

  const legend = fieldset.querySelector("legend");
  if (!legend) {
    return null;
  }

  // If the input type is radio or checkbox, always use the legend if
  // there is one.
  if (input instanceof HTMLInputElement && (input.type === "checkbox" || input.type === "radio")) {
    return legend;
  }

  // For other input types, only scroll to the fieldset’s legend (instead
  // of the label associated with the input) if the input would end up in
  // the top half of the screen.
  //
  // This should avoid situations where the input either ends up off the
  // screen, or obscured by a software keyboard.
  const legendTop = legend.getBoundingClientRect().top;
  const inputRect = input.getBoundingClientRect();

  // If the browser doesn't support Element.getBoundingClientRect().height
  // or window.innerHeight (like IE8), bail and just link to the label.
  if (inputRect.height && window.innerHeight) {
    const inputBottom = inputRect.top + inputRect.height;

    if (inputBottom - legendTop < window.innerHeight / 2) {
      return legend;
    }
  }
}

function labelForInput(input: HTMLElement) {
  return (
    document.querySelector(`label[for='${input.getAttribute("id")}']`) ?? input.closest("label")
  );
}
