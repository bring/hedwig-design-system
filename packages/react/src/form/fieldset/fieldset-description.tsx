import { forwardRef, type HTMLAttributes } from "react";

export type FieldsetDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * FieldsetDescription component, used to display a description for a fieldset.
 *
 * @example
 * <FieldsetDescription>
 *   Gi en kort beskrivelse i begge feltene
 * </FieldsetDescription>
 */
export const FieldsetDescription = forwardRef<HTMLParagraphElement, FieldsetDescriptionProps>(
  function FieldsetDescription(rest, ref) {
    return <p className="hds-fieldset__description" ref={ref} {...rest} />;
  },
);
