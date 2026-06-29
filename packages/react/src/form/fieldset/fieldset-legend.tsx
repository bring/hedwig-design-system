import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

/**
 * FieldsetLegend component, used to display a legend for a fieldset.
 *
 * @example
 * <FieldsetLegend>Skriv inn dine svar</FieldsetLegend>
 */
export const FieldsetLegend = forwardRef<HTMLLegendElement, HTMLAttributes<HTMLLegendElement>>(
  function FieldsetLegend({ className, ...rest }, ref) {
    return (
      <legend
        className={clsx("hds-fieldset__legend", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);

FieldsetLegend.displayName = "Fieldset.Legend";
