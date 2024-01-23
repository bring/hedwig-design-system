import type { HTMLAttributes, ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

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
 *   <dl>12 kg</dl>
 *   <dt>Antall kolli</dt>
 *   <dl>2</dl>
 * </DescriptionList>
 * ```
 *
 * Optionally wrap them in `<div>` elements as allowed by the HTML5 spec
 *
 * ```tsx
 * <DescriptionList>
 *   <div>
 *     <dt>Vekt</dt>
 *     <dl>12 kg</dl>
 *   </div>
 *   <div>
 *     <dt>Antall kolli</dt>
 *     <dl>2</dl>
 *   </div>
 * </DescriptionList>
 * ```
 */
export function DescriptionList({
  variant = "vertical",
  className,
  ...rest
}: DescriptionListProps) {
  return (
    <dl
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
}
DescriptionList.displayName = "DescriptionList";
