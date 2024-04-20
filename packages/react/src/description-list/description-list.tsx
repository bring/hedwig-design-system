import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Either `DescriptionDetails` or `DescriptionTerm` elements
   */
  children?: ReactNode;
  /**
   * Direction of the description list
   */
  variant?: "vertical" | "horizontal";
}

/**
 * Uses the HTML5 `<dl>` element
 *
 * Pass in corresponding `<dt>` and `<dd>` elements as children
 *
 * ```tsx
 * <DescriptionList>
 *   <dt>Vekt</dt>
 *   <dd>12 kg</dd>
 *   <dt>Antall kolli</dt>
 *   <dd>2</dd>
 * </DescriptionList>
 * ```
 *
 * Optionally wrap them in `<div>` elements as allowed by the HTML5 spec
 *
 * ```tsx
 * <DescriptionList>
 *   <div>
 *     <dt>Vekt</dt>
 *     <dd>12 kg</dd>
 *   </div>
 *   <div>
 *     <dt>Antall kolli</dt>
 *     <dd>2</dd>
 *   </div>
 * </DescriptionList>
 * ```
 */
export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ variant = "vertical", className, ...rest }, ref) => {
    return (
      <dl
        ref={ref}
        className={clsx(
          "hds-description-list",
          {
            "hds-description-list--horizontal": variant === "horizontal",
          },
          className as undefined,
        )}
        {...rest}
      />
    );
  },
);
DescriptionList.displayName = "DescriptionList";
